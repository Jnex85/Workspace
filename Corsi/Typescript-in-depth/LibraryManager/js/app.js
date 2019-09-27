"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const classes_1 = require("./classes");
const encyclopedia_1 = require("./encyclopedia"); // default export class
function GetAllBooks() {
    let books = [
        {
            id: 1,
            title: "ulisse",
            author: "pippo",
            available: true,
            category: enums_1.Category.Biografia
        },
        {
            id: 2,
            title: "Armi",
            author: "pluto",
            available: false,
            category: enums_1.Category.Storia
        },
        {
            id: 3,
            title: "Farfalle",
            author: "paperino",
            available: true,
            category: enums_1.Category.Bambini
        },
        {
            id: 4,
            title: "Delfino",
            author: "willy",
            available: true,
            category: enums_1.Category.Commedia
        }
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
    // default parameter
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
    // optional parameters
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
    // rest parameter
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
let refBook = new encyclopedia_1.default("WorldPedia", 1900, 10); // abstract - default class import
refBook.printItem();
refBook.printCitation();
let NewsPaper = class extends classes_1.ReferenceItem {
    // class expression
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
// *****************************NAMESPACE**************************************** */
// /// <reference path="utilityFunction.ts" />
// import util = Utility.Fees;
//  let fee: number = util.calculateLateFee(10);
//  console.log(`Fee: ${fee}`);
// *****************************MODULE**************************************** */
const utilityFunction_1 = require("./utilityFunction");
let fee = utilityFunction_1.calculateLateFee(10);
let max = utilityFunction_1.maxBooksAllowed(12);
console.log(`Fee: ${fee}`);
// *****************************GENERICS**************************************** */
let inventory = [
    {
        id: 10,
        title: "C programming language",
        author: "a.c",
        available: true,
        category: enums_1.Category.Programmi
    },
    {
        id: 11,
        title: "Clean Code",
        author: "b.e",
        available: true,
        category: enums_1.Category.Programmi
    },
    {
        id: 12,
        title: "Solid principles",
        author: "f.d",
        available: true,
        category: enums_1.Category.Programmi
    },
    {
        id: 13,
        title: "Scripts",
        author: "n.t",
        available: true,
        category: enums_1.Category.Programmi
    }
];
// tslint:disable-next-line:comment-format
let purgedBooks = utilityFunction_1.Purge(inventory); // Purge(inventory);
purgedBooks.forEach(book => console.log(`purged book: ${book.title}`));
let purgedNums = utilityFunction_1.Purge([1, 2, 3, 4]);
console.log(purgedNums);
const shelf_1 = require("./shelf");
let bookShelf = new shelf_1.default();
inventory.forEach(book => bookShelf.add(book));
let firstBook = bookShelf.getFirst();
let magazines = [
    { title: "Programming language of the month", publisher: "Code Mags" },
    { title: "Whats hot this month", publisher: "College press" },
    { title: "Five Points", publisher: "GSU" }
];
let magazineShelf = new shelf_1.default();
magazines.forEach(magazine => magazineShelf.add(magazine));
let firstMagazine = magazineShelf.getFirst();
// let numberShelf:Shelf<number> = new Shelf<number>();
// [5,10,15].forEach(num => numberShelf.add(num));
console.log(`First Book: ${firstBook.title}`);
console.log(`First Magazine: ${firstMagazine.title}`);
magazineShelf.printTitles();
let softwareBook = bookShelf.find("C programming language");
console.log(`${softwareBook.title} (${softwareBook.author})`);
//# sourceMappingURL=app.js.map