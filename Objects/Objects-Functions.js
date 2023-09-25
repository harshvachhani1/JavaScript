const book = {
  title: "Bhagavad Gita",
  author: "Vyasa",
  pages: 700,
};

const otherBook = {
  title: "Jane Eyre",
  author: "Charlotte Brontë",
  pages: 400,
};

const getSummary = (book) => {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCount: `${book.title} is ${book.pages} pages long`,
  };
};

const booksummary = getSummary(book);
const otherBookSummary = getSummary(otherBook);

// console.log(getSummary(book).pageCount);
console.log(booksummary.pageCount);
console.log(otherBookSummary.pageCount);
