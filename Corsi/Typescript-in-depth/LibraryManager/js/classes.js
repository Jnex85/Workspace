"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UniversityLibrarian {
    assistCustomer(custName) {
        console.log(this.name + " is assisting " + custName);
    }
}
exports.UniversityLibrarian = UniversityLibrarian;
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log("Creating a new ReferenceItem");
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}.`); // template string
        console.log(`Department: ${ReferenceItem.department}`);
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
}
ReferenceItem.department = "Research";
exports.ReferenceItem = ReferenceItem;
//# sourceMappingURL=classes.js.map