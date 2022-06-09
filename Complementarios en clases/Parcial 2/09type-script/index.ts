/*npm init -y
//npm i express
//Instalar TypeScript de manera global
//npm install -g typescript
//tsc --init
//npm i typescript
//import express from 'express'
import express, {Request, Response} from 'express'
//const express = require ('express');

const app = express ();
const port = 3000;


app.get('/', (req: Request, res: Response) =>{
    res.json({
        msg: 'ok'
    })
})

app.listen (port, () =>{
    console.log(`prueba funcionando`)
})

//Para ejecutarlo es coloca tsc

//Instalar cors   npm i dotenv             npm i mongoose      npm i nodemon-d
//Instalar dotenv
//Instalar express-validator
//Instalar mongoose*/

import { config } from "dotenv"
config()

import {Server} from './server'
const server = new Server()
server.listen()
