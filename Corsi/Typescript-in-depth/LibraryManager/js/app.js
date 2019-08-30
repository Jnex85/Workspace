var Category;
(function (Category) {
    Category[Category["Biografia"] = 0] = "Biografia";
    Category[Category["Poesia"] = 1] = "Poesia";
    Category[Category["Commedia"] = 2] = "Commedia";
    Category[Category["Storia"] = 3] = "Storia";
    Category[Category["Bambini"] = 4] = "Bambini";
})(Category || (Category = {}));
function GetAllBooks() {
    var books = [
        { title: "ulisse", author: "pippo", available: true, category: Category.Biografia },
        { title: "Armi", author: "pluto", available: false, category: Category.Storia },
        { title: "Farfalle", author: "paperino", available: true, category: Category.Bambini },
        { title: "Delfino", author: "willy", available: true, category: Category.Commedia },
    ];
    return books;
}
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = "";
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Total Books: ", numberOfBooks);
    console.log("First Available: ", firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    console.log("Getting books in category: ", categoryFilter);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function getBookId(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
var allBooks = GetAllBooks();
LogFirstAvailable(allBooks);
var bambiniBook = GetBookTitlesByCategory(Category.Bambini);
LogBookTitles(bambiniBook);
bambiniBook.forEach(function (val, idx, arr) { return console.log(++idx + " - " + val); });
//# sourceMappingURL=app.js.map