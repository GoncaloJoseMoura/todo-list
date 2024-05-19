
import Storage from "./data"
import Todo from "../pages/entries"
import {format} from "date-fns";

const Task = (() => {

    function createTask(text, date, priority, checked = false) {
        const formated_date = date == ''? 'no date': format(new Date(date.split('-')), 'dd MMM yyyy')
        return {'text': text, 'date': formated_date, 'priority': priority, 'checked': checked}
    }


    const listTasks = (project, clear = true) => {
        const ul = document.querySelector('.task-list')
        if (clear) {
            ul.innerHTML = ''
        }

        Storage.task_storage[project].forEach(element => {

            const li = document.createElement('li')
            li.innerHTML = `
            <div class="checkbox-wrapper-12">
                <div class="cbx">
                <input id="cbx-12" type="checkbox"/>
                <label for="cbx-12"></label>
                <svg width="15" height="14" viewbox="0 0 15 14" fill="none">
                    <path d="M2 8.36364L6.23077 12L13 2"></path>
                </svg>
                </div>
                <ul>
                    <li>
                        <p class="task1">${element.text}</p>
                    </li>
                    <li class="project-name">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M756-120 537-339l84-84 219 219-84 84Zm-552 0-84-84 276-276-68-68-28 28-51-51v82l-28 28-121-121 28-28h82l-50-50 142-142q20-20 43-29t47-9q24 0 47 9t43 29l-92 92 50 50-28 28 68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q15 0 28.5 3t27.5 9l-99 99 72 72 99-99q7 14 9.5 27.5T841-701q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L204-120Z"/></svg>
                        <p>${project}</p>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px"  fill="currentColor"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                        <p>${element.date}</p>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor" ><path d="M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z"/></svg>
                        <p>${element.priority}</p>
                    </li>
                    <li>
                        <button class="erase">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                        </button>
                    </li>
                </ul>
            </div>
            `
            if (element.checked) {
                li.querySelector('.checkbox-wrapper-12 input').checked = true
                li.querySelector('.checkbox-wrapper-12 ul').classList.add('hidden')
            }

            if (clear) {
                li.querySelector('li.project-name').innerHTML = ''
            }

            li.querySelector('.erase').addEventListener('click', (value) => {
                Storage.deleteTask(element, project)
                li.remove()

            })
        
            li.querySelector('input').addEventListener('click', (event) => {
                if (event.target.checked) {
                    event.target.closest('.checkbox-wrapper-12').querySelector('ul').classList.add('hidden')
                    element.checked = true
                } else {
                    event.target.closest('.checkbox-wrapper-12').querySelector('ul').classList.remove('hidden')
                    element.checked = false
                }
        
            })
        
            ul.appendChild(li)
        })

    }

    const listProjects = () => {
        
        document.querySelector('.entries').click()
        const all_projects = Object.keys(Storage.task_storage)
        const projects_dom = document.querySelector('.projects-list')
        projects_dom.innerHTML = ''

        all_projects.forEach((value, index) => {
                const li = document.createElement('li')
                li.classList.add('project-item')
                const p = document.createElement('p')
                p.classList.add('project-item')
                p.textContent = value
                li.appendChild(p)
                li.innerHTML += ' <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></li>'

                li.addEventListener('click', (event) => {
                    if (event.target.classList.contains('project-item')) {
                        document.querySelector('.active').classList.remove('active')
                        Todo(value)
                        li.classList.add('active')
                    } else {
                        Storage.deleteProject(value)
                        event.target.closest('li').remove()
                        document.querySelector('.entries').click()
                    }
                })

            projects_dom.appendChild(li)
       })

    }

    const listEntries = () => {
        const ul = document.querySelector('.task-list')
        ul.innerHTML = ''
        Object.keys(Storage.task_storage).forEach(v => {
            listTasks(v, false)
        })
    }

    return {
        listTasks,
        listProjects,
        listEntries,
        createTask
    }

})()

export default Task