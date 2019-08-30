enum Category {Biografia, Poesia, Commedia, Storia, Bambini}

function GetAllBooks(): Array<any> {

    let books: Array<any> = [
        { title: "ulisse", author: "pippo", available: true, category: Category.Biografia },
        { title: "Armi", author: "pluto", available: false, category: Category.Storia  },
        { title: "Farfalle", author: "paperino", available: true, category: Category.Bambini  },
        { title: "Delfino", author: "willy", available: true, category: Category.Commedia  },
    ];

    return books;
}

function LogFirstAvailable(books:  Array<any>): void {
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

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
    console.log("Getting books in category: ", categoryFilter);

    const allBooks: Array<any> = GetAllBooks();
    const filteredTitles: string[] = [];
    for(let currentBook of allBooks) {
        if(currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
    for(let title of titles){
        console.log(title);
    }
}

function getBookId(id: number): any {
    const allBooks: Array<any> = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}


const allBooks: Array<any> = GetAllBooks();
LogFirstAvailable(allBooks);


const bambiniBook: string[] = GetBookTitlesByCategory(Category.Bambini);
LogBookTitles(bambiniBook);

bambiniBook.forEach((val, idx, arr)=> console.log(++idx + " - " + val));
