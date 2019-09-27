import { Category } from "./enums";
// import { IBook, IStringGenerator, Logger, ILibrarian } from "./interfaces";
import * as Interfaces from "./interfaces";
import { UniversityLibrarian, ReferenceItem } from "./classes";
import dictionary from "./encyclopedia"; // default export class

function GetAllBooks(): Array<Interfaces.IBook> {

    let books: Array<Interfaces.IBook> = [
        { id: 1, title: "ulisse", author: "pippo", available: true, category: Category.Biografia },
        { id: 2, title: "Armi", author: "pluto", available: false, category: Category.Storia  },
        { id: 3, title: "Farfalle", author: "paperino", available: true, category: Category.Bambini  },
        { id: 4,title: "Delfino", author: "willy", available: true, category: Category.Commedia  },
    ];

    return books;
}

function LogFirstAvailable(books:  Array<Interfaces.IBook>): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = "";

    for(let currentBook of books) {
        if(currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log("Total Books: ", numberOfBooks);
    console.log("First Available: ", firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter: Category = Category.Poesia ): Array<string> { // default parameter
    console.log("Getting books in category: ", categoryFilter);

    const allBooks: Array<Interfaces.IBook> = GetAllBooks();
    const filteredTitles: string[] = [];
    for(let currentBook of allBooks) {
        if(currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
    for(let title of titles) {
        console.log(title);
    }
}

function GetBookId(id: number): Interfaces.IBook {
    const allBooks: Array<Interfaces.IBook> = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}


const allBooks: Array<Interfaces.IBook> = GetAllBooks();
LogFirstAvailable(allBooks);


const bambiniBook: string[] = GetBookTitlesByCategory(Category.Bambini);
LogBookTitles(bambiniBook);

bambiniBook.forEach((val, idx, arr)=> console.log(++idx + " - " + val)); // arrow function



// ********************************************************************* */

function CreateCustomerID(name: string, id:number): string {
    return name + id;
}

let myID: string = CreateCustomerID("Giuseppe", 10);
console.log(myID);

let x: number;
x = 5;
let idGenerator: Interfaces.IStringGenerator; // function type
idGenerator = CreateCustomerID;

myID = idGenerator("Giuseppe", 15);
console.log(myID);


// ********************************************************************* */

function CreateCustomer(name: string, age?: number, city?: string): void { // optional parameters
    console.log("Creating customer "+ name);
    if(age) {
        console.log("Age: " + age);
    }

    if(city) {
        console.log("City: " + city);
    }
}

CreateCustomer("Michelle");
CreateCustomer("Leight", 6);
CreateCustomer("Marie", 12, "Atlanta");

GetBookTitlesByCategory(); // default parameter


// ********************************************************************* */

function CheckoutBooks(customer: string, ...BookIDs: number[]): string[] { // rest parameter
    console.log("Checking out books for " + customer);
    let bookCheckedOut: string[] = [];
    for(let id of BookIDs) {
        let book: Interfaces.IBook = GetBookId(id);
        if(book && book.available) {
            bookCheckedOut.push(book.title);
        }
    }

    return bookCheckedOut;
}

let myBooks: string[] = CheckoutBooks("ulisse", 1);
myBooks.forEach(title => console.log(title));

// ********************************************************************* */
interface IDuck {
    walk: () => void;
    swim: () => void;
    quack: () => void;
}


let probablyADuck: any = {
    walk: () => console.log("walking like a duck"),
    swim: () => console.log("swimming like a duck"),
    quack: () => console.log("quacking like a duck")
};

// tslint:disable-next-line:no-empty
function FlyOverTheWater(bird: IDuck): void { }

FlyOverTheWater(probablyADuck); // works - duck typing



// ********************************************************************* */
function PrintBook(book: Interfaces.IBook): void {
    console.log(book.title +  " by "+ book.author);
}

let myBook: any = {
    id: 5,
    title: "Giustizia",
    author: "Jane Austen",
    available: true,
    category: Category.Commedia,
    year: "1813",
    copies: 3
};

PrintBook(myBook); // duck typing

let myBookTyped: Interfaces.IBook = {
    id: 5,
    title: "Giustizia",
    author: "Jane Austen",
    available: true,
    category: Category.Commedia,
    pages: 350,
    markDamaged: (reason: string) => console.log("Damaged: " + reason)
};

PrintBook(myBookTyped);
myBookTyped.markDamaged("torn pages");

let logDamage: Interfaces.Logger; // function types
logDamage = (damage: string) => console.log("damage reported: " +damage);
logDamage("coffee stains");


// ********************************************************************* */

let favouriteLibrarian: Interfaces.ILibrarian = new UniversityLibrarian();
favouriteLibrarian.name = "Sharon";
favouriteLibrarian.assistCustomer("Lynda");


// ********************************************************************* */

// let ref: ReferenceItem = new ReferenceItem("Fact and Figures", 2016); // class
// ref.printItem();
// ref.publisher = "Random Data Publishing";
// console.log(ref.publisher);

let refBook: ReferenceItem = new dictionary("WorldPedia", 1900, 10); // abstract - default class import
refBook.printItem();
refBook.printCitation();

let NewsPaper: any = class extends ReferenceItem { // class expression
    printCitation(): void {
        console.log(`Newspaper: ${this.title}`);
    }
};

let myPaper: any = new NewsPaper("The Gazette", 2016);
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

import {calculateLateFee as CalcFree, maxBooksAllowed} from "./utilityFunction";
 let fee: number = CalcFree(10);
 let max: number = maxBooksAllowed(12);
 console.log(`Fee: ${fee}`);
