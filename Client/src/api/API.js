/*
this is the parent class of all api classes.
every structual change will be made here and be inherited to each api class (see the error handeling for example).
note that each api will also implement its uniqe data proccess according to its destination api.
by default, all api calls are now a "GET" call.
*/
class Api {

    constructor(callerInteface, url = ""){
        this.callerInteface = callerInteface    
        this.url = url
    }
    
    async callApi(attempts = 0){
        return await this.callerInteface
        .getApi(this.url)
        .catch((error) =>{
            this.errorHandeler(this.callApi, attempts, error)
        })
    }

    async errorHandeler(method, attempts, error){
        if(attempts++ < 3){
            console.warn(`error in : ${this.constructor.name} \n
                        Attampts left: ${3-attempts}\n
                        trying again...`);
            return await method(attempts)
        }else{
            console.log("Server error");
            console.warn(error);
        }
    }
    
    processData(rawData){
        this.proccesedData = rawData
        return this
    }
}