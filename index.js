// console.log("Hello World");

// var let const
// strings number boolean null boolean
// operators + - %
// comparison operators == === != !== >= <=
// logical && || !
// ternary operators ? :
// assigment 

// var gender = "female";
// console.log(gender);

let name = "Agnes";
// console.log(name);

name = "Mary";
console.log(name);

let num1 = 2;
let num2 = 5;

let sum = num1 + num2;
sum **= 2;
console.log(sum);

// string functions

let fullname = "Nandawula";
// let name = fullname.s
console.log(fullname.split(""));



// First Assignment

function myfunction(a,b) {
    let result = a + b;
    let Answer = result > 9 ? "The result is greater than 9" : result ;
    return Answer;
}

let result = myfunction(25,5);
// let Answer = 
console.log(result);

// second assignment
// date
const date = new Date();
const time = date.getHours();
const mybreakfastmenu = document.getElementById("breakfast");
const mylunchmenu = document.getElementById("lunch");
// document.innerHTML = time;
console.log(time);

// Using if condition
if (time <= 11) {
    // mybreakfastmenu.style.display = "block";
    // mylunchmenu.style.display = "none";
} else if (time <= 17) {
    // mybreakfastmenu.style.display = "none";
    // mylunchmenu.style.display = "block";
} else {
    document.body.innerHTML = "Goodnight";
}

// Using switch condition
switch (time) {
    case 4 :
        mybreakfastmenu.style.display = "block";
        mylunchmenu.style.display = "none";
        break;
    case 8 :
        mybreakfastmenu.style.display = "none";
        mylunchmenu.style.display = "block";
        break;

    default:
        // mybreakfastmenu.innerHTML = "Goodnight";
        break;
}
// return time;

// Third assignment Loops, Objects and arrays.

    const myArray = [];
for (let i = 0; i <= 20; i++) {
//    console.log(i);
   if (i % 2 == 0) {
    console.log("Even number :" + i);
    myArray.push(i);
    continue;
   }else if (i % 2 != 0){
    console.log("Odd number: " + i);
   }
}
console.log(myArray);

// Picking value inputs and event listeners.

const body = document.getElementById("body");
const form = document.getElementById("form");
const todoname = document.getElementById("todoname");
const days = document.getElementById("days");
const display = document.getElementById("display");

let todoitems = [];

let editId = null;

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(editId !== null){
        todoitems = todoitems.filter(function(item){
            if(item.id !== editId){
                return item
            }
        })
    
    if(todoname.value !== "" && days.value !== ""){
        const todo_object = {
            name: todoname.value,
            days: days.value,
            id: editId
        }
        todoitems.push(todo_object)
        todoname.value = ""
        days.value = ""
    } 
    editId = null;
    displayData(todoitems)
} else {
        if(todoname.value !== "" && days.value !== ""){
        // get unique id
        const id = todoitems.length > 0 ? todoitems[todoitems.length -1].id + 1:1
        const todo_object = {
            name: todoname.value,
            days: days.value,
            id: id
        }
        todoitems.push(todo_object)
        console.log(todoitems)
        todoname.value = ""
        days.value = ""
        editId = null;
        displayData(todoitems)
        }
    }
})

function displayData() {
    if(todoitems.length > 0){
        display.innerHTML = todoitems.map(function (item){
            return `<li class = "list-group-item d-flex justify-content-between align-items-start">
            <div class = "ms-2 me-auto">
            <div class = "fw-bold">${item.name}</div>
            ${item.days}
            </div>
            <div>
                <span
                style="cursor: pointer;"
                class= "badge bg-primary"
                id= "edit" data-id='${item.id}'
                onclick="editItem(this)"
                >Edit</span>
                <span
                style="cursor: pointer;"
                class="badge bg-danger"
                onclick="deleteItem(this)"
                id="delete" data-id='${item.id}'>Delete</span>
            </div>
            </li>`
        }).join("")
    } else {
        display.innerHTML = "No data to display"
    }
}
displayData()

function editItem(btn){
    const id = btn.dataset.id
    const item = todoitems.find(function(item){
        if(item.id == id) {
            return item
        }
    })
    if(item) {
        todoname.value = item.name
        days.value = item.days
        editId = item.id
    }
}

function deleteItem(btn){
    editId = null
    const id = parseInt(btn.dataset.id)
    // filter
    const newdata = todoitems.filter(function (item){
        if(item.id !== id){
            return item
        }
    }) 
    todoitems = newdata
    displayData()
}

// create a todo list but every item should have edit and delete buttons
// two inputs todoName, days,
// obj {name: todoName, days: 3}

// how to style using bootsrap arrays[objects], filter, find, reduce

// Javascript classes - these are blue prints for javascript objects.

class todolist {
    constructor () {
        this.todoname = ""
        this.days = ""
    }
    get Todoname() {
        return this.todoname
    }
    get Days() {
        return this.days
    }
    set Todoname(todoName) {
        this.todoName = todoName;
    }
    set Days(days) {
        this.days = days;
    }
    
}



