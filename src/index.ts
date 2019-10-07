import Client from "./core/client";
import Gql from "./core/gql";
import CableError from "./core/error";
import _ from 'lodash';



class Cable {
    clients: { [key: string]: Client };
    clientQueue: {
        [key: string]: {
            uri: string
        }
    };
    defaultClient: Client | null;
    // fetchOptions:{};
    // headers:{};
    constructor(config: { clients: {} | null, defaultClient: string | null, option: {} | null } | void) {
        const { clients = null, defaultClient = null } = config || {};
        this.clientQueue = clients || {};
        this.clients = {};
        this.defaultClient = null;
        Object.keys(this.clientQueue).forEach((clientName) => {
            const client = new Client(this.clientQueue[clientName]);
            this.clients[clientName] = client;
            if (!this.defaultClient) {
                this.defaultClient = client;
            }
        });
        if (defaultClient && _.isString(defaultClient)) {
            this.defaultClient = this.clients[defaultClient]
        }
    }
    /**
     * 增加Client
     * @param Client 
     */
    addClient(newClient: { [key: string]: { uri: string } }) {
        Object.keys(newClient).forEach((clientName) => {
            this.clientQueue[clientName] = newClient[clientName]
            const client = new Client(newClient[clientName]);
            this.clients[clientName] = client;
            if (!this.defaultClient) {
                this.defaultClient = client;
            }
        })
    }
    /**
     * 查询语句
     */
    query(scheme: string, variables:object,client: string) {
        const query = new Gql(scheme);
        let activeClient = this.defaultClient;
        if (client && this.clients[client]) {
            activeClient = this.clients[client];
        }
        if (!activeClient) {
            throw new CableError('no active client');
        }
        return activeClient.client.query({
            query: query.gql,
            variables
        }).then((res: {}) => {
            return res.data;
        });
    }
    /**
     * 编辑语句
     */
    mutations(scheme: string, variables:object,client: string) {
        const query = new Gql(scheme);
        let activeClient = this.defaultClient;
        if (client && this.clients[client]) {
            activeClient = this.clients[client];
        }
        if (!activeClient) {
            throw new CableError('no active client');
        }
        return activeClient.client.mutate({
            mutation: query.gql,
            variables
        }).then((res: {}) => {
            return res.data;
        });
    }
}

export default Cable;