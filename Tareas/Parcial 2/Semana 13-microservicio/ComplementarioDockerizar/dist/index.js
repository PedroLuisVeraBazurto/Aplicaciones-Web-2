"use strict";
//npm init -y
//npm i express
//Instalar TypeScript de manera global
//npm install -g typescript
//tsc --init
//npm i typescript
Object.defineProperty(exports, "__esModule", { value: true });
// npm install mongoose
// npm install express-validator
// npm install cors
// npm install dotenv
// npm install -g nodemon
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const server_1 = require("./server");
const server = new server_1.Server();
server.listen();
