import { Page } from "./vo/page"

export class Book {
    public name: string
    public pages: Page[] = []

    constructor(name: string) {
        this.name = name
    }

    addPage(page: Page) {
        this.pages.push(page)
    }
 }