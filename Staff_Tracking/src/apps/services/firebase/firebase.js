import * as firebase from 'firebase'
import { firebaseConfig } from '../../configs/firebaseConfig';
 
let instance = null
 
class FirebaseService {
    constructor() {
        if (!instance) {
            this.app = firebase.initializeApp(firebaseConfig);
            instance = this;
        }
        return instance
    }
}
 
const firebaseService = new FirebaseService().app

const firebaseServiceCountMessage = firebaseService.database().ref('chat-room-firebase');

export {
    firebaseServiceCountMessage,
    firebaseService
};