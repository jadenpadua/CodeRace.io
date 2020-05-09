export const content = {
    test: "Hello this is a string let us test this text",
    text1: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but we'll start with React.Component subclasses: class ShoppingList extends React.",
    text2: "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. ... Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse.",
    text3: "Java is a programming language and computing platform first released by Sun Microsystems in 1995. ... Java is fast, secure, and reliable. From laptops to datacenters, game consoles to scientific supercomputers, cell phones to the Internet, Java is everywhere! People also ask",
    text4: "C is a computer programming language. ... C is what is called a compiled language. This means that once you write your C program, you must run it through a C compiler to turn your program into an executable that the computer can run (execute).",
    text5: "Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency. The language is often referred to as GoLang because of its domain name"
}

export let randomProperty = function (obj) {
    let keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

export const inputStyleStart = {
    backgroundColor: '#000000',
    color: '#57fed5'
}
  
export let inputStyleWin = {
    backgroundColor: 'black',
    color: '#57fed5',
    disabled: true
}

export const countCorrectSymbols = (userInput,text) => {
    const parsedText = text.replace(' ','')
    return userInput.replace( ' ', '').split('').filter((s,i) => s === parsedText[i]).length;
 }
 
 export const textArea = {

 }
 
 