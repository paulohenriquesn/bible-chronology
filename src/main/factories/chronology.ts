import { Book } from "../../domain/entities/book";

export const makeAsChronology_PORTUGUESE = (books: Book[]): Book[] => {
    const chronologicalOrder = [
        "Gênesis", "Jó", "Êxodo", "Levítico", "Números", "Deuteronômio",
        "Josué", "Juízes", "Rute", "1 Samuel", "2 Samuel", "1 Crônicas", 
        "1 Reis", "2 Reis", "2 Crônicas", "Amós", "Oséias", "Isaías", 
        "Miquéias", "Sofonias", "Naum", "Habacuque", "Jeremias", 
        "Lamentações de Jeremias", "Ezequiel", "Daniel", "Obadias", 
        "Esdras", "Neemias", "Ageu", "Zacarias", "Ester", "Malaquias",
        "Mateus", "Marcos", "Lucas", "João", "Atos", "Tiago", 
        "1 Tessalonicenses", "2 Tessalonicenses", "Gálatas", "1 Coríntios", 
        "2 Coríntios", "Romanos", "Filipenses", "Efésios", "Colossenses", 
        "1 Timóteo", "2 Timóteo", "Tito", "Filemom", "Hebreus", 
        "1 Pedro", "2 Pedro", "1 João", "2 João", "3 João", 
        "Judas", "Apocalipse"
    ];

    const orderMap = new Map(chronologicalOrder.map((name, index) => [name, index]));

    return books.sort((a, b) => {
        const indexA = orderMap.get(a.name) ?? Number.MAX_SAFE_INTEGER;
        const indexB = orderMap.get(b.name) ?? Number.MAX_SAFE_INTEGER;
        return indexA - indexB;
    });
};
