import aws from 'aws-sdk'
import dotenv from 'dotenv'

dotenv.config()

const config = {
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
}

aws.config.update(config)

export default aws
