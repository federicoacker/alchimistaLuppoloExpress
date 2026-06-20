export async function validateArray(array = [], validationCallback){
    let error = Array.isArray(array);
    if(!error){
        return {array:[], error:"Le categorie ricevute non sono un array"};
    }
    for(const element of array){
        error = await validationCallback(element);
        if(error){
            return {array:[], error};
        }
    }
    return {array, error};
}