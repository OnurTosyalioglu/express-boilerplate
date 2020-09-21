import app from '../app'
import http from 'http'
import socketio from 'socket.io'
import dotenv from 'dotenv'

dotenv.config()

app.set('port', process.env.PORT || 3000)

const server = http.createServer(app)

server.listen(process.env.port || 3000)
