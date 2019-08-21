import firebase from 'react-native-firebase'
import { Platform } from 'react-native'

export const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    persistence: true
}

const iosConfig = {
    clientId: '',
    appId: '',
    apiKey: '',
    databaseURL: '',
    storageBucket: '',
    messagingSenderId: '',
    projectId: '',
    persistence: true
}

const androidConfig = {
    clientId: '',
    appId: '',
    apiKey: '',
    databaseURL: '',
    storageBucket: '',
    messagingSenderId: '',
    projectId: '',
    persistence: true
}

export const firebaseNotificationConfig = firebase.initializeApp(
    Platform.OS === 'ios' ? iosConfig : androidConfig,
    'TCA'
)

