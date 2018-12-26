# typescript-koa-framework

koa v2.0 框架和 TypeScript 写的服务器端架构

结构如下：

```
.
├── README.md
├── package.json
├── src
│   ├── config
│   │   └── index.ts
│   ├── controller
│   │   └── index.ts
│   ├── index.ts
│   ├── models
│   │   ├── User.ts
│   │   ├── db.ts
│   │   └── index.ts
│   └── routes
│       └── index.ts
├── tsconfig.json
```

```
$ yarn

```

```
$ tsc -w

```
修改数据库连接

```
$ yarn dev

```

启动在 30001 端口


GET `localhost:30001/`
