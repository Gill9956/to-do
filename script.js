const todoLists=document.querySelector(".todoLists");
const listValue=document.querySelector(".todoValue");
let todoListValue=[];


// retrieve already saved values from local storage
const getTodoListFromLS=()=>{
    return JSON.parse(localStorage.getItem("todoYoutube"))||[];
};


// saves the to do list items on local storage
const addTodoListLocalStorage=(todo)=>{
    return localStorage.setItem("todoYoutube",JSON.stringify(todo));
};

const showTodoList=()=>{
    todoListValue=getTodoListFromLS();
    todoListValue.forEach((curTodo)=>{
        const liElement=document.createElement("li");
        liElement.innerHTML=curTodo;
        todoLists.append(liElement);

    });
};

// remove the task added before
const removeTodoList=(e)=>{
    console.log(e.target.textContent);
    let currentTodo=e.target;
    console.log(todoListValue);
    
    updatedTodoList = todoListValue.filter(
        (curTodoValue)=>curTodoValue!=currentTodo.textContent
    );

    addTodoListLocalStorage(updatedTodoList);
    currentTodo.remove();
    // todoLists.innerHTML="";
    // showTodoList();
    console.log(updatedTodoList);
};

const addTodoList =(e)=>{
    e.preventDefault();          
    todoListValue=getTodoListFromLS();
    let newTodo=listValue.value.trim();

    listValue.value="";

    if(newTodo.length!=0 && !todoListValue.includes(newTodo)){
        todoListValue.push(newTodo);
        
        addTodoListLocalStorage(todoListValue);
        const liElement=document.createElement("li");
        liElement.innerHTML=newTodo;
        todoLists.append(liElement);
        
    }
    
};
showTodoList();

document.querySelector(".btn").addEventListener('click',(e)=>{
    addTodoList(e);
});

todoLists.addEventListener('click',(e)=>removeTodoList(e));