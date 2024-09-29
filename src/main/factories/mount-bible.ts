/* eslint-disable @typescript-eslint/no-require-imports */

import { existsSync } from "fs";
import { LOCALE } from "../../domain/entities/enums/locale";
import { Book } from "../../domain/entities/book";
import { Chapter } from "../../domain/entities/vo/chapter";
import { Page } from "../../domain/entities/vo/page";


export const mountBibleFromJSON = (locale: LOCALE, file: string): Book[] => {
    const bibleFile = `${__dirname}\\..\\..\\..\\..\\public/bibles/${locale}/${file}.json`
    console.log(`Reading bible from ${bibleFile} path`)
    
    if (!existsSync(bibleFile)) {
        throw new Error(`Could not find ${bibleFile} file`)
    }
    
    const books: Book[] = []
    
    const bible = require(bibleFile)
        for(const row of bible) {
            const book = new Book(row.name)
            
            for(const [chapterIndex, chapterRow] of row.chapters.entries()) {
                const chapter = new Chapter(chapterIndex)
                for (const verseRow of chapterRow) {
                        chapter.addVerse(verseRow)
                }
                book.addPage(new Page(chapter))
            }
            books.push(book)
    }
    return books
}