import {validateString} from "./validateString.js";

function validatePrompt(requestPrompt){
    const prompt = requestPrompt?.prompt;
    if(!prompt || !validateString(prompt)){
        return {error:400, result:null};
    }
    return {error: null, result: prompt}
}

export default validatePrompt;