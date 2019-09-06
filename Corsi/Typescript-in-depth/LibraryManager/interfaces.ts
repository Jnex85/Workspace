import { Category } from "./enums";

interface IBook {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: IDamageLogger;
}

interface IStringGenerator {
    (chars: string, nums: number): string; // function types
}

interface IDamageLogger {
    (reason: string): void;

}

interface IPerson {
    name: string;
    email: string;
}

interface IAuthor extends IPerson {
    numBooksPublished: number;
}

interface ILibrarian extends IPerson {
    department: string;
    assistCustomer: (custName: string) => void;
}


export { IBook, IStringGenerator, IDamageLogger, IAuthor, ILibrarian };