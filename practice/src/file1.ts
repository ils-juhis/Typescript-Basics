
//union type
let mixedArray: (string|number) [] =[];
let mixedArray2: any [] = [];


//typescript object
let car: {name: string, model:string, year: number};

// typescript num
enum directions {
    north,
    south,
    east="east", 
    west="west",
}
let currentDirection: directions = 0; 
console.log(currentDirection)
 

//casting
let x: unknown = 'hello';
console.log((<string>x).length);

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
class shape{
    /*private name:string;
    private edge:number;
    private vertices:number

    constructor(name: string, edge: number, vertices: number){
        this.name = name;
        this.edge = edge;
        this.vertices = vertices;
    }*/

    constructor(private name: string, private edge: number, private vertices: number){
    }

    getShapeName(){
        console.log(this.name, this.edge, this.vertices);
    }
}

let SQUARE = new shape("Square", 4, 4); 
SQUARE.getShapeName();

let tup = [80, "jui", 89];
tup = ["juhi", 28]

let tuple: [string, number]
tuple=["juhi", 90];
tuple.push(80);
console.log(tuple)



// const ele = document.querySelector("a")!;
// console.log(ele.href);

let greet: Function;

// "noUnusedLocals": true,
// "noUnusedParameters": true, 
// "noImplicitReturns": true,
// greet = (b:number)=>{
//     let a=1, c;
//     let item:number;
//     if(a==11){
//         return true;
//     }
// };


//genreics
interface IPost {
    title: string;
    id: number;
    description: string;
}

interface IUser {
    id: number;
    name: string;
    age: number;
}

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

class sellable <T>{
    public cart: T[] = [];

    addProduct (product: T){
        console.log(product)
    }
}


interface user{
    name: String,
    address: string

}

interface user{
    pincode: number,
    mobileno: number
}


//generics
function print<T, S> (Fname: T, age:S): [T, S] {
    return [Fname, age];
}

console.log(print (3, "hiii"))

function addNumber <T> (one: T, two: T): number{
    console.log("add")
    if(typeof one === "number" && typeof two === "number"){
        return one + two;
    }
    return 0;
}


console.log(addNumber(1,25))


function greeting(person: string, date: Date): void {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
   
  greeting("Maddison", new Date());

