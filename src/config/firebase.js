import firebase from 'firebase-admin'
import dotenv from 'dotenv'

dotenv.config()

const config = {

}

firebase.initializeApp(config)

export default firebase
