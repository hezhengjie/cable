import {gql} from 'apollo-boost';
class Gql{
    type:string;
    scheme:string;
    constructor(scheme:string){
        this.scheme = gql`${scheme}`;
    }

}

export default Gql;