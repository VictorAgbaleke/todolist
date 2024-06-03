const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");// alerts the user to type a text if the textbosx is empty
    }
    else{
        let li = document.createElement("li");// creating an html element with the tag name "li" and storing it in the li variable 
        li.innerHTML = inputBox.value;//adds whatever text put into the input field into teh li
        listContainer.appendChild(li);//it would then be displayed under this list container.
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
}
    inputBox.value = " ";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
 }, false);

 function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
 }

 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
 }

 showTask();