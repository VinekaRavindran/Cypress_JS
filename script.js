//printing in javascript :
// console.log()

console. log("hello im javascript")

// 3 ways
// Extension : code runner 
// terminal : node [filename]
// browser : we have to create the HTML page




//syntax
// variable tpye variable_name =vaule
var a =10
console.log(a)

let b = 6700
console.log(b)


console.log("hello js")


let c = 2000
console.log("c")

// string
var name = "vineka"
console.log("name")

// number
const d =3000
console.log("d")

let xyz=500
console.log("xyz")

//Boolean

var yes = true
var no =false

console.log("yes")
console.log("no")

//undefined
var nothing
console.log(nothing)

//null

var emptyvalue = null
console.log(emptyvalue)

//Non-primitive datatype
   //Array[]
var arr =["vineka","pooja","swetha"]
console.log(arr)
 
   //Object{}
var obj = {
   //key   //values
    name : "harini",
    age :"20",
    dep :"IT"

}
console.log(obj)

//variable tpye
//var (first bro)    Yes redeclaration and Yes reassgin
//let (middle bro)   No redeclaration and Yes reassgin
//const(last bro)    No redeclaration and No reassgin

   //var

var a=10
var a=20
console.log (a)      //same var tpye and same var name is redeclare---it will show the output


var a =10
    a = 20
console.log(a)    // Reassign method --it will show the output


    //let
// let a=30
// let a=40
// console.log(a)   // no redeclere/----error will show


let s =30
    s=40
console.log(s)      //reassign method----it will show the output

     //const
// const f =50
// const f =60
// console.log(f)      // no redeclare----error will show

// const g =50
//       g=60
// console.log(g)         // no reassign method----error will show


//LOOP---method ---Conditioning loop and infinity loop
//type
// for loop
// while loop
// do while loop


//syntax--- for[initiatization;ConditionRule;iteration[increment and decremnt]]{
//}

// what is increment          
var h=10                                    
h++                                          
console.log(h)

//what is decrement
var j=20
j--
console.log(j)

//for loop
   //initial //condition// iteration(increment)
for(var i=0;   i<5;         i++){
console.log(i);
 }
//decrement

 for(var i=5; i>0; i--){
    console.log(i)
 }

 //string for loop [length start with 1, index start with 0]

 var str="javascript" 
    for( var i=0; i<str.length ; i++){
        console.log(str[i])
    }
    //task1
  //Reverse a string    
var str = "javascript"
    for  (var i = str.length - 1; i >= 0; i--){
        console.log(str[i])
    }

// While loop
let count =0
while (count <5){
console.log(count)
count++;
}
//task2
let cout =4
while(cout >=0){
    console.log(cout)
    cout--;
}

// Do while

let docount= 5

do{
    console.log(docount)
    docount++;

}while(docount<5)

//if else
  //syntax
// if(condition){
//     statment
// }else{
//     statment
// }

let age = 20
if (age>18){
    console.log("he is eligible to vote")
}else {
    console.log("he is not eligible to vote")
}

//logical operations
// && AND
// || OR
// !  NOT

//if else using && operation
let ag =2000
    //true   //false
if (ag>18 && ag <70){
    console.log("he is eligible to vote")
}else {
    console.log("he is not eligible to vote")
}
//if else using || operation
let ages =2000
if (ages>18 || ages <70){
    console.log("he is eligible to vote")
}else {
    console.log("he is not eligible to vote")
}


//else if
let mark = 55
if (mark>90 && mark<=100){
    console.log("Grade A")
}else if(mark>=80){
    console.log("Grade B") 
}else if (mark>=70){
    console.log("Grade c")
}else if(mark>=60){
    console.log("Grade D")
}else if(mark>=50){
    console.log("Grade E")
}else{
    console.log("Fail")
}
//Task 3
let weather= -1
if(weather>=50){
    console.log("Too Hot")
}else if(weather >=30 && weather<=40){
    console.log("Moderate Weather")
}else if(weather>=0 && weather<30){
    console.log("Weather is Cold")
}else {
    console.log("Too Cold")
}


//Function

function box(){
    console.log("hi im a box")
}box()

//function in Parameters and arguments
//Syntax
// function variable_name (Parameters){
//    statment 
// }variable_name(arguments)

function boo(a){
    console.log(a)
}boo(10)

//Arrow function
//syntax
//variable_name variable_type =(values) => {}

    let arrfn=() =>{console.log("hello im arrow function")}
    arrfn ()

//arrow function using paramenter and arguments
let arrp = (a) =>{console.log(a)}
arrp("im a javascript")

