import{config}from 'dotenv'
config()
import{Server}from './server'

const server=new Server()

server.listen()