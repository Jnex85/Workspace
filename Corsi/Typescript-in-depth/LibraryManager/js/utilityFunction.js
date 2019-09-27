"use strict";
// namespace Utility {
Object.defineProperty(exports, "__esModule", { value: true });
// export namespace Fees {
function calculateLateFee(daysLate) {
    return daysLate * .25;
}
exports.calculateLateFee = calculateLateFee;
// }
function maxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}
exports.maxBooksAllowed = maxBooksAllowed;
function privateFunc() {
    console.log("This is private...");
}
// }
//# sourceMappingURL=utilityFunction.js.map