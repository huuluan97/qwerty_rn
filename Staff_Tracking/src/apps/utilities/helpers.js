//Check email
export const isEmail = (text) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(text);
}



//Check phone VietNam
export const isPhone = (inputtxt) => {
    var phoneno = /^\(?(09|03|07|08|05)+([0-9]{1})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //Check vietnamese mobile phone
    return phoneno.test(inputtxt)
}

//Slug phone number
export const validatePhoneNumber = (value) => {
    if (!value) {
        return '';
    }
    const numberValue = value.replace(/[^\d]/g, '');
    if (numberValue.length <= 3) {
        return numberValue;
    }
    if (numberValue.length <= 7) {
        return `${numberValue.slice(0, 3)}-${numberValue.slice(3)}`;
    }
    return `${numberValue.slice(0, 3)}-${numberValue.slice(3, 6)}-${numberValue.slice(6, 10)}`;
}


export const briefName = (name) => {
    if (name) {
        const nameTemp = name.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'');
        const nameFull = nameTemp[0]+nameTemp[nameTemp.length-1];
        return reduceSpaceDuplicate(deleteSpecialCharacter(nameFull));
    }
    return "";
}

export const deleteSpecialCharacter = (str) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}


export const regexNamePerson = (value) => {
    const regex = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
    return regex.test(deleteSpecialCharacter(value));
}


//uid
export const uniqueID = () => {
    function chr4(){
        return Math.random().toString(16).slice(-4);
    }
    return chr4() + chr4() +
        '-' + chr4() +
        '-' + chr4() +
        '-' + chr4() +
        '-' + chr4() + chr4() + chr4() +
        '-' + chr4()
        ;
}
  
export const removeEmojis = (string) => {
    var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|[\ud83c[\ude50\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    return string.replace(regex, '');
}

export const isEmoji = (str) => {
    var ranges = [
        '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
        '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
        '\ud83d[\ude80-\udeff]' // U+1F680 to U+1F6FF
    ];
    if (str.match(ranges.join('|'))) {
        return true;
    } else {
        return false;
    }
}

export const reduceSpaceDuplicate = (value) => {
    return value.replace(/\s+/g, ' ');
}

export const convertTypeData = (data, type) => {
    switch (type) {
        case 'Boolean':
            return Boolean(data);
        case 'Integer':
            return parseInt(data, 10);
        case 'Number':
            return parseFloat(data);
        case 'String':
            return String(data);
        case 'Date':
            return this.parseDate(String(data));
        default:
            if (type === Object) {
                // generic object, return directly
                return data;
            } else if (typeof type === 'function') {
                // for model type like: User
                return type.constructFromObject(data);
            } else if (Array.isArray(type)) {
                // for array type like: ['String']
                var itemType = type[0];
                return data.map(function(item) {
                return exports.convertToType(item, itemType);
                });
            } else if (typeof type === 'object') {
                // for plain object type like: {'String': 'Integer'}
                var keyType, valueType;
                for (var k in type) {
                if (type.hasOwnProperty(k)) {
                    keyType = k;
                    valueType = type[k];
                    break;
                }
                }
                var result = {};
                for (var k in data) {
                if (data.hasOwnProperty(k)) {
                    var key = exports.convertToType(k, keyType);
                    var value = exports.convertToType(data[k], valueType);
                    result[key] = value;
                }
                }
                return result;
            } else {
                // for unknown type, return the data directly
                return data;
            }
    }
}

export const timeAgo = (time) => {
  
    var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
        diff = (((new Date()).getTime() - date.getTime()) / 1000),
        day_diff = Math.floor(diff / 86400)

    if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
        return

    return day_diff == 0 && (
        diff < 60 && "just now" ||
        diff < 120 && "1 minute ago" ||
        diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
        diff < 7200 && "1 hour ago" ||
        diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
        day_diff == 1 && "Yesterday" ||
        day_diff < 7 && day_diff + " days ago" ||
        day_diff < 31 && Math.ceil(day_diff / 7) + " weeks ago"
}


export const getString = value => (value || '').toString();

export const getDateIfValid = value => {
	const date = Date.parse(value);
	return isNaN(date) ? null : new Date(date);
};

export const getArrayIfValid = value => {
	return Array.isArray(value) ? value : null;
};


const getObjectIDIfValid = value => {
	return ObjectID.isValid(value) ? new ObjectID(value) : null;
};


export const getArrayOfObjectID = value => {
	if (Array.isArray(value) && value.length > 0) {
		return value.map(id => getObjectIDIfValid(id)).filter(id => !!id);
	} else {
		return [];
	}
};

export const isNumber = value => !isNaN(parseFloat(value)) && isFinite(value);

export const getNumberIfValid = value => (isNumber(value) ? parseFloat(value) : null);

export const getNumberIfPositive = value => {
	const n = getNumberIfValid(value);
	return n && n >= 0 ? n : null;
};

export const getBooleanIfValid = (value, defaultValue = null) => {
	if (value === 'true' || value === 'false') {
		return value === 'true';
	} else {
		return typeof value === 'boolean' ? value : defaultValue;
	}
};