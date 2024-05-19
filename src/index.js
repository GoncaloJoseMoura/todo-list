import './style.css'
import Profile from './assets/profile.jpg'
import Typed from 'typed.js';
import { NotesStorage } from './pages/notes.js';

import Task from './modules/dom.js'
import Todo from './pages/entries.js';
import Storage from './modules/data.js'

// completed
// add projects to form when creating a new one 
// when delete project i get an error
// when submiting new project run that project which run the dialog project selection again
// checking for duplicated tasks
// when deleting a task, delete it in the task_storage
// creating a project when in projects trows a bug
// make it so the task have a grid layout where | | | is always the same distance between rows
// when in a project tab hide the projects from the tasks
// if i clear or delete a task and add a new one it will mark it as checked
// when i add a task in a project it will check another task

// to do
// add text that says you have completed all your tasks with a robo image
// when you delete all task a few remain when changing to a project
// create a localStorage


document.querySelector('img').src = Profile

const typed = new Typed('.txt-rotate', {
  strings: [ "Master your day.", "Crush your to-do list.", "Stay productive!"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});


Storage.createProject('Default')
Storage.createProject('Daily Routine')
Storage.createProject('Errands')

Task.listProjects()

Storage.addTask(new Task.createTask('Track income and expenses', '1111-01-01', 'Low'), 'Default')
Storage.addTask(new Task.createTask('Review budget categories and adjust if...', '1111-01-01', 'High'), 'Default')
Storage.addTask(new Task.createTask("Buy groceries", '1111-01-01', "Medium"), 'Errands')
Storage.addTask(new Task.createTask("Finish report", '1111-01-01', "High"), 'Daily Routine')
Storage.addTask(new Task.createTask("Go for a run", '1111-01-01', "Low"), 'Daily Routine')
Storage.addTask(new Task.createTask("Call mom", '1111-01-01', "Medium"), 'Daily Routine')
Storage.addTask(new Task.createTask("Clean apartment", '1111-01-01', "Low"), 'Errands')

NotesStorage.addNote("Shopping List", "Milk, Bread, Eggs, Bananas")
NotesStorage.addNote("Meeting Agenda","Discuss project timeline - Brainstorm marketing ideas - Assign tasks")
NotesStorage.addNote( "Call Mom", "Remind her about birthday dinner reservation")
NotesStorage.addNote("Interesting article", "https://www.example.com/science/new_discovery https://www.sciencenews.org/ https://www.example.com/science/new_discovery https://www.sciencenews.org/ https://www.example.com/science/new_discovery https://www.sciencenews.org/ https://www.example.com/science/new_discovery https://www.sciencenews.org/")
NotesStorage.addNote("Movie idea", "Write a script about a time-traveling librarian")
NotesStorage.addNote("Tomorrow's tasks", "- Finish project report - Go to the gym - Pick up dry cleaning")

Todo('Entries')

document.querySelector('.entries').addEventListener('click', (event) => {

    document.querySelector('.active').classList.remove('active')
    Todo('Entries')
    document.querySelector('.entries').classList.add('active')
})

document.querySelector('.notes').addEventListener('click', (event) => {

  document.querySelector('.active').classList.remove('active')
  NotesStorage.renderNotes()
  document.querySelector('.notes').classList.add('active')
})

const form = document.querySelector('#project-modal form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(form)

    if (!(formData.get('name') in Storage.task_storage)) {
  
      Storage.createProject(formData.get('name'))
      Task.listProjects()
    } else {
      alert(formData.get('name') + ' is already a Project')
    }

    document.querySelector('#project-modal').close()
    form.reset()
    document.querySelector('ul.projects-list').lastChild.click()
    }
)