export const required = (value) => {
    if(value){
        return undefined;
    }
        return 'required field'
}

export const maxLengthCreator = (maxLength) => (value) => {
        if(value.length>maxLength){
            return ('max length is '+maxLength)
        }
        return undefined;
}


export const minLengthCreator = (minLength) =>  (value) => {
        if(value.length<minLength){
            return ('min length is '+minLength)
        }
        return undefined;
}
