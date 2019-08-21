var user = {
    userData: null,
}

const apiHeader = {
    'Content-Type': 'application/json',
    'Authorization': '',
}

const firebaseCloudMessage = {
    token: null
}

const deviceInfo = {
    'deviceSize' : '',
    'isIphone': false
};

const errorInCatchError = {
    'NoneError': 'Thành công',
    'AuthenticationFailed': 'Đăng nhập thất bại',
    'AuthenticationExceeded': 'Đăng nhập quá nhiều lần',
    'AppIdInvalid': 'AppId không hợp lệ',
    'AccountInvalid': 'Tài khoản không hợp lệ',
    'RequestInvalid': 'Request không hợp lệ',
    'AccountNotFound': 'Tài khoản không tìm thấy',
    'PermissionDenied': 'Không có quyền truy cập',
    'RequestCanceled': 'Request bị hủy',
    'UnSupportVersion': 'Phiên bản không hỗ trợ',
    'InvalidSecretKey': 'SecretKey không hợp lệ'
}

export {
    errorInCatchError,
    deviceInfo,
    firebaseCloudMessage,
    apiHeader,
    user
}