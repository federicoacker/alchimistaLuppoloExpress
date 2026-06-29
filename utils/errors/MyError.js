export default class MyError extends Error{
    constructor(errorObject){
        super(errorObject.message);
        this.code = errorObject.code;
    }
    getCode() {
        return this.code;
    }
}