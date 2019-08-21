import {
    errorInCatchError,
    deviceInfo,
    firebaseCloudMessage,
    apiHeader,
    user
} from './constants';
import {
    FONT_SIZE
} from './font-size';
import {
    isEmail,
    isPhone,
    validatePhoneNumber,
    briefName,
    deleteSpecialCharacter,
    regexNamePerson,
    uniqueID,
    removeEmojis,
    isEmoji,
    reduceSpaceDuplicate,
    convertTypeData,
    timeAgo,
    getString,
    getDateIfValid,
    getArrayIfValid,
    getObjectIDIfValid,
    getArrayOfObjectID,
    isNumber,
    getNumberIfValid,
    getBooleanIfValid
} from './helpers'

import resources from './resources'

export {
    errorInCatchError,
    deviceInfo,
    firebaseCloudMessage,
    apiHeader,
    user,
    FONT_SIZE,
    isEmail,
    isPhone,
    validatePhoneNumber,
    briefName,
    deleteSpecialCharacter,
    regexNamePerson,
    uniqueID,
    removeEmojis,
    isEmoji,
    reduceSpaceDuplicate,
    convertTypeData,
    timeAgo,
    getString,
    getDateIfValid,
    getArrayIfValid,
    getObjectIDIfValid,
    getArrayOfObjectID,
    isNumber,
    getNumberIfValid,
    getBooleanIfValid,
    resources
}