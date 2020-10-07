import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'

import { config } from './firebaseConfig'

const firebaseConfig = config

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export { firebase }
