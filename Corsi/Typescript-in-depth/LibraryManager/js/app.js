"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const classes_1 = require("./classes");
function GetAllBooks() {
    let books = [
        { id: 1, title: "ulisse", author: "pippo", available: true, category: enums_1.Category.Biografia },
        { id: 2, title: "Armi", author: "pluto", available: false, category: enums_1.Category.Storia },
        { id: 3, title: "Farfalle", author: "paperino", available: true, category: enums_1.Category.Bambini },
        { id: 4, title: "Delfino", author: "willy", available: true, category: enums_1.Category.Commedia },
    ];
    return books;
}
function LogFirstAvailable(books) {
    let numberOfBooks = books.length;
    let firstAvailable = "";
    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Total Books: ", numberOfBooks);
    console.log("First Available: ", firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter = enums_1.Category.Poesia) {
    console.log("Getting books in category: ", categoryFilter);
    const allBooks = GetAllBooks();
    const filteredTitles = [];
    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (let title of titles) {
        console.log(title);
    }
}
function GetBookId(id) {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}
const allBooks = GetAllBooks();
LogFirstAvailable(allBooks);
const bambiniBook = GetBookTitlesByCategory(enums_1.Category.Bambini);
LogBookTitles(bambiniBook);
bambiniBook.forEach((val, idx, arr) => console.log(++idx + " - " + val)); // arrow function
// ********************************************************************* */
function CreateCustomerID(name, id) {
    return name + id;
}
let myID = CreateCustomerID("Giuseppe", 10);
console.log(myID);
let x;
x = 5;
let idGenerator; // function type
idGenerator = CreateCustomerID;
myID = idGenerator("Giuseppe", 15);
console.log(myID);
// ********************************************************************* */
function CreateCustomer(name, age, city) {
    console.log("Creating customer " + name);
    if (age) {
        console.log("Age: " + age);
    }
    if (city) {
        console.log("City: " + city);
    }
}
CreateCustomer("Michelle");
CreateCustomer("Leight", 6);
CreateCustomer("Marie", 12, "Atlanta");
GetBookTitlesByCategory(); // default parameter
// ********************************************************************* */
function CheckoutBooks(customer, ...BookIDs) {
    console.log("Checking out books for " + customer);
    let bookCheckedOut = [];
    for (let id of BookIDs) {
        let book = GetBookId(id);
        if (book && book.available) {
            bookCheckedOut.push(book.title);
        }
    }
    return bookCheckedOut;
}
let myBooks = CheckoutBooks("ulisse", 1);
myBooks.forEach(title => console.log(title));
let probablyADuck = {
    walk: () => console.log("walking like a duck"),
    swim: () => console.log("swimming like a duck"),
    quack: () => console.log("quacking like a duck")
};
// tslint:disable-next-line:no-empty
function FlyOverTheWater(bird) { }
FlyOverTheWater(probablyADuck); // works - duck typing
// ********************************************************************* */
function PrintBook(book) {
    console.log(book.title + " by " + book.author);
}
let myBook = {
    id: 5,
    title: "Giustizia",
    author: "Jane Austen",
    available: true,
    category: enums_1.Category.Commedia,
    year: "1813",
    copies: 3
};
PrintBook(myBook); // duck typing
let myBookTyped = {
    id: 5,
    title: "Giustizia",
    author: "Jane Austen",
    available: true,
    category: enums_1.Category.Commedia,
    pages: 350,
    markDamaged: (reason) => console.log("Damaged: " + reason)
};
PrintBook(myBookTyped);
myBookTyped.markDamaged("torn pages");
let logDamage; // function types
logDamage = (damage) => console.log("damage reported: " + damage);
logDamage("coffee stains");
// ********************************************************************* */
let favouriteLibrarian = new classes_1.UniversityLibrarian();
favouriteLibrarian.name = "Sharon";
favouriteLibrarian.assistCustomer("Lynda");
// ********************************************************************* */
// let ref: ReferenceItem = new ReferenceItem("Fact and Figures", 2016); // class
// ref.printItem();
// ref.publisher = "Random Data Publishing";
// console.log(ref.publisher);
let refBook = new classes_1.Encyclopedia("WorldPedia", 1900, 10); // abstract
refBook.printItem();
refBook.printCitation();
let NewsPaper = class extends classes_1.ReferenceItem {
    printCitation() {
        console.log(`Newspaper: ${this.title}`);
    }
};
let myPaper = new NewsPaper("The Gazette", 2016);
myPaper.printCitation();
// class Novel extends class { title: string } {
//     mainCharacter: string;
// }
// let favouriteNovel = new Novel();
// favouriteNovel.
//# sourceMappingURL=app.js.map