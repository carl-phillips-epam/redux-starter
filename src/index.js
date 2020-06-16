import produce, { Produce } from "immer"

let book = { title: "Harry Potter" };

function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
    // book.isPublished = true;
}

// publish(book);

console.log(book);