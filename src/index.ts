/* eslint-disable @typescript-eslint/no-explicit-any */

import express from "express";
import { makeAsChronology_PORTUGUESE } from "./main/factories/chronology";
import { mountBibleFromJSON } from "./main/factories/mount-bible";
import { LOCALE } from "./domain/entities/enums/locale";
import cors from "cors";

const server = express();

const books = makeAsChronology_PORTUGUESE(
  mountBibleFromJSON(LOCALE.PORTUGUESE, "aa")
);

server.use(cors());
server.use(express.json());
server.use('/', express.static('public'))

server.get(
  "/api/:book/:page",
  (req: express.Request | any, res: express.Response | any) => {
    const { book: bookParam, page: pageParam} = req.params;

    const book = books[bookParam - 1];

    if (!book) return res.status(404).json({ message: "Book not found" });

    const page = book.pages[pageParam - 1];

    if(!page) return res.status(404).json({ message: "Page not found"});
    
    return res.json({
        chapter: page.chapter.index,
        verses: page.chapter.verses.map((verse) => verse.text),
        totalVerses: page.chapter.verses.length,
        totalPages: book.pages.length,
        bookName: book.name,
  
    });
  }
);

server.listen(3000, () => {
  console.log("🔥 listening on http://localhost:3000");
});