// GEC(gobal execution context) and call stacks
//memory phase  //Execution 
 var a =           100
 //execution
console.log(a)
//how GEC works details in notes(refer notes)

//function GCP---->(refer notes)

//Hoisting

console.log(e)    //-----Gobal scope=undefine
var e = 100
console.log (e)

//here var replace let and const means will get the error

// console.log(l)--------local scope=temporal deadzone
// let l = 100
// console.log (l)

// console.log(u)--------local scope=temporal deadzone
// const u = 100
// console.log (u)

// Assignment operator

let k= 700
i +=5;   // 700+5=705
console.log(k)

//Object Update

const objup= {
    name:"praveena",
    age1: 23,
    dep:"IT"
} 
objup.age1=34
console.log(objup)

//how to take particular value in a object
const objpar={
    name: "sanjay",
    age2: 60,
    blood: "o+"
}
console.log(objpar.blood)


//Nested array 
const stdobj=[
    {
    name:"aa",
    age: 22,
    dep: "qq"
    },
    {
    name:"bb",
    age:33,
    dep:"ww" 
   }

]
                //Index
console.log(stdobj[1].name) 

//Nested object
//how to separete key and values 
//Values
const nesobj={
   //Keys //Values
    name:"aishu",
    age: 19,
    dep:"BA"
}
const val = Object.values(nesobj)
console.log(val)

//Keys
const nesobj1={
    //key //values
    name:"queency",
    age: 53,
    dep:"UI"
}
const key = Object.keys(nesobj1)
console.log(key)


//Object Destructuring
const obj4={
    name4:"vineka",
    age7 :25,
    dep:"IT"
}
const {name4,age7,dep}=obj4
console.log(name4);
console.log(dep);


//Array Destructuring

const arrde=["sunday","monday","tuesday","wednesday"]
const [day4,day5,day6,day7]=arrde
console.log(day6);

//For Method
 // for each---->mainly for read the array
 // for in---->it is mainly recommended for object
 // for of--->iterate over the array,string

//for each
//syntax
//   variable_name.foreach((value,index,actualarray))
    const arr1=["chocolate","nuts","biscuits","cosmetics"]
    arr1.forEach((val1,idx2,accarr3)=>console.log(val1,idx2,accarr3))

//for in 
const objin={
         //values
    name:"shur",
    age:78,
    dep:"it"
}
for(let x in objin){
                // chnages here for values
    console.log(objin[x])
}

//Key
const objin3={
//key
name:"shur1",
age:76,
dep:"it"
}
for(let x in objin3){
          //changes here for key
console.log(x);
}

//print both key and values 

const obj2={
    name:"hari",
    age:25,
    dep:"IT"
}
for(let x in obj2){
    console.log(x+":"+obj2[x]);

}


//for of
let strof="javascript"
for(let x of strof){
    console.log(x);
}


//MRF----> Map, Reduce, Filter

//Map
//syntax
//maps = variable_name((value,index,actualarray)=>)
const M1=[1,2,3,4,5,6,7,8,9,10]
const maps=M1.map((val,indx,accarr)=>val*2)
console.log(maps);

//Reduce
//syntax
//reduces=variable.reduce((accumulator,value,index,actualarray)=>)

const R1=[11,12,13,14,15,16,17,18,19,20]
const redu=R1.reduce((acc,val,idx,accarr)=>{
    return acc+val; //12+11=23+12=35+13=48 like this
},12)
console.log(redu)

//Filter
//syntax
//filters=variable_name.filter((value,index,actularray))

const F1=[1,2,3,4,5,6,7,8,9,10]      
const fils=F1.filter((val,idx,accarr)=> val %2==0) // for odd val%2!=0
console.log(fils) 

//Templates Literals
//syntax `${}`

let tem="vineka"
let tem1="good"
console.log("hello "+`${tem}`+
    " she is doing "+`${tem1}`); //-------------------------------------------------------------

//settimeout
//using Arrow function ()=>{}

// setTimeout(()=>{
//     console.log("hello im a javascript");
//   //sec
// },2000)           //1sec=1000 milesec

//Callback----Mergeing a two function

function call(Callback){
    console.log("hello");
    Callback()
}

function call1(){
    console.log("vineka");
}
call(call1)

//another eg:

function greek(name,call){
    console.log(`hello ${name}`);
    call()
}
function greek1(){
    console.log("goodbye");
}
greek("vijay",greek1)


//multi-function callback

