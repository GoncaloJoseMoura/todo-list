import './entries.css'
import './checkbox.css'
import Storage from '../modules/data'
import Task from '../modules/dom'

function Todo(project) {

    const main =  document.querySelector('.content')
    main.innerHTML = `
    <main class="main-todos">
        <div>
            <h1>${project}</h1>
            <button class='openModel' onclick="document.querySelector('#dialog-box').showModal()">
                <svg style="rotate: 45deg;" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                Add Task
            </button>
            <button class="clear">
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                Clear Selected
            </button>
        </div>

        <ul class='task-list'>
        </ul>

        <dialog id="dialog-box">
        <form action="">

            <div class="dialog-legend">            
                <p>Add New Task</p>
                <button onclick="document.querySelector('#dialog-box').close()" type="button" formmethod="dialog">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                </button>
            </div>

            <ul>

                <li>
                    <label for="title">Title<span>*</span></label>
                    <input type="text" name="title" id="title" placeholder="Wash the Car" maxlength="40" required>
                </li>
                <li>
                    <label for="priority">Priority</label>
                    <select name="priority" id="priority">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <label for="project">Project</label>
                    <select name="project" id="project">
                    </select>
                </li>
                <li>
                    <label for="date">Due Date</label>
                    <input type="date" name="date" id="date">
                </li>
            </ul>

            <div>
                <button class="entry" type="submit" formmethod="dialog">Submit</button>
            </div>
            

        </form>
        
    </dialog>
</main>
    `
    Object.keys(Storage.task_storage).forEach(project_name => {
        const option = document.createElement('option')
        option.value = project_name
        option.textContent = project_name
        option.selected = project == project_name
        main.querySelector('select#project').appendChild(option)
    })



    document.querySelector('.clear').addEventListener('click', () => {
        document.querySelectorAll('.task-list li input').forEach(event => {
            if (event.checked) {
                event.closest('li').querySelector('.erase').click()
            }
        })

    })

    const dialog = document.querySelector('#dialog-box')

    dialog.addEventListener('click', (event) => {
        if (event.target.id == 'dialog-box') {
            document.querySelector('#dialog-box').close()
        }
    })

    const form = document.querySelector('#dialog-box form')

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = new FormData(form)

        const date_info = formData.get('date') == ''? 'no date': formData.get('date')
        Storage.addTask(new Task.createTask(formData.get('title'), date_info, formData.get('priority')), formData.get('project'))

        document.querySelector('#dialog-box').close()
        form.reset()
        document.querySelector('.active').click()
        }
    )

    if (project == 'Entries') {
        Task.listEntries()
    } else {
        Task.listTasks(project)
    }

}

export default Todo