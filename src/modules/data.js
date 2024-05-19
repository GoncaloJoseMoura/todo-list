
const Storage = (function() {

    let task_storage = {}

    const addTask = (element, project) => {

        if (!(task_storage[project].some(elem => {
            return elem.text == element.text
        }))) {
            task_storage[project].push(element)
        }
    }

    const createProject = (name) => {

        if (!(name in task_storage)) {
            task_storage[name] = []
        } 
    }

    const deleteProject = (name) => {
        delete task_storage[name]

    }

    const deleteTask = (task, project) => {
        const check = task_storage[project].findIndex((element) => element.text == task.text)
        task_storage[project].splice([check], 1)
    }

    return {
        addTask,
        createProject,
        deleteProject,
        deleteTask,
        task_storage
    }
})()

export default Storage