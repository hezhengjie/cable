import Client from "./core/client";
import CableError from "./core/error";
import _ from 'lodash';
class Cable {
    clients:{ [key: string]: Client };
    clientQueue:{
        [key: string]:{
            uri:string
        }
    };
    defaultClient:{}|null;
    // fetchOptions:{};
    // headers:{};
    constructor(config:{clients:{},defaultClient:string,option:{}}) {
        if (!config) {
            throw new CableError('Options argument required')
        }
        const {clients,defaultClient,option} = config;
        this.clientQueue = clients||{};
        this.clients = {};
        this.defaultClient = null;
        Object.keys(this.clientQueue).forEach((clientName)=>{
            const client = new Client(this.clientQueue[clientName]);
            this.clients[clientName] = client; 
            if(!this.defaultClient){
                this.defaultClient = client;
            }
        });
        if(defaultClient&&_.isString(defaultClient)){
            this.defaultClient = this.clients[defaultClient]
        }
    }
    /**
     * 增加Client
     * @param Client 
     */
    addClient(newClient:{[key: string]:{uri:string}}) {
        Object.keys(newClient).forEach((clientName)=>{
            this.clientQueue[clientName] = newClient[clientName]
            const client = new Client(newClient[clientName]);
            this.clients[clientName] = client;      
        })
    }
    /**
     * 查询语句
     */
    query(data,client) {
        const query = new Gql(url,data);
        this.client
  .query({
    query})
  .then(res => res.data);
    }   
    /**
     * 编辑语句
     */
    mutations() {
        const query = new Gql(url,data);
        this.client
  .query({
    query})
  .then(res => res.data);
    }
}

export default Cable;