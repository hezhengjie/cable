# h-cable

h-cable 是基于apollo-boost封装的GraphQL的辅助工具，帮助大家更方便的在客户端使用GraphQL.


## Getting Start
----
### Install
------
```javascript 
npm install h-cable --save 
or 
yarn add h-cable

```

### Usage

```javascript 

import Cable from 'h-cable';

const cable = new Cable();
//新增clinet
cable.addClient({
    github:{
        uri:'https://api.github.com/graphql'
    },
    altizure:{
        uri:'https://api.altizure.cn/graphql',
        option:{}
    }
});
// 查询语句
cable.query(`query {
  utility {
    sizeToGigaPixel(width: 4000, height: 3000, numImg: 100)
  }
}`,null,'altizure').then(res=>console.log(res)).catch((err)=>{
    console.log(err)
  });

```

## API

### new Cable(config)
> 初始化对象
```
const cable = new Cable({
    clients:{
        github:{
            uri:'https://api.github.com/graphql'
        },
        altizure:{
            uri:'https://api.altizure.cn/graphql',
            option:{}
        }
    }
});
```
#### 参数
```
new Cable({
  clients: {
      altizure:{
            uri:'https://api.altizure.cn/graphql',
            option:{}
        }
  } // graphql服务，option参见 https://github.com/apollographql/apollo-client/tree/master/packages/apollo-boost
  defaultClient:'altizure' // 默认graphql服务，不填默认为clients的第一个
}

```



### addClient(clients)
> 添加graphql服务

```
    cable.addClient({
        github:{
            uri:'https://api.github.com/graphql'
        },
        altizure:{
            uri:'https://api.altizure.cn/graphql',
            option:{}
        }
    });
```
#### 参数
```


clients:{
    github:{
            uri:'https://api.github.com/graphql', //服务地址
            option:{} // 配置，参见option参见 https://github.com/apollographql/apollo-client/tree/master/packages/apollo-boost
     },
}
```

### query(gql)
> 查询

```
    cable.query(`query {
        utility {
            sizeToGigaPixel(width: 4000, height: 3000, numImg: 100)
        }
        }`,null,'altizure').then(res=>console.log(res)).catch((err)=>{
            console.log(err)
    });
```
#### 参数
```
gql(String) :graphQL查询语句
```


### mutations(gql)
> 编辑

```
cable.mutations(`mutations {
        utility {
            sizeToGigaPixel(width: 4000, height: 3000, numImg: 100)
        }
        }`,null,'altizure').then(res=>console.log(res)).catch((err)=>{
            console.log(err)
    });
```
#### 参数
```
gql(String) :graphQL查询语句
```


## Change Log

#### v0.1.2(2019.10.1)  
1.mvp版本

#### v0.1.3(2019.10.7)  
1.补充readme

