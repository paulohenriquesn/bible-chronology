import { LOCALE } from "./domain/entities/enums/locale"
import { mountBibleFromJSON } from "./main/factories/mount-bible"

const books = mountBibleFromJSON(LOCALE.PORTUGUESE, "aa")

console.log(books.at(0)?.pages[0].chapter.verses[0])