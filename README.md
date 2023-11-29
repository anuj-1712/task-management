### Overview
This project is a task management application built using ReactJS and Tailwind CSS. It allows users to efficiently manage tasks by adding, editing, deleting, and marking tasks as completed.

### Project Structure
public/: Contains the index.html file
src/: Contains the main source code for the application.
 - components/: Houses the different components used in the app.
    1) Header.jsx: Component to display the heading and add icon
    2) TaskList.jsx: Component to display the list of tasks.
    3) TaskItem.jsx: Component representing a single task.
    4) AddModal.jsx: Component to add new tasks.
    5) EditModal.jsx: Component to edit existing tasks.
    6) ClearBtn.jsx: Component to clear all the tasks at once
    7) SortBtn.jsx: Component to sort tasks by priority levels or status
 - ContextApi/: Contains the contextapi file which is managing the overall state of the application
 - App.js: Main application component orchestrating the overall structure.
 - index.js: Entry point of the application
 - App.css: Contains the styling of all the icons 
 - index.css: Contains global fonts and global css
tailwing.config.js: Contains the configuration of tailwind CSS within the React application

### Design Choices
# ReactJS
Component-Based Structure: Utilized React's component architecture for modularity and reusability.
State Management: Leveraged React's Context API to manage task data and UI changes efficiently.

# Tailwind CSS
Utility-First Approach: Utilized Tailwind CSS for rapid styling with utility classes.
Responsive Design: Ensured responsiveness across various screen sizes using Tailwind's responsive classes.

# Local Storage 
Utilized to persist tasks locally, ensuring data persistence across sessions without the need for a backend.


### Additional Features
# Sorting
Implemented sorting functionality to organize tasks based on criteria such as due date or priority.

# Clear All Tasks
Added an option to clear all tasks at once, providing users with a convenient way to reset the task list.


### Getting Started
To run the project locally:

Clone this repository.
Navigate to the project directory.
Run npm install to install dependencies.
Run npm start to start the development server.


