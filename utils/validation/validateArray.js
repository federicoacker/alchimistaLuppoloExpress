export function validateArray(array = [], validationCallback){
    let results = Array.isArray(array);
    if(!results){
        return {array:[], results: null};
    }
    for(const element of array){
        results = validationCallback(element);
        if(results){
            return {array:[], results};
        }
    }
    return {array, results};
}