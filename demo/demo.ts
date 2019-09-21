import Cable from '../src/index';

const cable = new Cable();
cable.addClient({
    github:{
        uri:'https://zion.sankuai.com/tivan/v1/graphql'
    }
});

cable.query(`query{
    resources(pageNo:1,pageSize:10){
      totalNum
    }
  }
  `).then(res=>console.log(res)).catch((err)=>{
    console.log(err)
  });