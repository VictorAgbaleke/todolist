# To-Do List Application

## Project Overview

This project is a simple and elegant To-Do List application. It allows users to add, check off, and delete tasks. The application's state is saved in the local storage of the browser, so the task list is persistent even after the browser is closed or the page is refreshed. The project showcases the use of HTML, CSS, and JavaScript for front-end web development.

## Features

- **Add Tasks**: Users can input text in the input box and add tasks to the list by clicking the "Add" button.
- **Check Off Tasks**: Users can mark tasks as completed by clicking on them, which will strike through the task text.
- **Delete Tasks**: Users can delete tasks by clicking on the "×" icon next to each task.
- **Persistent Storage**: The task list is saved in the browser's local storage, ensuring that tasks are not lost on page reload.

## File Structure

- `index.html`: The main HTML file that contains the structure of the To-Do List application.
- `style.css`: The CSS file that styles the To-Do List application.
- `script.js`: The JavaScript file that contains the logic for adding, checking, and deleting tasks, as well as saving and loading tasks from local storage.

## HTML

The HTML file (`index.html`) includes the structure of the application:
- A `div` with the class `container` that holds the entire app.
- A `div` with the class `todo-app` that contains the title, input box, button, and task list.
- The `input` element for entering new tasks and the `button` for adding them.
- An unordered list (`ul`) with the ID `list-container` to display the tasks.

## CSS

The CSS file (`style.css`) styles the To-Do List application:
- Universal styles for margin, padding, font, and box-sizing.
- Styles for the `container` to provide full width, height, and background gradient.
- Styles for the `todo-app` to set the width, background color, margin, padding, and border radius.
- Styles for the title, input row, and list items, including their hover and checked states.

## JavaScript

The JavaScript file (`script.js`) implements the functionality of the To-Do List application:
- **addTask()**: Adds a new task to the list if the input box is not empty. It also creates a `span` element for the delete button and saves the updated list to local storage.
- **Event Listener for List**: Toggles the checked state of tasks or deletes tasks based on where the user clicks (on the task text or the delete button).
- **saveData()**: Saves the current state of the task list to local storage.
- **showTask()**: Loads the task list from local storage when the page is loaded.

## How to Use

1. Open the `index.html` file in a web browser.
2. Enter a task in the input box and click the "Add" button to add it to the list.
3. Click on a task to mark it as completed. Click again to unmark it.
4. Click on the "×" icon next to a task to delete it.
5. The task list will be saved automatically and persist across page reloads.

## Installation

No installation is required for this project. Simply download the files and open `index.html` in a web browser.

## Conclusion

This To-Do List application is a simple project that demonstrates the use of basic web technologies: HTML for structure, CSS for styling, and JavaScript for functionality. It is a great example for a portfolio, showcasing the ability to create interactive and user-friendly web applications.
