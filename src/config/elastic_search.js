import { Client } from '@elastic/elasticsearch'
import dotenv from 'dotenv'

dotenv.config()

const config = {
	node: process.env.ELASTIC_SEARCH_HOST + process.env.ELASTIC_SEARCH_PORT
}

const client = new Client(config)

export default client
