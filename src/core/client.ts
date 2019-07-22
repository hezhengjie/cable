import ApolloClient from 'apollo-boost';
import _ from 'lodash';
import CableError from './error';
class Clinet {
    uri:string;
    option:{};
    client:{};
    constructor(option:{uri:string}){
        if(!option.uri){ throw new CableError('Task uri 为必填参数') }
        this.uri = option.uri;
        this.option = option;
        this.client = new ApolloClient(option);
    }

}

export default Clinet;