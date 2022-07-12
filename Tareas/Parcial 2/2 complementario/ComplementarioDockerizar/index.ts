//npm init -y
//npm i express
//Instalar TypeScript de manera global
//npm install -g typescript
//tsc --init
//npm i typescript

// npm install mongoose
// npm install express-validator
// npm install cors
// npm install dotenv
// npm install -g nodemon


import {config} from 'dotenv'
config()
import {Server}from './server'

const server=new Server()

server.listen()