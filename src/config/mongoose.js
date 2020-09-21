import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
}

const config = 'mongodb://' +
	(process.env.MONGODB_USERNAME ?
		(process.env.MONGODB_USERNAME + ':') : '' ) +
	(process.env.MONGODB_PASSWORD ? 
		(process.env.MONGODB_PASSWORD + '@') : '') +
	process.env.MONGODB_HOST +
	':' +
	process.env.MONGODB_PORT +
	'/' +
	process.env.MONGODB_DATABASE

mongoose.connect(config, options)
	.then((res) => {
		console.log('Mongo connection successful')
	})
	.catch((e) => {
		console.log('Mongo connection error : ', e)
	})

export default mongoose
