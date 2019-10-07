import ApolloClient from 'apollo-boost';
import CableError from './error';
class Clinet {
    uri:string;
    option:{} = {request: async operation => {
        operation.setContext({
          fetchOptions: {
            credentials: 'include'
          }
        });
    }};
    client:{};
    constructor(option:{uri:string}){
        if(!option.uri){ throw new CableError('Client uri 为必填参数') }
        this.uri = option.uri;
        this.option = Object.assign(this.option,option);
        this.client = new ApolloClient(this.option);
    }

}

export default Clinet;