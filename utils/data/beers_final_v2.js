const beers = [
  {
    "name": "Elisir Dorato",
    "slug": "elisir-dorato",
    "image": "elisir-dorato.webp",
    "subtype": "Blonde Ale",
    "categories": [
      {
        "name": "Belgian Ale",
        "slug": "belgian-ale"
      }
    ],
    "brewery": "L'Alchimista del Luppolo",
    "description": "Blonde Ale dal colore dorato brillante con schiuma compatta e persistente. Aromi floreali e mielati accompagnano una bevuta equilibrata e scorrevole, con amaro delicato e finale pulito.",
    "short_description": "Una birra luminosa e facile da bere, con note di miele, cereali e fiori di campo.",
    "origin": "Italia",
    "abv": 5.2,
    "serving_temp": "6-8°C",
    "price": 2.75,
    "ibu": 22,
    "pairs_with": "Taglieri di salumi, focacce, formaggi freschi, pizza margherita",
    "suggested_glass": "Pinta Americana",
    "ingredients": "Acqua, malto d'orzo, luppolo Cascade, lievito",
    "size": "Bottiglia 33",
    "colour": "chiara"
  },
  {
    "name": "Pietra Filosofale",
    "slug": "pietra-filosofale",
    "image": "pietra-filosofale.webp",
    "subtype": "Belgian Tripel",
    "categories": [
      {
        "name": "Belgian Ale",
        "slug": "belgian-ale"
      }
    ],
    "brewery": "L'Alchimista del Luppolo",
    "description": "Birra complessa e strutturata con sentori di frutta gialla matura, spezie e miele. Corpo pieno e finale caldo tipico delle Tripel belghe.",
    "short_description": "Complessa e intensa, con sentori speziati, frutta matura e finale caldo.",
    "origin": "Italia",
    "abv": 8.5,
    "serving_temp": "8-10°C",
    "price": 3.95,
    "ibu": 30,
    "pairs_with": "Arrosti, carni bianche, formaggi stagionati",
    "suggested_glass": "Calice Belga",
    "ingredients": "Acqua, malto d'orzo, zucchero candito, luppolo Saaz, lievito belga",
    "size": "Bottiglia 33",
    "colour": "chiara"
  },
  {
    "name": "Fumo di Drago",
    "slug": "fumo-di-drago",
    "image": "fumo-di-drago.webp",
    "subtype": "Smoked Porter",
    "categories": [
      {
        "name": "Porter",
        "slug": "porter"
      }
    ],
    "brewery": "L'Alchimista del Luppolo",
    "description": "Porter affumicata con note di legna, cacao amaro, caffè tostato e lieve sentore torbato. Corpo medio e finale persistente.",
    "short_description": "Scura e affascinante, con note affumicate, cacao e caffè.",
    "origin": "Italia",
    "abv": 6.8,
    "serving_temp": "10-12°C",
    "price": 3.45,
    "ibu": 35,
    "pairs_with": "BBQ, costine, hamburger gourmet, carne affumicata",
    "suggested_glass": "Nonic Pint",
    "ingredients": "Acqua, malto d'orzo affumicato, malti tostati, luppolo Fuggle, lievito",
    "size": "Bottiglia 33",
    "colour": "scura"
  },
  {
    "name": "Verde Smeraldo",
    "slug": "verde-smeraldo",
    "image": "verde-smeraldo.webp",
    "subtype": "New England IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "L'Alchimista del Luppolo",
    "description": "New England IPA velata e succosa con intensi aromi tropicali di mango, ananas e passion fruit. Corpo morbido e amaro moderato.",
    "short_description": "Esplosione tropicale di mango, passion fruit e agrumi.",
    "origin": "Italia",
    "abv": 6.5,
    "serving_temp": "7-9°C",
    "price": 3.25,
    "ibu": 45,
    "pairs_with": "Tacos, burger, cucina asiatica, pollo speziato",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, avena, luppolo Citra, Mosaic, lievito",
    "size": "Bottiglia 33",
    "colour": "chiara"
  },
  {
    "name": "Luna d'Ambra",
    "slug": "luna-dambra",
    "image": "luna-dambra.webp",
    "subtype": "Amber Ale",
    "categories": [
      {
        "name": "Belgian Ale",
        "slug": "belgian-ale"
      }
    ],
    "brewery": "L'Alchimista del Luppolo",
    "description": "Birra ambrata equilibrata con note di biscotto, caramello e leggera frutta secca. Finale morbido e armonioso.",
    "short_description": "Caramello, biscotto e leggere note di frutta secca.",
    "origin": "Italia",
    "abv": 5.8,
    "serving_temp": "8-10°C",
    "price": 3.0,
    "ibu": 28,
    "pairs_with": "Porchetta, carni arrosto, formaggi semi-stagionati",
    "suggested_glass": "Pinta Inglese",
    "ingredients": "Acqua, malto d'orzo caramellato, luppolo East Kent Goldings, lievito",
    "size": "Bottiglia 33",
    "colour": "ambrata"
  },
  {
    "name": "Notte dell'Alchimista",
    "slug": "notte-dellalchimista",
    "image": "notte-dellalchimista.webp",
    "subtype": "Imperial Stout",
    "categories": [
      {
        "name": "Stout",
        "slug": "stout"
      }
    ],
    "brewery": "L'Alchimista del Luppolo",
    "description": "Imperial Stout intensa e corposa con aromi di cacao fondente, caffè espresso, vaniglia e frutta sotto spirito.",
    "short_description": "Corposa e avvolgente, con cacao, vaniglia e caffè tostato.",
    "origin": "Italia",
    "abv": 10.0,
    "serving_temp": "12-14°C",
    "price": 4.25,
    "ibu": 60,
    "pairs_with": "Dessert al cioccolato, tiramisù, sigaro e meditazione",
    "suggested_glass": "Snifter",
    "ingredients": "Acqua, malti tostati, avena, luppolo Magnum, lievito",
    "size": "Bottiglia 33",
    "colour": "scura"
  },
  {
    "name": "45 Lune",
    "slug": "45-lune",
    "image": "45-lune.webp",
    "subtype": "Amber Ale allo zenzero",
    "categories": [
      {
        "name": "Belgian Ale",
        "slug": "belgian-ale"
      }
    ],
    "brewery": "Almond '22",
    "description": "Una Amber Ale originale e raffinata che unisce la morbidezza dei malti caramellati alla freschezza speziata dello zenzero fresco. Il colore ambrato brillante anticipa un profilo aromatico ricco di note di biscotto, miele e crosta di pane, impreziosite da delicati accenni agrumati e speziati. In bocca è equilibrata e scorrevole.",
    "short_description": "Amber Ale morbida e speziata con un elegante tocco di zenzero fresco.",
    "origin": "Italia",
    "abv": 6.0,
    "serving_temp": "8-10°C",
    "price": 3.25,
    "ibu": 20,
    "pairs_with": "Pollo arrosto, curry vegetali, crostacei",
    "suggested_glass": "Calice Teku",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito, zenzero fresco",
    "size": "Bottiglia 33",
    "colour": "ambrata"
  },
  {
    "name": "Pink IPA",
    "slug": "pink-ipa",
    "image": "pink-ipa.webp",
    "subtype": "IPA al pepe rosa",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "Almond '22",
    "description": "Pink IPA è una birra che riesce a combinare carattere e finezza in un perfetto equilibrio. La generosa luppolatura regala profumi intensi di pompelmo, frutta tropicale, uva bianca e agrumi maturi, mentre l'aggiunta di pepe rosa introduce una sottile nota speziata che arricchisce il bouquet senza sovrastarlo. Il sorso è pieno e aromatico, con un corpo medio che sostiene una vivace componente fruttata. L'amaro finale è deciso ma armonioso, lasciando il palato pulito e invitando immediatamente a un nuovo sorso.",
    "short_description": "IPA intensa e profumata con note di pompelmo e frutta tropicale.",
    "origin": "Italia",
    "abv": 6.3,
    "serving_temp": "6-8°C",
    "price": 3.5,
    "ibu": 52,
    "pairs_with": "Hamburger gourmet, cucina asiatica",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, luppoli Simcoe, Nelson Sauvin, Hallertau Saphyr, pepe rosa, lievito",
    "size": "Bottiglia 33",
    "colour": "ambrata"
  },
  {
    "name": "Braveheart",
    "slug": "braveheart",
    "image": "braveheart.webp",
    "subtype": "Imperial Lager",
    "categories": [
      {
        "name": "Lager",
        "slug": "lager"
      }
    ],
    "brewery": "Almond '22",
    "description": "Braveheart rappresenta l'incontro tra l'eleganza delle lager e l'intensità delle birre ad alta gradazione. Nonostante la struttura importante, mantiene una straordinaria bevibilità grazie a una fermentazione pulita che valorizza le note di cereale, miele e pane appena sfornato. Il profilo aromatico è arricchito da sfumature floreali e leggere note erbacee provenienti dai luppoli selezionati. In bocca si presenta morbida e avvolgente, con un corpo pieno ma mai pesante e un finale equilibrato che bilancia perfettamente la componente maltata con una delicata amarezza.",
    "short_description": "Strong Lager ricca e appagante, con note di cereale e miele.",
    "origin": "Italia",
    "abv": 7.5,
    "serving_temp": "6-8°C",
    "price": 3.75,
    "ibu": 55,
    "pairs_with": "Salumi stagionati, carne di maiale",
    "suggested_glass": "Pinta tedesca",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Bottiglia 33",
    "colour": "chiara"
  },
  {
    "name": "Torbata",
    "slug": "torbata",
    "image": "torbata.webp",
    "subtype": "English Barley Wine",
    "categories": [
      {
        "name": "Barley Wine",
        "slug": "barley-wine"
      }
    ],
    "brewery": "Almond '22",
    "description": "Torbata è una delle creazioni più affascinanti di Almond '22, una birra che sfugge alle classificazioni più comuni e invita a una degustazione lenta e attenta. Ispirata alla tradizione dei Barley Wine inglesi, si distingue per l'impiego di malto torbato, miele di castagno e scorza d'arancia, ingredienti che costruiscono un profilo aromatico complesso e stratificato. Al naso emergono sentori di caramello, frutta secca, miele, legno e una delicata affumicatura che ricorda il whisky torbato. In bocca è calda, avvolgente e ricca, con un corpo importante e una lunga persistenza aromatica che evolve sorso dopo sorso.",
    "short_description": "Barley Wine complesso e avvolgente, ideale da meditazione.",
    "origin": "Italia",
    "abv": 7.9,
    "serving_temp": "10-12°C",
    "price": 4.25,
    "ibu": 40,
    "pairs_with": "Formaggi stagionati, brasati, selvaggina",
    "suggested_glass": "Snifter",
    "ingredients": "Acqua, malto d'orzo, malto torbato, miele di castagno, scorza d'arancia, luppolo, lievito",
    "size": "Bottiglia 33",
    "colour": "rossa"
  },
  {
    "name": "Gone Mental",
    "slug": "gone-mental",
    "image": "gone-mental.webp",
    "subtype": "Double IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "Antikorpo Brewing",
    "description": "Gone Mental è una West Coast Double IPA che incarna tutta la filosofia della vecchia scuola americana: luppolo protagonista, amaro deciso e una bevuta sorprendentemente pulita. Al naso esplodono intense note di agrumi, scorza di pompelmo, resina di pino e frutta tropicale matura, accompagnate da sfumature erbacee che ne aumentano la complessità aromatica. In bocca il corpo è medio e ben strutturato, sostenuto da una base maltata essenziale che lascia spazio alla generosa luppolatura. Il finale è secco, persistente e caratterizzato da una piacevole amarezza che invita immediatamente a un nuovo sorso.",
    "short_description": "Un concentrato di luppolo e carattere: agrumi, resina e finale deciso per chi ama IPA intense.",
    "origin": "Italia",
    "abv": 7.5,
    "serving_temp": "6-8°C",
    "price": 3.75,
    "ibu": 75,
    "pairs_with": "Hamburger, BBQ, cucina messicana",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, avena, luppolo, lievito",
    "size": "Lattina 40",
    "colour": "chiara"
  },
  {
    "name": "Grommet GF",
    "slug": "grommet-gf",
    "image": "grommet-gf.webp",
    "subtype": "Keller Pils",
    "categories": [
      {
        "name": "Lager",
        "slug": "lager"
      },
      {
        "name": "Gluten Free",
        "slug": "gluten-free"
      }
    ],
    "brewery": "Antikorpo Brewing",
    "description": "Grommet GF è la dimostrazione che una birra senza glutine può mantenere tutto il carattere e la personalità di una vera craft beer. Ispirata alle tradizionali Keller Pils tedesche, si presenta naturalmente torbida e dal colore dorato intenso. Al naso emergono profumi floreali, note erbacee e sentori di pane fresco, mentre al palato conquista con la sua freschezza e la sua impeccabile pulizia gustativa.",
    "short_description": "Fresca, fragrante e incredibilmente beverina. Una pils artigianale che conquista dal primo sorso.",
    "origin": "Italia",
    "abv": 4.8,
    "serving_temp": "4-6°C",
    "price": 3.0,
    "ibu": 28,
    "pairs_with": "Pizza, fritti, salumi",
    "suggested_glass": "Pils",
    "ingredients": "Acqua, malto d'orzo deglutinato, luppolo, lievito",
    "size": "Lattina 40",
    "colour": "chiara"
  },
  {
    "name": "Impact Zone",
    "slug": "impact-zone",
    "image": "impact-zone.webp",
    "subtype": "Pacific Pale Ale",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "Antikorpo Brewing",
    "description": "Impact Zone porta nel bicchiere tutta l'energia dei luppoli dell'emisfero australe. Questa Pacific Pale Ale si distingue per un bouquet aromatico esplosivo dove mango, frutto della passione, lime e agrumi si intrecciano creando una bevuta fresca e coinvolgente. Il corpo è leggero ma non esile, capace di sostenere una componente aromatica intensa senza risultare eccessiva.",
    "short_description": "Esplosione di mango, agrumi e frutta tropicale in una pale ale moderna e super scorrevole.",
    "origin": "Italia",
    "abv": 5.0,
    "serving_temp": "5-7°C",
    "price": 3.25,
    "ibu": 32,
    "pairs_with": "Fish burger, tacos di pesce, poke",
    "suggested_glass": "Nonic Pint",
    "ingredients": "Acqua, malti Pils e Carapils, luppoli, lievito",
    "size": "Lattina 40",
    "colour": "chiara"
  },
  {
    "name": "Lowrider GF",
    "slug": "lowrider-gf",
    "image": "lowrider-gf.webp",
    "subtype": "India Pale Lager",
    "categories": [
      {
        "name": "Lager",
        "slug": "lager"
      },
       {
        "name": "Gluten Free",
        "slug": "gluten-free"
      }
    ],
    "brewery": "Antikorpo Brewing",
    "description": "Lowrider GF rappresenta l'incontro perfetto tra due mondi: l'intensità aromatica delle IPA e la pulizia gustativa delle lager. Grazie alla fermentazione a bassa temperatura, la componente maltata rimane discreta e lascia spazio ai profumi di agrumi, frutta tropicale e leggere note resinose donate dalla luppolatura. Il risultato è una birra fresca, moderna e incredibilmente scorrevole, con un finale secco che esalta ulteriormente la componente aromatica..",
    "short_description": "Tutto il profumo di un'IPA con la bevibilità di una lager.",
    "origin": "Italia",
    "abv": 5.8,
    "serving_temp": "5-7°C",
    "price": 3.5,
    "ibu": 69,
    "pairs_with": "Hot dog gourmet, pollo speziato",
    "suggested_glass": "Pils",
    "ingredients": "Acqua, malto d'orzo deglutinato, luppolo, lievito",
    "size": "Lattina 40",
    "colour": "chiara"
  },
  {
    "name": "See Ya In The Pit",
    "slug": "see-ya-in-the-pit",
    "image": "see-ya-in-the-pit.webp",
    "subtype": "Imperial Pastry Stout",
    "categories": [
      {
        "name": "Porter",
        "slug": "porter"
      }
    ],
    "brewery": "Antikorpo Brewing",
    "description": "See Ya In The Pit è una birra che sfida i confini tra birra e dessert. Questa Imperial Pastry Stout offre un'esperienza sensoriale intensa e avvolgente, caratterizzata da profonde note di cacao, cioccolato fondente, caffè tostato e scorza d'arancia candita. La struttura importante e la morbidezza del corpo contribuiscono a creare una bevuta ricca e vellutata che evolve continuamente nel bicchiere.",
    "short_description": "Un dessert liquido ricco e avvolgente, dove cacao e arancia si incontrano.",
    "origin": "Italia",
    "abv": 8.0,
    "serving_temp": "10-12°C",
    "price": 4.25,
    "ibu": 35,
    "pairs_with": "Brownie, cheesecake, cioccolato",
    "suggested_glass": "Snifter",
    "ingredients": "Acqua, malti tostati, luppolo, lievito, arancia candita",
    "size": "Lattina 40",
    "colour": "scura"
  },
  {
    "name": "Wahine",
    "slug": "wahine",
    "image": "wahine.webp",
    "subtype": "Blanche al pompelmo rosa",
    "categories": [
      {
        "name": "Blanche",
        "slug": "blanche"
      }
    ],
    "brewery": "Antikorpo Brewing",
    "description": "Wahine è una blanche luminosa e rinfrescante che prende ispirazione dalle classiche birre di frumento belghe, reinterpretandole con l'aggiunta di pompelmo rosa. Il risultato è una birra dal profilo aromatico estremamente fresco, dove agrumi, spezie leggere e delicati sentori floreali si fondono armoniosamente.In bocca si distingue per la sua leggerezza e per una piacevole nota agrumata che accompagna la bevuta fino al finale, lasciando una sensazione pulita e dissetante.",
    "short_description": "Profumi agrumati e grande freschezza rendono questa blanche perfetta per l'estate.",
    "origin": "Italia",
    "abv": 5.1,
    "serving_temp": "4-6°C",
    "price": 3.25,
    "ibu": 15,
    "pairs_with": "Sushi, insalate, pesce bianco",
    "suggested_glass": "Calice",
    "ingredients": "Acqua, frumento, malto d'orzo, pompelmo rosa, spezie, lievito",
    "size": "Lattina 40",
    "colour": "chiara"
  },
  {
    "name": "Home Spot",
    "slug": "home-spot",
    "image": "home-spot.webp",
    "subtype": "Bohemian Pils",
    "categories": [
      {
        "name": "Lager",
        "slug": "lager"
      }
    ],
    "brewery": "Antikorpo Brewing",
    "description": "Home Spot è un omaggio alla tradizione delle pils boeme, reinterpretata con l'approccio moderno e indipendente di Antikorpo Brewery. Il colore dorato brillante e la schiuma compatta anticipano aromi floreali, erbacei e leggermente speziati. Al palato offre una combinazione perfetta tra morbidezza maltata e freschezza luppolata, con un finale secco e pulito che ne esalta la bevibilità.",
    "short_description": "La classica pils che non stanca mai: fresca, croccante e perfetta per ogni occasione.",
    "origin": "Italia",
    "abv": 4.7,
    "serving_temp": "4-6°C",
    "price": 3.0,
    "ibu": 30,
    "pairs_with": "Pizza margherita, focacce, fritti",
    "suggested_glass": "Pils",
    "ingredients": "Acqua, malto d'orzo, luppolo Saaz, lievito",
    "size": "Lattina 40",
    "colour": "chiara"
  },
  {
    "name": "Dreams",
    "slug": "dreams",
    "image": "dreams.webp",
    "subtype": "Barrel Aged Barleywine",
    "categories": [
      {
        "name": "Barley Wine",
        "slug": "barley-wine"
      }
    ],
    "brewery": "Bevog",
    "description": "Dreams è una birra che va oltre il concetto tradizionale di Barleywine, trasformandosi in una vera esperienza sensoriale. Affinata in botte e caratterizzata da una gradazione importante, sviluppa una complessità straordinaria fatta di caramello scuro, melassa, vaniglia, legno, frutta sotto spirito e richiami ai grandi distillati da invecchiamento. Il corpo è pieno e vellutato, mentre il calore alcolico accompagna una lunghissima persistenza aromatica. Una birra da meditazione che invita a rallentare e dedicare tempo a ogni singolo sorso.",
    "short_description": "Una birra da meditazione estrema: potente, complessa e ricca di sfumature da distillato.",
    "origin": "Austria",
    "abv": 18.5,
    "serving_temp": "12-14°C",
    "price": 9.0,
    "ibu": null,
    "pairs_with": "Cioccolato fondente, meditazione",
    "suggested_glass": "Snifter",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Bottiglia 33",
    "colour": "scura"
  },
  {
    "name": "Ex. Black Rhino",
    "slug": "ex-black-rhino",
    "image": "ex-black-rhino.webp",
    "subtype": "Imperial Stout",
    "categories": [
      {
        "name": "Stout",
        "slug": "stout"
      }
    ],
    "brewery": "Bevog",
    "description": "Black Rhino è una Imperial Stout intensa e maestosa, costruita su una base di malti tostati che regalano aromi di caffè espresso, cacao amaro, liquirizia e frutta secca. La struttura è imponente ma perfettamente bilanciata, con una morbidezza che accompagna il palato fino a un finale lungo e appagante. Una birra che esprime forza e raffinatezza allo stesso tempo, pensata per chi ama le interpretazioni più ricche degli stili scuri.",
    "short_description": "Imperial Stout intensa e vellutata, con profonde note di cacao e caffè.",
    "origin": "Austria",
    "abv": 9.6,
    "serving_temp": "10-12°C",
    "price": 4.25,
    "ibu": 65,
    "pairs_with": "Brownie, fondente",
    "suggested_glass": "Snifter",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 40",
    "colour": "scura"
  },
  {
    "name": "Ex. Flying Frog",
    "slug": "ex-flying-frog",
    "image": "ex-flying-frog.webp",
    "subtype": "NEIPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "Bevog",
    "description": "Flying Frog rappresenta tutto ciò che si ama delle moderne New England IPA. Torbida e luminosa nel bicchiere, sprigiona profumi intensi di mango, ananas, pesca e agrumi maturi. Il corpo morbido e vellutato accompagna una componente fruttata esplosiva che domina la bevuta, mentre l'amaro rimane delicato e perfettamente integrato. Una IPA succosa e contemporanea che conquista sia gli appassionati sia chi cerca un approccio più morbido al mondo delle birre luppolate.",
    "short_description": "Mango, ananas e agrumi in una IPA morbida e moderna.",
    "origin": "Austria",
    "abv": 6.0,
    "serving_temp": "6-8°C",
    "price": 3.75,
    "ibu": 35,
    "pairs_with": "Burger gourmet",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, avena, luppolo, lievito",
    "size": "Lattina 40",
    "colour": "chiara"
  },
  {
    "name": "Ex. Pangolin",
    "slug": "ex-pangolin",
    "image": "ex-pangolin.webp",
    "subtype": "Sour Ale",
    "categories": [
      {
        "name": "Sour",
        "slug": "sour"
      }
    ],
    "brewery": "Bevog",
    "description": "Pangolin è una Sour Ale che mette al centro freschezza ed equilibrio. L'acidità vivace ma controllata dona energia alla bevuta senza risultare aggressiva, mentre il profilo aromatico sviluppa eleganti sfumature agrumate e fruttate. Il finale asciutto e pulito la rende estremamente dissetante e sorprendentemente facile da bere nonostante la sua complessità.",
    "short_description": "Acidità elegante e grande bevibilità.",
    "origin": "Austria",
    "abv": 6.7,
    "serving_temp": "5-7°C",
    "price": 3.75,
    "ibu": 8,
    "pairs_with": "Formaggi freschi, sushi",
    "suggested_glass": "Calice",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 40",
    "colour": "chiara"
  },
  {
    "name": "Ex. Orangutan",
    "slug": "ex-orangutan",
    "image": "ex-orangutan.webp",
    "subtype": "DDH Sour IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      },
      {
        "name": "Sour",
        "slug": "sour"
      }
    ],
    "brewery": "Bevog",
    "description": "Orangutan è una birra che unisce due mondi apparentemente lontani: l'acidità vibrante delle sour e l'intensità aromatica delle IPA moderne. La doppia luppolatura a freddo amplifica le note di mango, passion fruit e agrumi, mentre la componente acida dona profondità e freschezza. Il risultato è una birra sorprendente, complessa e incredibilmente dinamica.",
    "short_description": "L'acidità di una sour incontra la carica aromatica di una IPA moderna.",
    "origin": "Austria",
    "abv": 6.7,
    "serving_temp": "6-8°C",
    "price": 4.0,
    "ibu": 25,
    "pairs_with": "Cucina asiatica",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 40",
    "colour": "chiara"
  },
  {
    "name": "Ex. Rabbit",
    "slug": "ex-rabbit",
    "image": "ex-rabbit.webp",
    "subtype": "Hoppy Pils",
    "categories": [
      {
        "name": "Lager",
        "slug": "lager"
      }
    ],
    "brewery": "Bevog",
    "description": "Rabbit è la dimostrazione di quanto una pils possa essere moderna senza perdere la propria identità. La base lager pulita lascia spazio a una luppolatura aromatica che regala sentori floreali, erbacei e agrumati. Il corpo leggero e il finale secco ne esaltano la bevibilità, rendendola una compagna ideale per ogni momento della giornata.",
    "short_description": "Pils moderna con aromi erbacei e agrumati.",
    "origin": "Austria",
    "abv": 4.1,
    "serving_temp": "4-6°C",
    "price": 3.0,
    "ibu": 35,
    "pairs_with": "Pizza e aperitivo",
    "suggested_glass": "Pils",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 40",
    "colour": "chiara"
  },
  {
    "name": "Ex. Snow Leopard",
    "slug": "ex-snow-leopard",
    "image": "ex-snow-leopard.webp",
    "subtype": "Imperial Stout",
    "categories": [
      {
        "name": "Stout",
        "slug": "stout"
      }
    ],
    "brewery": "Bevog",
    "description": "Snow Leopard è una Imperial Stout opulenta e avvolgente che combina la profondità dei malti tostati con la morbidezza del cocco. Al naso emergono note di cacao, caffè, vaniglia e cocco tostato, mentre il corpo pieno e setoso accompagna una bevuta intensa ma incredibilmente equilibrata. Una birra pensata per chi cerca ricchezza aromatica e grande complessità.",
    "short_description": "Imperial Stout opulenta con cocco tostato, cacao e caffè.",
    "origin": "Austria",
    "abv": 9.5,
    "serving_temp": "10-12°C",
    "price": 4.75,
    "ibu": 55,
    "pairs_with": "Cheesecake al cioccolato",
    "suggested_glass": "Snifter",
    "ingredients": "Acqua, malto d'orzo, cocco, luppolo, lievito",
    "size": "Lattina 40",
    "colour": "scura"
  },
  {
    "name": "Helles Export",
    "slug": "helles-export",
    "image": "helles-export.webp",
    "subtype": "Helles",
    "categories": [
      {
        "name": "Lager",
        "slug": "lager"
      }
    ],
    "brewery": "Bevog",
    "description": "Helles Export rende omaggio alla tradizione bavarese con una lager elegante, pulita e perfettamente equilibrata. I profumi di pane fresco, miele delicato e cereale accompagnano un sorso morbido e scorrevole, sostenuto da una leggera componente erbacea dei luppoli. Una birra apparentemente semplice che rivela grande precisione tecnica e straordinaria bevibilità.",
    "short_description": "Morbide note maltate e grande scorrevolezza.",
    "origin": "Austria",
    "abv": 4.6,
    "serving_temp": "4-6°C",
    "price": 2.75,
    "ibu": 20,
    "pairs_with": "Brezel e wurstel",
    "suggested_glass": "Boccale bavarese",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 33",
    "colour": "chiara"
  },
  {
    "name": "Nitro Porter Coconut",
    "slug": "nitro-porter-coconut",
    "image": "nitro-porter-coconut.webp",
    "subtype": "Porter",
    "categories": [
      {
        "name": "Porter",
        "slug": "porter"
      }
    ],
    "brewery": "Bevog",
    "description": "Grazie alla tecnologia Nitro, questa Porter sviluppa una texture incredibilmente cremosa e una schiuma compatta e persistente. Le note di cocco si intrecciano con cacao, caffè e caramello creando una bevuta morbida e vellutata. Ogni sorso richiama le sensazioni di un dessert artigianale, mantenendo però l'equilibrio e la bevibilità tipici delle migliori porter.",
    "short_description": "Morbida, cremosa e irresistibile.",
    "origin": "Austria",
    "abv": 5.5,
    "serving_temp": "8-10°C",
    "price": 3.25,
    "ibu": null,
    "pairs_with": "Dessert al cacao",
    "suggested_glass": "Nonic Pint",
    "ingredients": "Acqua, malto d'orzo, cocco, luppolo, lievito",
    "size": "Lattina 33",
    "colour": "scura"
  },
  {
    "name": "Kramah",
    "slug": "kramah",
    "image": "kramah.webp",
    "subtype": "American IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "Bevog",
    "description": "Kramah è probabilmente una delle birre simbolo di Bevog. Una IPA esplosiva che mette in mostra tutto il potenziale dei luppoli americani e neozelandesi. Profumi intensi di mango, litchi, ananas, pompelmo e resina anticipano un sorso pieno e aromatico, sostenuto da una struttura equilibrata e da un finale lungo e amaricante. Una birra che non lascia indifferenti e che rappresenta perfettamente il lato più moderno della scuola IPA.",
    "short_description": "Una IPA esplosiva e moderna ricca di frutta tropicale.",
    "origin": "Austria",
    "abv": 6.5,
    "serving_temp": "8-10°C",
    "price": 3.25,
    "ibu": 70,
    "pairs_with": "Hamburger, BBQ",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 33",
    "colour": "chiara"
  },
  {
    "name": "Lolita",
    "slug": "lolita",
    "image": "lolita.webp",
    "subtype": "Berliner Weisse ",
    "categories": [
      {
        "name": "Sour",
        "slug": "sour"
      }
    ],
    "brewery": "Bevog",
    "description": "Lolita è una sour delicata e seducente che gioca sull'equilibrio tra acidità e frutta. Lampone e rabarbaro regalano profumi freschi e invitanti, mentre il corpo leggero e la gradazione contenuta la rendono estremamente facile da bere. Una birra vivace, elegante e perfetta per chi cerca qualcosa di diverso dalle classiche birre estive.",
    "short_description": "Fresca, fruttata e dissetante.",
    "origin": "Austria",
    "abv": 3.5,
    "serving_temp": "4-6°C",
    "price": 2.75,
    "ibu": null,
    "pairs_with": "Dessert ai frutti rossi",
    "suggested_glass": "Calice",
    "ingredients": "Acqua, malto d'orzo, frumento, lampone, rabarbaro, lievito",
    "size": "Lattina 33",
    "colour": "ambrata"
  },
  {
    "name": "Lola",
    "slug": "lola",
    "image": "lola.webp",
    "subtype": "Berliner Weisse ",
    "categories": [
      {
        "name": "Sour",
        "slug": "sour"
      }
    ],
    "brewery": "Bevog",
    "description": "Lola è una sour fresca e spensierata, caratterizzata da un'esplosione di piccoli frutti rossi. Lampone e ribes donano un profilo aromatico intenso ma armonioso, mentre la tipica acidità della Berliner Weisse mantiene la bevuta leggera e dissetante. Una birra perfetta per chi ama i sapori fruttati e le fermentazioni acide più accessibili.",
    "short_description": "Lampone e ribes regalano una bevuta fresca e irresistibile.",
    "origin": "Austria",
    "abv": 3.5,
    "serving_temp": "4-6°C",
    "price": 3.0,
    "ibu": 5,
    "pairs_with": "Dessert ai frutti rossi",
    "suggested_glass": "Calice",
    "ingredients": "Acqua, malto d'orzo, frumento, lampone, ribes, lievito",
    "size": "Lattina 33",
    "colour": "ambrata"
  },
  {
    "name": "Ond",
    "slug": "ond",
    "image": "ond.webp",
    "subtype": "Smoked Porter",
    "categories": [
      {
        "name": "Porter",
        "slug": "porter"
      }
    ],
    "brewery": "Bevog",
    "description": "Ond è una porter che affascina per il suo equilibrio tra tostature e affumicatura. Le note di cacao, caffè e caramello si fondono con una delicata componente fumé che richiama legno e torba senza mai risultare invadente. Il corpo morbido e il finale persistente rendono ogni sorso ricco di sfumature e particolarmente appagante.",
    "short_description": "Tostature profonde e affumicatura elegante.",
    "origin": "Austria",
    "abv": 6.3,
    "serving_temp": "10-12°C",
    "price": 3.25,
    "ibu": null,
    "pairs_with": "Costine BBQ",
    "suggested_glass": "Snifter",
    "ingredients": "Acqua, malto d'orzo, malti affumicati, luppolo, lievito",
    "size": "Lattina 33",
    "colour": "scura"
  },
  {
    "name": "Rudeen",
    "slug": "rudeen",
    "image": "rudeen.webp",
    "subtype": "Black IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "Bevog",
    "description": "Rudeen combina il meglio di due mondi: il carattere tostato delle birre scure e l'esuberanza aromatica delle IPA. Il risultato è una Black IPA complessa e coinvolgente, dove note di cacao e caffè si intrecciano con agrumi, resina e frutta tropicale. Il finale è secco e decisamente luppolato, lasciando una sensazione intensa e persistente.",
    "short_description": "Il meglio di una IPA e di una stout.",
    "origin": "Austria",
    "abv": 7.4,
    "serving_temp": "8-10°C",
    "price": 3.75,
    "ibu": 75,
    "pairs_with": "BBQ e hamburger affumicati",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 33",
    "colour": "scura"
  },
  {
    "name": "Andiamo",
    "slug": "andiamo",
    "image": "andiamo.webp",
    "subtype": "Sour Porter",
    "categories": [
      {
        "name": "Porter",
        "slug": "porter"
      },
        {
        "name": "Sour",
        "slug": "sour"
      }
    ],
    "brewery": "Bevog / Freigeist Bierkultur",
    "description": "Nata dalla collaborazione tra Bevog e Freigeist Bierkultur, Andiamo è una birra fuori dagli schemi che unisce la profondità di una porter all'acidità elegante di una sour. Le note tostate di cacao e caffè vengono alleggerite da una componente acida raffinata che rende la bevuta sorprendentemente fresca e dinamica. Una creazione originale e audace, pensata per chi ama esplorare nuovi territori brassicoli.",
    "short_description": "Tostature morbide e acidità elegante.",
    "origin": "Austria",
    "abv": 6.0,
    "serving_temp": "8-10°C",
    "price": 4.0,
    "ibu": 28,
    "pairs_with": "Formaggi erborinati",
    "suggested_glass": "Calice",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Bottiglia 33",
    "colour": "scura"
  },
  {
    "name": "Bohemian Pilsner",
    "slug": "bohemian-pilsner",
    "image": "bohemian-pilsner.webp",
    "subtype": "Bohemian Pils",
    "categories": [
      {
        "name": "Lager",
        "slug": "lager"
      }
    ],
    "brewery": "Eight Degrees Brewing",
    "description": "Bohemian Pilsner è l'interpretazione di Eight Degrees di uno degli stili più iconici della tradizione europea. Ispirata alle storiche lager della Repubblica Ceca, si presenta con un brillante colore dorato e una schiuma fine e persistente. Al naso emergono note di crosta di pane, cereale fresco e delicati sentori floreali ed erbacei provenienti dai luppoli nobili. In bocca è elegante e scorrevole, con una piacevole morbidezza maltata che si fonde armoniosamente con un finale secco e leggermente amaricante.",
    "short_description": "Pils elegante e scorrevole, perfetta per ogni occasione.",
    "origin": "Irlanda",
    "abv": 4.0,
    "serving_temp": "4-6°C",
    "price": 3.0,
    "ibu": 30,
    "pairs_with": "Pizza, salumi",
    "suggested_glass": "Pils",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina  40",
    "colour": "chiara"
  },
  {
    "name": "Original Gravity Juicy IPA",
    "slug": "original-gravity-juicy-ipa",
    "image": "original-gravity-juicy-ipa.webp",
    "subtype": "Juicy IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "Eight Degrees Brewing",
    "description": "Original Gravity è una Juicy IPA moderna che mette al centro la componente aromatica del luppolo. Fin dal primo approccio al bicchiere sprigiona intensi profumi di mango, ananas, pesca e agrumi maturi, creando un bouquet ricco e coinvolgente. Il corpo morbido e vellutato accompagna una bevuta succosa e avvolgente, mentre l'amaro rimane contenuto per lasciare spazio alla componente fruttata.",
    "short_description": "Succosa e profumata, ideale per gli amanti delle IPA moderne.",
    "origin": "Irlanda",
    "abv": 6.0,
    "serving_temp": "6-8°C",
    "price": 3.75,
    "ibu": 40,
    "pairs_with": "Hamburger, tacos",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 40",
    "colour": "chiara"
  },
  {
    "name": "Citra",
    "slug": "citra",
    "image": "citra.webp",
    "subtype": "Single Hop IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "Eight Degrees Brewing",
    "description": "Citra celebra uno dei luppoli più iconici e amati al mondo. Realizzata utilizzando il celebre luppolo Citra come protagonista assoluto, offre un'esplosione aromatica di pompelmo, lime, mango, frutto della passione e leggere sfumature resinose. La base maltata rimane volutamente discreta per valorizzare ogni sfumatura del luppolo, mentre il finale regala una piacevole amarezza persistente.",
    "short_description": "Agrumi e frutta tropicale in una IPA fresca e aromatica.",
    "origin": "Irlanda",
    "abv": 5.7,
    "serving_temp": "6-8°C",
    "price": 3.5,
    "ibu": 55,
    "pairs_with": "BBQ, pollo speziato",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, luppolo Citra, lievito",
    "size": "Lattina 40",
    "colour": "chiara"
  },
  {
    "name": "Howling Gale",
    "slug": "howling-gale",
    "image": "howling-gale.webp",
    "subtype": "Irish Pale Ale",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "Eight Degrees Brewing",
    "description": "Howling Gale è una delle birre simbolo di Eight Degrees e rappresenta perfettamente il carattere della moderna scena brassicola irlandese. Al naso si apre con note di agrumi, fiori di campo e leggere sfumature erbacee, mentre il corpo leggero e la gradazione contenuta la rendono estremamente bevibile. Il finale bilancia perfettamente la componente maltata con una delicata amarezza che accompagna il sorso senza risultare invasiva.",
    "short_description": "Una birra facile da bere ma ricca di carattere.",
    "origin": "Irlanda",
    "abv": 4.5,
    "serving_temp": "5-7°C",
    "price": 3.25,
    "ibu": 35,
    "pairs_with": "Fish & chips, panini",
    "suggested_glass": "Nonic Pint",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 40",
    "colour": "ambrata"
  },
  {
    "name": "Knockmealdown",
    "slug": "knockmealdown",
    "image": "knockmealdown.webp",
    "subtype": "Irish Stout",
    "categories": [
      {
        "name": "Stout",
        "slug": "stout"
      }
    ],
    "brewery": "Eight Degrees Brewing",
    "description": "Prende il nome dalle montagne che dominano la regione in cui sorge il birrificio e rappresenta una delle espressioni più autentiche della tradizione irlandese. Knockmealdown offre un profilo aromatico ricco di caffè tostato, cacao amaro e leggere note di pane nero. Il corpo medio e la morbidezza della schiuma accompagnano una bevuta equilibrata, dove le tostature rimangono protagoniste senza risultare aggressive.",
    "short_description": "Morbida e tostata, perfetta per gli amanti delle birre scure.",
    "origin": "Irlanda",
    "abv": 5.0,
    "serving_temp": "8-10°C",
    "price": 3.25,
    "ibu": 30,
    "pairs_with": "Dolci al cioccolato, ostriche",
    "suggested_glass": "Pinta",
    "ingredients": "Acqua, malto d'orzo tostato, luppolo, lievito",
    "size": "Lattina 40",
    "colour": "scura"
  },
  {
    "name": "Seisiún",
    "slug": "seisiun",
    "image": "seisiun.webp",
    "subtype": "Session IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "Eight Degrees Brewing",
    "description": "Il termine irlandese \"Seisiún\" richiama i tradizionali incontri musicali nei pub, e questa birra incarna perfettamente quello spirito conviviale. Pur mantenendo una gradazione contenuta, offre un profilo aromatico sorprendentemente intenso, caratterizzato da agrumi, frutta tropicale e leggere note erbacee. Il corpo snello e il finale secco la rendono incredibilmente scorrevole e dissetante.",
    "short_description": "Tanta freschezza e aroma con una gradazione contenuta.",
    "origin": "Irlanda",
    "abv": 4.5,
    "serving_temp": "5-7°C",
    "price": 3.25,
    "ibu": 40,
    "pairs_with": "Street food, pizza",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 40",
    "colour": "chiara"
  },
  {
    "name": "Sunburnt",
    "slug": "sunburnt",
    "image": "sunburnt.webp",
    "subtype": "Irish Red Ale",
    "categories": [
      {
        "name": "English Ale",
        "slug": "english-ale"
      }
    ],
    "brewery": "Eight Degrees Brewing",
    "description": "Sunburnt reinterpreta la tradizionale Red Ale irlandese con un approccio moderno e dinamico. Il colore rosso ramato anticipa aromi di caramello, biscotto e crosta di pane, accompagnati da leggere sfumature fruttate e floreali. Al palato il malto domina elegantemente la scena, regalando una dolcezza equilibrata che viene bilanciata da una delicata componente amaricante nel finale.",
    "short_description": "Equilibrata e avvolgente, con piacevoli sentori maltati.",
    "origin": "Irlanda",
    "abv": 5.0,
    "serving_temp": "6-8°C",
    "price": 3.25,
    "ibu": 25,
    "pairs_with": "Carni arrosto, cheddar",
    "suggested_glass": "Nonic Pint",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 40",
    "colour": "rossa"
  },
  {
    "name": "The Full Irish",
    "slug": "the-full-irish",
    "image": "the-full-irish.webp",
    "subtype": "Single Malt IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "Eight Degrees Brewing",
    "description": "The Full Irish è una birra che celebra il patrimonio agricolo e brassicolo dell'Irlanda. Realizzata utilizzando esclusivamente malto irlandese, combina la ricchezza della materia prima locale con una luppolatura moderna e aromatica. Al naso emergono note di agrumi, frutta tropicale e miele, mentre il corpo pieno e la base maltata donano profondità e carattere alla bevuta. Il finale è deciso ma equilibrato, con una piacevole persistenza aromatica.",
    "short_description": "Corpo pieno e aromi intensi per una IPA dal carattere autentico.",
    "origin": "Irlanda",
    "abv": 6.0,
    "serving_temp": "6-8°C",
    "price": 3.5,
    "ibu": 60,
    "pairs_with": "Hamburger gourmet, BBQ",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 40",
    "colour": "chiara"
  },
  {
    "name": "Gueuze",
    "slug": "gueuze",
    "image": "gueuze.webp",
    "subtype": "Gueuze (Blend di Lambic)",
    "categories": [
      {
        "name": "Lambic",
        "slug": "lambic"
      }
    ],
    "brewery": "Brasserie Cantillon",
    "description": "La Gueuze di Cantillon è considerata da molti appassionati la quintessenza dello stile e una delle massime espressioni della tradizione brassicola belga. Nasce dall'assemblaggio di Lambic di diverse annate, affinati in botte e successivamente rifermentati in bottiglia. Acidità complessa, note rustiche, agrumate e minerali con finale secco.",
    "short_description": "L'icona delle Gueuze belghe: elegante, complessa e vivace, con un perfetto equilibrio tra acidità, freschezza e profondità aromatica.",
    "origin": "Belgio",
    "abv": 5.0,
    "serving_temp": "10-12°C",
    "price": 6.0,
    "ibu": 10,
    "pairs_with": "Formaggi erborinati, ostriche, pesce affumicato",
    "suggested_glass": "Calice a tulipano",
    "ingredients": "Acqua, malto d'orzo, frumento non maltato, luppolo invecchiato",
    "size": "Bottiglia 33",
    "colour": "chiara"
  },
  {
    "name": "Rosé de Gambrinus",
    "slug": "rose-de-gambrinus",
    "image": "rose-de-gambrinus.webp",
    "subtype": "Lambic alla Framboise",
    "categories": [
      {
        "name": "Lambic",
        "slug": "lambic"
      }
    ],
    "brewery": "Brasserie Cantillon",
    "description": "Rosé de Gambrinus è probabilmente una delle creazioni più eleganti e affascinanti di Cantillon. Ottenuta attraverso la macerazione di grandi quantità di lamponi freschi all'interno del Lambic, riesce a trasformare la frutta in un elemento perfettamente integrato senza mai risultare dolce o artificiale. Acidità elegante, intensa componente fruttata e finale secco.",
    "short_description": "Un capolavoro di freschezza e frutta: lamponi intensi, acidità raffinata e una bevuta incredibilmente elegante.",
    "origin": "Belgio",
    "abv": 5.0,
    "serving_temp": "8-10°C",
    "price": 6.75,
    "ibu": 10,
    "pairs_with": "Cheesecake, foie gras, dessert ai frutti rossi",
    "suggested_glass": "Calice",
    "ingredients": "Acqua, malto d'orzo, frumento non maltato, lamponi freschi, luppolo invecchiato",
    "size": "Bottiglia 33",
    "colour": "rossa"
  },
  {
    "name": "Kriek",
    "slug": "kriek",
    "image": "kriek.webp",
    "subtype": "Lambic alle ciliegie",
    "categories": [
      {
        "name": "Lambic",
        "slug": "lambic"
      }
    ],
    "brewery": "Brasserie Cantillon",
    "description": "La Kriek di Cantillon rappresenta una delle interpretazioni più autentiche e tradizionali di questo storico stile belga. Viene prodotta utilizzando ciliegie intere della varietà Schaerbeek, lasciate macerare nel Lambic per diversi mesi affinché il frutto possa esprimere tutta la propria ricchezza aromatica e contribuire alla fermentazione naturale. Profilo complesso con acidità vibrante e marcata componente fruttata.",
    "short_description": "L'equilibrio perfetto tra ciliegia fresca, acidità naturale e complessità delle fermentazioni spontanee.",
    "origin": "Belgio",
    "abv": 5.0,
    "serving_temp": "8-10°C",
    "price": 6.75,
    "ibu": 10,
    "pairs_with": "Anatra, selvaggina, crostate alle ciliegie",
    "suggested_glass": "Calice",
    "ingredients": "Acqua, malto d'orzo, frumento non maltato, ciliegie Schaerbeek, luppolo invecchiato",
    "size": "Bottiglia 33",
    "colour": "rossa"
  },
  {
    "name": "Apollo",
    "slug": "apollo",
    "image": "apollo.webp",
    "subtype": "Double IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "Epica",
    "description": "Come il dio della luce da cui prende il nome, Apollo è una birra luminosa, intensa e capace di lasciare il segno. Questa Double IPA sprigiona fin dal primo istante un'esplosione di aromi tropicali e agrumati, con note di mango, ananas, pompelmo e scorza d'arancia che emergono con grande intensità. La struttura importante e la gradazione elevata sono perfettamente bilanciate da una luppolatura moderna che regala un finale secco e persistente.",
    "short_description": "Esplosione di frutta tropicale e agrumi in una Double IPA intensa ma equilibrata.",
    "origin": "Italia",
    "abv": 8.0,
    "serving_temp": "6-8°C",
    "price": 3.75,
    "ibu": 60,
    "pairs_with": "BBQ, hamburger gourmet",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Bottiglia 33",
    "colour": "chiara"
  },
  {
    "name": "Ares",
    "slug": "ares",
    "image": "ares.webp",
    "subtype": "Imperial Stout",
    "categories": [
      {
        "name": "Stout",
        "slug": "stout"
      }
    ],
    "brewery": "Epica",
    "description": "Ares incarna tutta la forza e l'intensità del dio della guerra. Nera come la notte e caratterizzata da una schiuma compatta e cremosa, sviluppa profumi profondi di caffè tostato, cacao amaro, liquirizia e malto torrefatto. Il corpo pieno e la consistenza vellutata accompagnano una bevuta ricca e appagante che evolve lentamente nel bicchiere.",
    "short_description": "Corposa e avvolgente, perfetta per chi ama le birre scure e intense.",
    "origin": "Italia",
    "abv": 7.0,
    "serving_temp": "10-12°C",
    "price": 3.75,
    "ibu": 45,
    "pairs_with": "Cioccolato fondente, formaggi erborinati",
    "suggested_glass": "Snifter",
    "ingredients": "Acqua, malto d'orzo tostato, luppolo, lievito",
    "size": "Bottiglia 33",
    "colour": "scura"
  },
  {
    "name": "Cerere",
    "slug": "cerere",
    "image": "cerere.webp",
    "subtype": "Weizen",
    "categories": [
      {
        "name": "Weiss",
        "slug": "weiss"
      }
    ],
    "brewery": "Epica",
    "description": "Ispirata alla dea della fertilità e dell'abbondanza, Cerere celebra la ricchezza dei cereali attraverso una classica interpretazione dello stile Weizen. Al naso emergono le tipiche note di banana matura, chiodo di garofano e pane fresco che caratterizzano le migliori birre di frumento tedesche. In bocca è morbida, fresca e incredibilmente scorrevole, con una carbonazione vivace che ne esalta la bevibilità.",
    "short_description": "Fresca e fragrante, ideale per accompagnare le giornate più calde.",
    "origin": "Italia",
    "abv": 5.2,
    "serving_temp": "5-7°C",
    "price": 3.0,
    "ibu": 15,
    "pairs_with": "Wurstel, insalate",
    "suggested_glass": "Weizen",
    "ingredients": "Acqua, malto d'orzo, frumento, lievito",
    "size": "Bottiglia 33",
    "colour": "chiara"
  },
  {
    "name": "Eolo",
    "slug": "eolo",
    "image": "eolo.webp",
    "subtype": "Pale Ale",
    "categories": [
      {
        "name": "Belgian Ale",
        "slug": "belgian-ale"
      }
    ],
    "brewery": "Epica",
    "description": "Come il dio dei venti, Eolo porta con sé una piacevole sensazione di freschezza. Questa Pale Ale si distingue per il perfetto equilibrio tra componente maltata e aromi luppolati. Profumi floreali, agrumati e leggermente erbacei introducono una bevuta semplice ma mai banale, caratterizzata da un corpo leggero e da un finale pulito e armonioso.",
    "short_description": "Birra facile da bere con eleganti note floreali e agrumate.",
    "origin": "Italia",
    "abv": 4.9,
    "serving_temp": "6-8°C",
    "price": 3.0,
    "ibu": 30,
    "pairs_with": "Panini, salumi",
    "suggested_glass": "Nonic Pint",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Bottiglia 33",
    "colour": "chiara"
  },
  {
    "name": "Kore",
    "slug": "kore",
    "image": "kore.webp",
    "subtype": "White IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "Epica",
    "description": "Kore nasce dall'incontro tra due mondi apparentemente lontani: la freschezza speziata delle Blanche belghe e l'intensità aromatica delle moderne IPA. Il risultato è una birra elegante e originale, caratterizzata da note di agrumi, coriandolo, pepe rosa e frutta tropicale. Il corpo leggero e il finale asciutto ne esaltano la bevibilità, mentre la luppolatura dona profondità e complessità aromatica.",
    "short_description": "La freschezza di una blanche incontra il carattere di una IPA.",
    "origin": "Italia",
    "abv": 4.7,
    "serving_temp": "5-7°C",
    "price": 3.25,
    "ibu": 40,
    "pairs_with": "Pesce, sushi",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, frumento, pepe rosa, luppolo, lievito",
    "size": "Bottiglia 33",
    "colour": "chiara"
  },
  {
    "name": "Medusa",
    "slug": "medusa",
    "image": "medusa.webp",
    "subtype": "Dubbel",
    "categories": [
      {
        "name": "Belgian Ale",
        "slug": "belgian-ale"
      }
    ],
    "brewery": "Epica",
    "description": "Medusa affascina e cattura proprio come il personaggio mitologico da cui prende il nome. Questa Dubbel belga offre un profilo aromatico ricco di caramello, uvetta, datteri e frutta secca, accompagnato da leggere sfumature speziate tipiche dei lieviti d'abbazia. Il corpo è pieno e avvolgente, mentre il finale caldo e persistente invita a una degustazione lenta e meditativa.",
    "short_description": "Calda e avvolgente, perfetta per gli amanti degli stili belgi.",
    "origin": "Italia",
    "abv": 8.0,
    "serving_temp": "8-10°C",
    "price": 3.5,
    "ibu": 20,
    "pairs_with": "Arrosti, formaggi stagionati",
    "suggested_glass": "Calice",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Bottiglia 33",
    "colour": "ambrata"
  },
  {
    "name": "Epichristmas",
    "slug": "epichristmas",
    "image": "epichristmas.webp",
    "subtype": "Belgian Strong Ale",
    "categories": [
      {
        "name": "Belgian Ale",
        "slug": "belgian-ale"
      }
    ],
    "brewery": "Epica",
    "description": "Epichristmas racchiude nel bicchiere tutta l'atmosfera delle festività. Ispirata alle tradizionali birre natalizie del Nord Europa, offre un ricco bouquet di spezie, miele, frutta candita e caramello. Il corpo caldo e morbido accompagna una bevuta intensa e avvolgente che richiama immediatamente il periodo invernale e i momenti trascorsi in compagnia.",
    "short_description": "Il calore delle feste in una birra intensa e profumata.",
    "origin": "Italia",
    "abv": 8.0,
    "serving_temp": "10-12°C",
    "price": 4.0,
    "ibu": 22,
    "pairs_with": "Dolci natalizi, panettone",
    "suggested_glass": "Calice",
    "ingredients": "Acqua, malto d'orzo, spezie, luppolo, lievito",
    "size": "Bottiglia 33",
    "colour": "ambrata"
  },
  {
    "name": "Pan",
    "slug": "pan",
    "image": "pan.webp",
    "subtype": "Brown Ale alle nocciole",
    "categories": [
      {
        "name": "English Ale",
        "slug": "english-ale"
      }
    ],
    "brewery": "Epica",
    "description": "Pan è una Brown Ale originale che valorizza le pregiate nocciole dei Nebrodi, creando un perfetto equilibrio tra tradizione brassicola e territorio siciliano. I profumi di nocciola tostata si intrecciano a sentori di biscotto, cacao e caramello, dando vita a una bevuta morbida, elegante e sorprendentemente equilibrata.",
    "short_description": "Morbida e maltata con irresistibili note di nocciola.",
    "origin": "Italia",
    "abv": 4.7,
    "serving_temp": "8-10°C",
    "price": 3.25,
    "ibu": 20,
    "pairs_with": "Dolci secchi, formaggi",
    "suggested_glass": "Nonic Pint",
    "ingredients": "Acqua, malto d'orzo, nocciole, luppolo, lievito",
    "size": "Bottiglia 33",
    "colour": "ambrata"
  },
  {
    "name": "Polifemo",
    "slug": "polifemo",
    "image": "polifemo.webp",
    "subtype": "American Pale Ale",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "Epica",
    "description": "Come il ciclope da cui prende il nome, Polifemo è una birra dal carattere forte e inconfondibile. La base maltata regala note di caramello, biscotto e crosta di pane, mentre la luppolatura americana aggiunge sfumature agrumate e resinose che rendono la bevuta più dinamica e moderna. Il risultato è una Amber Ale strutturata ma estremamente equilibrata.",
    "short_description": "Equilibrio perfetto tra malto, agrumi e resina.",
    "origin": "Italia",
    "abv": 6.0,
    "serving_temp": "6-8°C",
    "price": 3.25,
    "ibu": 40,
    "pairs_with": "Pizza, hamburger",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Bottiglia 33",
    "colour": "ambrata"
  },
  {
    "name": "Tifeo",
    "slug": "tifeo",
    "image": "tifeo.webp",
    "subtype": "Belgian Ale",
    "categories": [
      {
        "name": "Belgian Ale",
        "slug": "belgian-ale"
      }
    ],
    "brewery": "Epica",
    "description": "Tifeo prende ispirazione dal gigante della mitologia greca e si presenta come una Belgian Ale ricca di personalità. I lieviti belgi regalano profumi fruttati e speziati che si intrecciano a una morbida base maltata. Il corpo medio e la gradazione importante vengono bilanciati da una bevuta elegante e scorrevole, caratterizzata da una piacevole persistenza aromatica.",
    "short_description": "Ricca, fruttata e speziata con finale elegante.",
    "origin": "Italia",
    "abv": 6.7,
    "serving_temp": "8-10°C",
    "price": 3.5,
    "ibu": 17,
    "pairs_with": "Formaggi stagionati, carni bianche",
    "suggested_glass": "Calice",
    "ingredients": "Acqua, malto d'orzo, miele di ape nera siciliana, luppolo, lievito",
    "size": "Bottiglia 33",
    "colour": "ambrata"
  },
  {
    "name": "Gose to Hollywood",
    "slug": "gose-to-hollywood",
    "image": "gose-to-hollywood.webp",
    "subtype": "Gose",
    "categories": [
      {
        "name": "Sour",
        "slug": "sour"
      }
    ],
    "brewery": "To Øl",
    "description": "Gose to Hollywood è una reinterpretazione moderna di uno degli stili tedeschi più affascinanti e particolari. Leggera, fresca e incredibilmente dissetante, combina una delicata acidità lattica con una sottile nota salina che ne esalta la bevibilità. Al naso emergono profumi agrumati, sentori di frumento e leggere sfumature speziate che introducono una bevuta agile e sorprendentemente complessa.",
    "short_description": "Acida, fresca e incredibilmente dissetante, perfetta per l'estate.",
    "origin": "Danimarca",
    "abv": 3.8,
    "serving_temp": "4-6°C",
    "price": 2.75,
    "ibu": 8,
    "pairs_with": "Pesce, sushi, aperitivo",
    "suggested_glass": "Calice",
    "ingredients": "Acqua, malto d'orzo, frumento, sale, coriandolo, lievito",
    "size": "Bottiglia 33",
    "colour": "chiara"
  },
  {
    "name": "House of Pale",
    "slug": "house-of-pale",
    "image": "house-of-pale.webp",
    "subtype": "American Pale Ale",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "To Øl",
    "description": "House of Pale rappresenta l'essenza della moderna Pale Ale secondo To Øl. Il profilo aromatico è dominato da agrumi, pompelmo, frutta tropicale e leggere note floreali che si sviluppano con eleganza senza risultare invadenti. La base maltata sostiene perfettamente la luppolatura, creando un equilibrio che rende la bevuta appagante e incredibilmente scorrevole.",
    "short_description": "Una pale ale equilibrata e profumata che invita subito al sorso successivo.",
    "origin": "Danimarca",
    "abv": 5.5,
    "serving_temp": "5-7°C",
    "price": 3.25,
    "ibu": 35,
    "pairs_with": "Hamburger, tacos, pizza",
    "suggested_glass": "Nonic Pint",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Bottiglia 33",
    "colour": "chiara"
  },
  {
    "name": "Implosion",
    "slug": "implosion",
    "image": "implosion.webp",
    "subtype": "Session APA Analcolica",
    "categories": [
      {
        "name": "Analcolica",
        "slug": "analcolica"
      }
    ],
    "brewery": "To Øl",
    "description": "Implosion è una delle migliori dimostrazioni di come una birra a bassissimo contenuto alcolico possa offrire un'esperienza aromatica completa e soddisfacente. Grazie a una luppolatura generosa, sviluppa profumi di agrumi, frutta tropicale e leggere note resinose che ricordano una classica American Pale Ale.",
    "short_description": "Tutto il gusto di una craft beer con solo lo 0,3% di alcol.",
    "origin": "Danimarca",
    "abv": 0.3,
    "serving_temp": "4-6°C",
    "price": 2.25,
    "ibu": 25,
    "pairs_with": "Snack, panini, aperitivo",
    "suggested_glass": "Nonic Pint",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Bottiglia 33",
    "colour": "chiara"
  },
  {
    "name": "Santa Gose",
    "slug": "santa-gose",
    "image": "santa-gose.webp",
    "subtype": "Gose",
    "categories": [
      {
        "name": "Sour",
        "slug": "sour"
      }
    ],
    "brewery": "To Øl",
    "description": "Santa Gose prende la tradizione tedesca della Gose e la reinterpreta con lo stile creativo e contemporaneo di To Øl. L'acidità delicata si fonde con una piacevole sapidità e con leggere sfumature speziate che rendono la bevuta estremamente dinamica. Il corpo leggero e la carbonazione vivace contribuiscono a creare una sensazione di freschezza costante.",
    "short_description": "Una sour leggera e vivace che sorprende per equilibrio e freschezza.",
    "origin": "Danimarca",
    "abv": 4.0,
    "serving_temp": "4-6°C",
    "price": 2.75,
    "ibu": 10,
    "pairs_with": "Pesce crudo, crostacei",
    "suggested_glass": "Calice",
    "ingredients": "Acqua, malto d'orzo, frumento, sale, coriandolo, lievito",
    "size": "Bottiglia 33",
    "colour": "chiara"
  },
  {
    "name": "Snuble Juice",
    "slug": "snuble-juice",
    "image": "snuble-juice.webp",
    "subtype": "Session IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "To Øl",
    "description": "Snuble Juice concentra tutto ciò che si ama delle IPA moderne in una versione più leggera e facile da bere. Al naso esplodono profumi di mango, ananas, frutto della passione e agrumi maturi, mentre il corpo snello e la gradazione contenuta mantengono la bevuta fresca e dinamica.",
    "short_description": "Poca gradazione ma tantissimo aroma di luppolo.",
    "origin": "Danimarca",
    "abv": 4.5,
    "serving_temp": "5-7°C",
    "price": 3.0,
    "ibu": 40,
    "pairs_with": "Street food, burger",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 33",
    "colour": "chiara"
  },
  {
    "name": "Tropical Rumble",
    "slug": "tropical-rumble",
    "image": "tropical-rumble.webp",
    "subtype": "Session IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "To Øl",
    "description": "Tropical Rumble è un'esplosione di frutta esotica racchiusa in una birra estremamente equilibrata e scorrevole. Mango, ananas, passion fruit e agrumi dominano il profilo aromatico, creando una sensazione quasi da succo tropicale appena spremuto. Il corpo morbido sostiene la componente aromatica senza appesantire la bevuta, mentre il finale leggermente amaro dona profondità e pulizia.",
    "short_description": "Fresca, tropicale e facilissima da bere.",
    "origin": "Danimarca",
    "abv": 5.0,
    "serving_temp": "5-7°C",
    "price": 3.25,
    "ibu": 42,
    "pairs_with": "Pollo speziato, tacos",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 33",
    "colour": "chiara"
  },
  {
    "name": "Amen",
    "slug": "amen",
    "image": "amen.webp",
    "subtype": "American IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "WAR",
    "description": "Amen è una American IPA che celebra tutto ciò che gli amanti del luppolo cercano in una birra moderna: aromi esplosivi, freschezza e grande bevibilità. Al naso si apre con un intenso bouquet di agrumi, pompelmo, scorza d'arancia e leggere note resinose che richiamano le grandi IPA della tradizione americana. Il corpo è snello e dinamico, permettendo alla componente aromatica di esprimersi al meglio senza appesantire la bevuta.",
    "short_description": "Un classico per gli amanti del luppolo: intensa, aromatica e irresistibilmente beverina.",
    "origin": "Italia",
    "abv": 5.0,
    "serving_temp": "6-8°C",
    "price": 3.25,
    "ibu": 55,
    "pairs_with": "Hamburger, BBQ, cucina tex-mex",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 33",
    "colour": "chiara"
  },
  {
    "name": "Rage",
    "slug": "rage",
    "image": "rage.webp",
    "subtype": "West Coast IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "WAR",
    "description": "Rage è una West Coast IPA che non fa nulla per nascondere il proprio carattere. Fin dal primo approccio sprigiona intensi profumi di pino, pompelmo, agrumi maturi e leggere sfumature erbacee. Il corpo medio sostiene una luppolatura generosa che domina la bevuta senza risultare eccessiva.",
    "short_description": "Agrumi, resina e un finale amaro che conquista dal primo sorso.",
    "origin": "Italia",
    "abv": 7.0,
    "serving_temp": "6-8°C",
    "price": 3.75,
    "ibu": 70,
    "pairs_with": "Carni grigliate, pulled pork",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 33",
    "colour": "chiara"
  },
  {
    "name": "Pesci in Faccia",
    "slug": "pesci-in-faccia",
    "image": "pesci-in-faccia.webp",
    "subtype": "American IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "WAR",
    "description": "IPA dal profilo aromatico intenso e moderno. I generosi dry hopping esaltano note di frutta tropicale, agrumi maturi e resina. Corpo morbido, amaro deciso ma equilibrato e finale persistente.",
    "short_description": "IPA esplosiva e profumata con sentori tropicali, agrumati e resinosi, dal carattere intenso e contemporaneo.",
    "origin": "Italia",
    "abv": 7.0,
    "serving_temp": "5-8°C",
    "price": 3.25,
    "ibu": 55,
    "pairs_with": "amburger gourmet, tacos speziati, cucina messicana, pollo fritto, formaggi erborinati",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, avena, frumento, luppolo Citra, Mosaic, Simcoe, lievito",
    "size": "Lattina 33",
    "colour": "chiara"
  },
  {
    "name": "Franco",
    "slug": "franco",
    "image": "franco.webp",
    "subtype": "Keller Pils",
    "categories": [
      {
        "name": "Lager",
        "slug": "lager"
      }
    ],
    "brewery": "WAR",
    "description": "Franco è l'esempio perfetto di come una pils possa essere semplice solo in apparenza. Ispirata alla tradizione tedesca delle Keller Pils, si presenta con un colore dorato luminoso e una schiuma compatta. Al naso emergono note di cereale fresco, pane bianco e delicati sentori floreali ed erbacei.",
    "short_description": "Croccante, fresca e incredibilmente scorrevole.",
    "origin": "Italia",
    "abv": 4.8,
    "serving_temp": "4-6°C",
    "price": 3.0,
    "ibu": 28,
    "pairs_with": "Pizza, focacce, salumi",
    "suggested_glass": "Pils",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 33",
    "colour": "chiara"
  },
  {
    "name": "Siena",
    "slug": "siena",
    "image": "siena.webp",
    "subtype": "New England Grape Ale",
    "categories": [
      {
        "name": "Grape Ale",
        "slug": "grape-ale"
      }
    ],
    "brewery": "WAR",
    "description": "Siena rappresenta uno degli stili più originali e identitari della scena brassicola italiana. Questa New England Grape Ale unisce il mondo della birra artigianale a quello del vino attraverso l'utilizzo di mosto d'uva, creando una bevuta elegante e ricca di sfumature.",
    "short_description": "L'incontro perfetto tra vino e birra in una bevuta elegante e aromatica.",
    "origin": "Italia",
    "abv": 6.5,
    "serving_temp": "6-8°C",
    "price": 3.75,
    "ibu": 35,
    "pairs_with": "Formaggi freschi, aperitivo",
    "suggested_glass": "Calice Teku",
    "ingredients": "Acqua, malto d'orzo, mosto d'uva, luppolo, lievito",
    "size": "Lattina 33",
    "colour": "ambrata"
  },
  {
    "name": "Gioia",
    "slug": "gioia",
    "image": "gioia.webp",
    "subtype": "Blanche",
    "categories": [
      {
        "name": "Blanche",
        "slug": "blanche"
      }
    ],
    "brewery": "WAR",
    "description": "Gioia è una Blanche che porta nel bicchiere tutta la freschezza e la spensieratezza delle classiche birre belghe di frumento. Il profilo aromatico è dominato da scorza d'arancia, coriandolo e leggere note floreali che donano grande vivacità alla bevuta.",
    "short_description": "Fresca, leggera e perfetta per le giornate più calde.",
    "origin": "Italia",
    "abv": 5.0,
    "serving_temp": "4-6°C",
    "price": 3.0,
    "ibu": 15,
    "pairs_with": "Pesce, sushi, insalate",
    "suggested_glass": "Calice",
    "ingredients": "Acqua, malto d'orzo, frumento, coriandolo, scorza d'arancia, lievito",
    "size": "Lattina 33",
    "colour": "chiara"
  },
  {
    "name": "Miami 82",
    "slug": "miami-82",
    "image": "miami-82.webp",
    "subtype": "Lager",
    "categories": [
      {
        "name": "Lager",
        "slug": "lager"
      }
    ],
    "brewery": "WAR",
    "description": "Miami 82 è una lager che richiama atmosfere estive, tramonti sul mare e leggerezza. Dietro la sua apparente semplicità si nasconde una grande cura produttiva che valorizza la pulizia aromatica e la facilità di bevuta. Al naso emergono note di cereale fresco, miele delicato e leggere sfumature erbacee.",
    "short_description": "Una lager artigianale perfetta per ogni momento della giornata.",
    "origin": "Italia",
    "abv": 5.0,
    "serving_temp": "4-6°C",
    "price": 2.75,
    "ibu": 20,
    "pairs_with": "Pizza, panini, fritti",
    "suggested_glass": "Pils",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 33",
    "colour": "chiara"
  },
  {
    "name": "Osanna",
    "slug": "osanna",
    "image": "osanna.webp",
    "subtype": "Weissbier",
    "categories": [
      {
        "name": "Weiss",
        "slug": "weiss"
      }
    ],
    "brewery": "WAR",
    "description": "Birra di frumento ispirata alla tradizione bavarese, prodotta con una significativa percentuale di frumento maltato. Al naso emergono note di banana matura, chiodi di garofano, agrumi e lievito fresco. In bocca è vivace, fresca e scorrevole, con corpo medio-leggero e finale pulito e dissetante.",
    "short_description": "Weissbier fresca e fragrante con note di banana, chiodi di garofano e agrumi. Morbida, dissetante e perfetta per ogni occasione.",
    "origin": "Italia",
    "abv": 5.0,
    "serving_temp": "5-7°C",
    "price": 2.25,
    "ibu": 15,
    "pairs_with": "Pesce e frutti di mare, insalate estive, formaggi freschi, cucina leggera, aperitivi e fritture leggere",
    "suggested_glass": "Weizenbecher (bicchiere da Weissbier)",
    "ingredients": "Acqua, malto d'orzo, frumento maltato, luppolo, lievito.",
    "size": "Lattina 33",
    "colour": "chiara"
  },
  {
    "name": "Tutto Fatto",
    "slug": "tutto-fatto",
    "image": "tutto-fatto.webp",
    "subtype": "Double IPA",
    "categories": [
      {
        "name": "IPA",
        "slug": "ipa"
      }
    ],
    "brewery": "WAR",
    "description": "Tutto Fatto è una Double IPA che racchiude tutto ciò che un appassionato di luppolo può desiderare. Il bouquet aromatico è ricchissimo di mango, ananas, frutto della passione, agrumi e leggere note resinose che si sviluppano con intensità fin dal primo istante. Il corpo pieno e vellutato sostiene una luppolatura generosa che accompagna la bevuta fino a un finale lungo, persistente e appagante.",
    "short_description": "Una bomba di luppolo dal corpo pieno e dal finale persistente.",
    "origin": "Italia",
    "abv": 8.0,
    "serving_temp": "6-8°C",
    "price": 4.0,
    "ibu": 80,
    "pairs_with": "Costine BBQ, hamburger gourmet",
    "suggested_glass": "Teku",
    "ingredients": "Acqua, malto d'orzo, luppolo, lievito",
    "size": "Lattina 33",
    "colour": "chiara"
  }
]