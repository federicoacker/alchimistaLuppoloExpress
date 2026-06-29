import validatePrompt from "../utils/validation/validatePrompt.js";

function validatePromptRequest(request, response, next) {
    const requestPrompt = request.body || {};
    const {error, result} = validatePrompt(requestPrompt);
    console.log(error);
    if(error){
        return response.status(error).json({
            error: "C'è stato un problema nella richiesta fatta al nostro agente",
            result: null
        });
    }
    request.requestPrompt = result;
    next();
}

export default validatePromptRequest;