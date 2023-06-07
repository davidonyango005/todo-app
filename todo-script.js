// Get HTML elements
const header = document.getElementById("header");

const todosHeader = document.getElementById("todos-header");
const inputBtn = document.getElementById("input-btn");
const todosSec = document.getElementById("todos-section");
const todosList = document.getElementById("todos-list");

// Create HTML elements

// The header part *** Heading 1, Input & Add task button ***
const headingOne = document.createElement("h1");
const headingOneText = document.createTextNode("My Tasks");
headingOne.appendChild(headingOneText);

const inputField = document.createElement("input");
inputField.classList.add("input");
inputField.setAttribute("placeholder", "Enter new task");
inputField.setAttribute("id", "input");

const addTaskBtn = document.createElement("button");
addTaskBtn.classList.add("add-task-btn");
addTaskBtn.setAttribute("type", "submit");
const btnText = document.createTextNode("Add Task");
addTaskBtn.appendChild(btnText);

todosHeader.appendChild(headingOne);

inputBtn.appendChild(inputField);
inputBtn.appendChild(addTaskBtn);

// Function
// Create a todos

// Event Listeners
addTaskBtn.addEventListener("click", function addTodo() {
    // The todos section *** Icons, todos tasks

    // todo div
    const todo = document.createElement("div"); // todo div
    todo.setAttribute("id", "todo");

    const checkDiv = document.createElement("div"); // done/undone icons div
    checkDiv.setAttribute("id", "check-div");

    const todoText = document.createElement("div"); // task div
    todoText.setAttribute("id", "todo-text");

    const editDelDiv = document.createElement("div"); // edit/del iconsmdiv
    editDelDiv.setAttribute("id", "edit-del");

    // Done/Undone icons
    const unDoneIcon = document.createElement("span");
    unDoneIcon.classList.add("fa-regular", "fa-circle");

    const doneicon = document.createElement("span");
    doneicon.classList.add("fa-solid", "fa-circle-check");

    // Todo task/text
    const todoTask = document.createElement("span");
    todoTask.classList.add("todo-task");
    const mytext = document.createTextNode(inputField.value);
    todoTask.appendChild(mytext);

    // Add a small note that a task has been marked undone/edited
    // const taskNote = ["Undone!", "Edited!"];
    const markedUndoneNote = document.createElement("sup");
    markedUndoneNote.classList.add("marked-undone-note");
    // Marked as undone note
    const undoneText = document.createTextNode("Undone!");
    markedUndoneNote.appendChild(undoneText);

    // Marked as edited
    const markedEdited = document.createElement("sup");
    markedEdited.classList.add("marked-edited-note");
    const editedText = document.createTextNode("Edited!");
    markedEdited.appendChild(editedText);

    // Edit/Delete icons
    const editTask = document.createElement("span");
    editTask.classList.add("fa-solid", "fa-pen");

    const delTask = document.createElement("span");
    delTask.classList.add("fa-solid", "fa-trash-can");

    // Let's do fusion
    checkDiv.appendChild(unDoneIcon);
    checkDiv.appendChild(doneicon);

    todoText.appendChild(todoTask);
    todoText.appendChild(markedUndoneNote);
    todoText.appendChild(markedEdited);

    editDelDiv.appendChild(editTask);
    editDelDiv.appendChild(delTask);

    todo.appendChild(checkDiv);
    todo.appendChild(todoText);
    todo.appendChild(editDelDiv);

    todosList.appendChild(todo);

    // Delete a todo
    delTask.addEventListener("click", function delTodo() {
        todo.remove();
    });

    // Mark task as done
    unDoneIcon.addEventListener("click", function markDone() {
        doneicon.style.visibility = "visible";
        todoTask.style.textDecoration = "line-through";
        editTask.style.visibility = "hidden";
        markedUndoneNote.style.visibility = "hidden";
        todo.style.backgroundColor = "rgb(221, 221, 87";
        markedEdited.style.visibility = "hidden";
    });

    todoTask.addEventListener("click", function markDone() {
        doneicon.style.visibility = "visible";
        todoTask.style.textDecoration = "line-through";
        editTask.style.visibility = "hidden";
        markedUndoneNote.style.visibility = "hidden";
        todo.style.backgroundColor = "rgb(221, 221, 87";
        markedEdited.style.visibility = "hidden";
    });

    // Mark task as undone again
    doneicon.addEventListener("click", function markUndone() {
        doneicon.style.visibility = "hidden";
        todoTask.style.textDecoration = "none";
        editTask.style.visibility = "visible";
        markedUndoneNote.style.visibility = "visible";
        todo.style.backgroundColor = "#dce3ee";
    });

    // Edit task
    editTask.addEventListener("click", function editTodo() {
        // Creating the edit todo modal window
        const modalDiv = document.createElement("div");
        modalDiv.classList.add("modal");

        const modalOverlay = document.createElement("span");
        modalOverlay.classList.add("modal-overlay");

        document.body.appendChild(modalDiv);
        document.body.appendChild(modalOverlay);

        // Modal contents
        const modalCont = document.createElement("div");
        modalCont.classList.add("modal-content");
        modalDiv.appendChild(modalCont);

        const closeModal = document.createElement("span");
        closeModal.classList.add("fa-solid", "fa-times-circle");

        const modalInput = document.createElement("input");
        modalInput.classList.add("modal-input");
        modalInput.setAttribute("placeholder", "Replace task with...");
        modalInput.setAttribute("id", "modal-input");

        const modalBtn = document.createElement("button");
        modalBtn.classList.add("modal-btn");
        modalBtn.setAttribute("id", "modal-btn");
        const modalBtnText = document.createTextNode("Update Task");
        modalBtn.appendChild(modalBtnText);

        modalCont.appendChild(closeModal);
        modalCont.appendChild(modalInput);
        modalCont.appendChild(modalBtn);

        const selected = todo;
        // console.log(selected);
        // Target the selected todo, acquire specifically its todo text
        const taskSpan = selected.children[1].children[0];

        // Remove the text altogether
        taskSpan.remove();

        modalBtn.addEventListener("click", function todoAdded() {
            // Create a todo-task span and append the new task to it, prepend the span to the todo text div
            const newTaskSpan = document.createElement("span");
            newTaskSpan.classList.add("todo-task");
            const newTask = document.createTextNode(modalInput.value);
            // console.log(newTask);
            newTaskSpan.appendChild(newTask);
            todoText.prepend(newTaskSpan);

            // console.log(taskSpan);
            // console.log(selected.children[1]);
            // console.log(selected.children[1].children[0]);

            // todoTask.appendChild(newTask);
            markedEdited.style.visibility = "visible";
            markedUndoneNote.style.visibility = "hidden";

            // Close the modal and its overlay
            modalOverlay.remove();
            modalDiv.remove();

            newTaskSpan.addEventListener("click", function markDone() {
                doneicon.style.visibility = "visible";
                newTaskSpan.style.textDecoration = "line-through";
                editTask.style.visibility = "hidden";
                markedUndoneNote.style.visibility = "hidden";
                todo.style.backgroundColor = "rgb(221, 221, 87";
                markedEdited.style.visibility = "hidden";
            });
        });

        // Close modal button is hidden
        // closeModal.addEventListener("click", function removeModal() {
        //     modalOverlay.remove();
        //     modalDiv.remove();
        // });
    });
});

// Detect if a todo has been added, return children
// todosList.addEventListener("DOMNodeInserted", (e) => {
//     console.log(todosList.children);
// });

// // Detect if a todo has been Remove, return remaining children
// todosList.addEventListener("DOMNodeRemoved", (e) => {
//     console.log(todosList.children);
// });
// localStorage.clear();
