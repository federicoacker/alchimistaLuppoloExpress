import connection from "../../db/db.js";
import { createCategory } from "../../db/queries/createCategory.js";

const categories = [
    {
        "name": "Belgian Ale",
        "slug": "belgian-ale",
        "short_description": "Famiglia di birre ad alta fermentazione caratterizzate da esteri fruttati, fenoli speziati e profili aromatici complessi derivati dal lievito."
    },
    {
        "name": "English Ale",
        "slug": "english-ale",
        "short_description": "Birra ad alta fermentazione con equilibrio tra malto e luppolo, corpo medio e profilo aromatico dominato da note maltate e fruttate."
    },
    {
        "name": "Porter",
        "slug": "porter",
        "short_description": "Birra scura ad alta fermentazione con utilizzo di malti tostati che conferiscono aromi di cacao, caffè e pane tostato."
    },
    {
        "name": "IPA",
        "slug": "ipa",
        "short_description": "Stile ad alta fermentazione caratterizzato da una marcata luppolatura, elevata intensità aromatica e amaro generalmente sostenuto."
    },
    {
        "name": "Lambic",
        "slug": "lambic",
        "short_description": "Birra a fermentazione spontanea ottenuta tramite l'azione di lieviti e batteri selvaggi, con spiccata acidità e grande complessità."
    },
    {
        "name": "Stout",
        "slug": "stout",
        "short_description": "Birra scura ad alta fermentazione prodotta con malti e orzi tostati, dal profilo ricco e persistente con note torrefatte."
    },
    {
        "name": "Weiss",
        "slug": "weiss",
        "short_description": "Birra di frumento ad alta fermentazione, caratterizzata da elevata carbonazione e aromi di banana e spezie prodotti dal lievito."
    },
    {
        "name": "Analcolica",
        "slug": "analcolica",
        "short_description": "Birra con titolo alcolometrico non superiore all'1,2% vol."
    },
    {
        "name": "Lager",
        "slug": "lager",
        "short_description": "Birra a bassa fermentazione maturata a freddo, caratterizzata da profilo pulito, elevata bevibilità e buona attenuazione."
    },
    {
        "name": "Barley Wine",
        "slug": "barley-wine",
        "short_description": "Birra ad alta gradazione alcolica, ricca di malto, con struttura importante e note evolutive che aumentano con l'invecchiamento."
    },
    {
        "name": "Grape Ale",
        "slug": "grape-ale",
        "short_description": "Stile che integra mosto o uva alla produzione brassicola, combinando caratteristiche fermentative del vino e della birra."
    },
    {
        "name": "Blanche",
        "slug": "blanche",
        "short_description": "Birra di frumento ad alta fermentazione, generalmente speziata con coriandolo e scorza d'agrumi, dal profilo fresco e leggermente velato."
    },
    {
        "name": "Gluten Free",
        "slug": "gluten-free",
        "short_description": "Birra con certificazione Gluten Free"
    },
    {
        "name": "Sour",
        "slug": "sour",
        "short_description": "Birra caratterizzata da una spiccata acidità, ottenuta tramite fermentazioni con lieviti e batteri selezionati o tecniche di acidificazione controllata. Presenta aromi freschi, complessi e spesso fruttati."
    }
];
async function populateCategories(){
    for(let i = 0 ; i<categories.length; i++){
        const current = categories[i];
        const {error, result} = await createCategory(current);
        console.log(result);
    }
    connection.end();
}

populateCategories();


export default categories;