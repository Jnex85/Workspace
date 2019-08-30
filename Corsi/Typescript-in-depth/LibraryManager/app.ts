class HelloWord {
    constructor(public message: string) {}
}

var hello: HelloWord = new HelloWord("Hello World");
console.log(hello.message);