import redis from 'redis'
import dotenv from 'dotenv'

dotenv.config()

const config = {
	port: process.env.REDIS_PORT,
	host: process.env.REDIS_HOST,
}

const options = {

}

const client = redis.createClient(config.port, config.host, options)

export default client
