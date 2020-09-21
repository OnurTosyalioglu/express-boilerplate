import redis from 'redis'
import dotenv from 'dotenv'

dotenv.config()

const config = {

}

redis.createClient(config)

export default redis
