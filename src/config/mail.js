import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const config = {
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	secure: process.env.MAIL_SECURE,
	service: process.env.MAIL_SERVICE,
	auth: {
		user: process.env.MAIL_USERNAME,
		password: process.env.PASSWORD,
	}
}

nodemailer.createTransport(config)

export default nodemailer
