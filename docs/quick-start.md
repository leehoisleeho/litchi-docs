# 快速开始

## 下载代码

前端代码库: [vue-admin-litchi](https://github.com/leehoisleeho/vue-admin-litchi)  
后端代码库: [litchi-admin-server](https://github.com/leehoisleeho/nest-server-litchi)

## 后端

#### 环境要求

确保你的开发环境满足以下要求：

- **MySQL** v8.x
- **Node.js** v18.x
- **NestJS** v9.x

在项目根目录下创建一个 `.env` 文件，并添加如下配置：

::: warning 提示
根据自己数据库配置/JWT/端口号进行调整
:::

```.env
# 启动端口
PORT=8090

# 数据库配置
DB_HOST="127.0.0.1"
DB_PORT=3306
DB_DATABASE="test"
DB_USERNAME="root"
DB_PASSWORD="yourpassword"

# JWT 配置
JWT_SECRET=yourjwtsecret  #用于加密签名的密钥非常重要，确保它是随机的且不被泄露
JWT_EXPIRATION_TIME=24h  #令牌过期时间
```

#### 启动后台服务

在后端项目目录下运行以下命令安装依赖并启动开发服务器：

:::danger 提示
根据 `.env` 文件数据库的配置，创建数据库。不然会报错。
:::

```sh
npm install
npm run start:dev
```

## 前端

:::danger 提示
前端页面第一次启动时，会进行系统的初始化，会建立一个管理员账号，密码是 admin，如果你觉得不安全，可以移步到 `系统初始化` ，进行密码的配置。
:::

```sh
npm install
npm run dev
```

然后在浏览器中访问： http://localhost:5173
::: tip 提示
系统在初始化的时候创建一个超级管理员账号

账号为: admin

密码: admin
:::
