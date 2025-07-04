class APIError extends Error {

    constructor(statusCode,message="SomeThing went wrong",errors=[],stack=""){
        super(message)
        this.statusCode=statusCode,
        this.data=null,
        this.message=message,
        this.Error=errors

        if(stack){
            this.stack=stack
        } else {
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {APIError}