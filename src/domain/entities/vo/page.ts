import { Chapter } from "./chapter"

export class Page {
    public chapter: Chapter

    constructor(chapter: Chapter) {
        this.chapter = chapter
    }
}