// function task1(callback){
//     console.log("Task1");
//     callback()
// }
// function task2(callback){
//     console.log("Task2");
//     callback()
// }
// function task3(callback){
//     console.log("Task3");
//     callback()
// }
// function task4(callback){
//     console.log("Task4");
//     callback()
// }
// task1{()=>{
//     task2{()=>{
//         task3{()=>{ 
//             task4{()=>{
//                 console.log("Task Completed")
//             }}
//         }}
//     }}                       ---------------------------------------------
// }}

//Callbackhell
// function hell1(callback){
//     setTimeout(() => {
//         console.log("Task1");
//         callback()
    
// },2000);
// }
// function hell2(callback){
//     settimeout(()=>{
//         console.log("Task2");
//         callback()
//     },4000);
// }
// function hell3(callback){
//     setTimeout(()=>{
//         console.log("Task3");
//         callback()

//     },3000);
// }
// function hell4(callback){
//     settimeout(()=>{
//         console.log("Task4")
//     },500);
// }
// hell1{()=>{
//     hell2{()=>{
//         hell3{()=>{
//             hell4{()=>{
//                console.log("Task conpleted")
//             }}
//         }}
//     }}
// }}----------------------------

// //Task 1 Reverse the string
// var x ="Trendnologies"
// for(var i=x.length-1; i>=0;i--)
// console.log(x[i]);

// //task2 0 to 10 even numbers
// function evennum(){
//     for( var i =0; i<=10; i+= 2)
//             console.log(i)
        
// } evennum()


// //task 3 loop the array
// const array = ["mango","apple","orange","banana","iceapple"]
// for(i=0; i <array.length;i++)
//     console.log(array[i])

// //task 4 odd number

// for(var i=21; i<30; i+=2){
//     console.log(i);
// }
// //task 5
// // var maxnum=[10,25,67,11,98]
// // for(var i=o; i<maxnum.length,i++){
// //     console.log(maxnum)
// //}

// //task 6 check odd or even number 
// var number = 55;
// if(number = 0){
//     console.log("Zero");
// }else if (number += 2){
//     console.log("Even");
// }else {
//     console.log("Odd");
// }

// //task 7

// const employee=[{
//     name: "aa",
//     age : "23",
//     dep: "IT"
// },
// {
//     name :"bb",
//     age : 44,
//     dep : "BA"
// },
// {
//     name :"cc",
//     age : 77,
//     dep : "BA"
// },
// {
//     name :"dd",
//     age : 66,
//     dep : "BA"
// },
// {
//     name :"ee",
//     age : 55,
//     dep : "BA"
// },
// {
//     name :"ff",
//     age : 11,
//     dep : "BA"
// }
// ]
// employee[2].name="bala"
// employee[5].age=100
// console.log(employee)



     
// // task 8
// let time= 9:10 a.m.
// if(time>= 9:50 a.m. && time 10:05 a.m.){
//     console.log("Madurai and Thanjavur buses will depart")
// }else if(time >=12:10 p.m. && time<=1:10 p.m.){
//     console.log("Bangalore and mysore")
// }else if(weather>=3:00 p.m. && time 4.00 p.m.){
//     console.log("Pondicherry or Cuddalore buses will depart")
// }else {
//     console.log("Local buses will depart")
// }








// const obj =[{
//     name : "pooja",
//     age : 20,
//     dep : "it"
// },
// {
//     name : "shree",
//     age  : 25,
//     dep  : "Non-it"
// },
// {
//     name : "swe",
//     age : 28,
//     dep : "Business"
// }
// ]

// const val=Object.values(obj[1]) 
// console.log (val);

// const key = Object.keys(obj[1])
// console.log (key)

// //task1
// var str = "javascript"
//     for  (var i = str.length - 1; i >= 0; i--){
//         console.log(str[i])
//     }

// //task2
// let cout =4
// while(cout >=0){
//     console.log(cout)
//     cout--;
// }


// //Task 3
// let weather= -1
// if(weather>=50){
//     console.log("Too Hot")
// }else if(weather >=30 && weather<=40){
//     console.log("Moderate Weather")
// }else if(weather>=0 && weather<30){
//     console.log("Weather is Cold")
// }else {
//     console.log("Too Cold")
// }
//task 4
// const objtask=[
//     {
//     name:"barani",
//     age5: 67,
//     dep:"business"
// },
// {
//     name1:"moha",
//     age6:33,
//     dep:"It1"
// },
// {
//     name2:"sowdhari",
//     age7:11,
//     dep:"It2"
// },
// {
//     name3:"kutty",
//     age8 :25,
//     dep:"It4"
// },
// objtask.name2="balaji"

// ]
// console.log(objtask)


