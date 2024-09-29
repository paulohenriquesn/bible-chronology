import { Verse } from "./verse";

export class Chapter {
    public index: number = 0
    public verses: Verse[] = []

    constructor(index: number) {
        this.index = index + 1
    }
    
    addVerse(verse: string) {
        this.verses.push(new Verse(verse));
    }
}