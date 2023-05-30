"use strict";
//union type
let mixedArray = [];
let mixedArray2 = [];
//typescript object
let car;
// typescript num
var directions;
(function (directions) {
    directions[directions["north"] = 0] = "north";
    directions[directions["south"] = 1] = "south";
    directions["east"] = "east";
    directions["west"] = "west";
})(directions || (directions = {}));
let currentDirection = 0;
console.log(currentDirection);
//casting
let x = 'hello';
console.log(x.length);
//interface
/*interface shape {
    name: string,
    edge: number,
    vertices: number
}

interface square extends shape{
    area: number
}

let square: shape = {
    name: "square",
    edge: 4,
    vertices:4
};



console.log(square)*/
//classes
class shape {
    /*private name:string;
    private edge:number;
    private vertices:number

    constructor(name: string, edge: number, vertices: number){
        this.name = name;
        this.edge = edge;
        this.vertices = vertices;
    }*/
    constructor(name, edge, vertices) {
        this.name = name;
        this.edge = edge;
        this.vertices = vertices;
    }
    getShapeName() {
        console.log(this.name, this.edge, this.vertices);
    }
}
let SQUARE = new shape("Square", 4, 4);
SQUARE.getShapeName();
let tup = [80, "jui", 89];
tup = ["juhi", 28];
let tuple;
tuple = ["juhi", 90];
tuple.push(80);
console.log(tuple);
// const ele = document.querySelector("a")!;
// console.log(ele.href);
let greet;
// const fetchPostData = async (path: string): Promise<IPost[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// };
// const fetchUsersData = async (path: string): Promise<IUser[]> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// };
// const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
//     const response = await fetch(`http://example.com${path}`);
//     return response.json();
// }
// (async () => {
//     // const posts = await fetchPostData('/posts');
//     const posts = await fetchData<IPost[]>('/posts');
//     posts[0].
// })();
class sellable {
    constructor() {
        this.cart = [];
    }
    addProduct(product) {
        console.log(product);
    }
}
//generics
function print(Fname, age) {
    return [Fname, age];
}
console.log(print(3, "hiii"));
function addNumber(one, two) {
    console.log("add");
    if (typeof one === "number" && typeof two === "number") {
        return one + two;
    }
    return 0;
}
console.log(addNumber(1, 25));
function greeting(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greeting("Maddison", new Date());
console.log("hii");
