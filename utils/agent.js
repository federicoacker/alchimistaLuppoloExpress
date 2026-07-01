import { ChatAnthropic } from "@langchain/anthropic";
import { createAgent, HumanMessage } from "langchain";
import connection from "../db/db.js";
import {selectAllProducts} from "../db/queries/selectAllProducts.js";

const model = new ChatAnthropic({
    model: "claude-haiku-4-5",
    apiKey: process.env.CLAUDE_API_KEY
})

const BASE_SYSTEM_PROMPT = `Sei l'assistente personale dei clienti sul nostro sito e-commerce di birra "L'alchimista del luppolo".
Il tuo nome è Luppolino, rispondi sempre presentandoti e dando il benvenuto al cliente.
Rispondi in modo amichevole, chiaro e utile.
Se il cliente chiede qualsiasi cosa al di fuori delle birre che hai nel tuo contesto, scusati e comunicagli che puoi solo discutere del nostro catalogo prodotti.`;

async function getProductContext() {
    const { result, error } = await selectAllProducts({}, false, false, false);
    switch (error) {
        case 500:
            return { result: null, error: "Errore nel fetch dei dati dal database" };
            break;
        case 404:
            return { result: null, error: "Non ci sono dati nel database" };
            break;
        default: break;
    }

    return result.map((product, index) => `${index + 1}. ${product.name} (€${product.price.toFixed(2).replace(".", ",")}) - slug: ${product.slug} - description: ${product.short_description} - colore: ${product.colour} - abbinamento: ${product.pairs_with}`)
        .join("\n");
}

async function callClaude(userMessage) {
    const productContext = await getProductContext();
    const finalSystemPrompt = `${BASE_SYSTEM_PROMPT} contesto prodotti attuale dal database: ${productContext}`;
    const luppolino = createAgent({
        model,
        apiKey: process.env.CLAUDE_API_KEY,
        tools: [],
        systemPrompt: finalSystemPrompt
    });

    const claudeAnswer = await luppolino.invoke({
        messages: [new HumanMessage(userMessage)]
    });

    const agentMessages = claudeAnswer.messages || [];
    const lastMessage = agentMessages[agentMessages.length - 1];

    let answerText = "";

    if(typeof lastMessage?.content === "string") {
        answerText = lastMessage.content;
    }
    else{
        answerText = "Non sono riuscito a generare una riposta valida.";
    }

    return answerText;
}

async function callLuppolino(requestPrompt){
    const prompt = requestPrompt;
    const answer = await callClaude(prompt);
    return answer;
}

export default callLuppolino;