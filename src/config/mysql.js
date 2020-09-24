import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const config = {
	
}

mysql.connect(config)

export default mysql
