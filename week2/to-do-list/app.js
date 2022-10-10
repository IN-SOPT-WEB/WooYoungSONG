const leftPanel = document.querySelector('.left-section')
const rightPanel = document.querySelector('.right-section')
const todayButton= document.querySelector('.today-button')
const tomorrowButton = document.querySelector('.tomorrow-button')
const bothButton = document.querySelector('.both-container')
const todayTodoInput = document.querySelector('.today-to-do-input')
const todayTodoButton = document.querySelector('.today-input-button')
const tomorrowTodoInput = document.querySelector('.tomorrow-to-do-input')
const tomorrowTodoButton = document.querySelector('.tomorrow-input-button')
const todayTodoList = document.querySelector('.today-todo-list')
const tomorrowTodoList = document.querySelector('.tomorrow-todo-list')

const addTodayTodo = () => {
    if(todayTodoInput.value == ""){
        alert("내용을 입력하세요!")
    }else{
        const currenLi = document.createElement("li");
        currenLi.classList.add("todo-item")
        const creatDeleteButton = document.createElement("span");
    
    
        const currentInputData = todayTodoInput.value;
        const plusToDoList = document.createElement("span");
        plusToDoList.innerHTML= `${currentInputData}`
        creatDeleteButton.className += " material-icons today-delete-button";
        creatDeleteButton.innerHTML = 'delete'
    
        currenLi.appendChild(plusToDoList)
        currenLi.appendChild(creatDeleteButton)
    
        todayTodoList.appendChild(currenLi)
        todayTodoInput.value = "";
    }
}

const addTomorrowTodo= () => {
    if(tomorrowTodoInput.value == ""){
        alert("내용을 입력하세요!")
    }else{
        const currenLi = document.createElement("li");
        currenLi.classList.add("todo-item")
        const creatDeleteButton = document.createElement("span");
    
    
        const currentInputData = tomorrowTodoInput.value;
        const plusToDoList = document.createElement("span");
        plusToDoList.innerHTML= `${currentInputData}`
        creatDeleteButton.className += " material-icons tomorrow-delete-button";
        creatDeleteButton.innerHTML = 'delete'
    
        currenLi.appendChild(plusToDoList)
        currenLi.appendChild(creatDeleteButton)
    
        tomorrowTodoList.appendChild(currenLi)
        tomorrowTodoInput.value = "";
    }
}

todayTodoButton.addEventListener("click", addTodayTodo)
tomorrowTodoButton.addEventListener("click", addTomorrowTodo)

todayTodoInput.addEventListener("keydown", (e) => {
    if(e.keyCode === 13) // enter 키 치면
        addTodayTodo()
}) 

tomorrowTodoInput.addEventListener("keydown", (e) => {
    if(e.keyCode === 13) // enter 키 치면
        addTomorrowTodo()
}) 