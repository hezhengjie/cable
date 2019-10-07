import { gql } from 'apollo-boost';
class Gql{
    gql:any;
    constructor(scheme:string){
        this.gql = gql`${scheme}`;
    }

}

export default Gql;