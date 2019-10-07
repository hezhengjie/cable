import Cable from '../src/index';

const cable = new Cable();
// 新增clinet
cable.addClient({
    github:{
        uri:'https://api.github.com/graphql'
    },
    altizure:{
        uri:'https://api.altizure.cn/graphql'
    }
});
cable.query(`query {
  utility {
    sizeToGigaPixel(width: 4000, height: 3000, numImg: 100)
  }
}`,null,'altizure').then(res=>console.log(res)).catch((err)=>{
    console.log(err)
  });