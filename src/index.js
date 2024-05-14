import './style.css'
import Profile from './assets/profile.jpg'
import Typed from 'typed.js';

document.querySelector('img').src = Profile

// const inputs = document.querySelectorAll('input')
const ul = document.querySelector('.content ul')

function addTask(element) {
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
        <p class="task1">${element.text}</p>
    </div>
    <div class="date">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12" class="calendar_icon"><path fill="currentColor" fill-rule="evenodd" d="M9.5 1h-7A1.5 1.5 0 0 0 1 2.5v7A1.5 1.5 0 0 0 2.5 11h7A1.5 1.5 0 0 0 11 9.5v-7A1.5 1.5 0 0 0 9.5 1ZM2 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-7ZM8.75 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM3.5 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z" clip-rule="evenodd"></path></svg>
        <p>${element.date}</p>
    </div>
    `

    li.querySelector('input').addEventListener('click', (event) => {
        if (event.target.checked) {
            event.target.closest('.checkbox-wrapper-12').querySelector('p').classList.add('hidden')
        } else {
            event.target.closest('.checkbox-wrapper-12').querySelector('p').classList.remove('hidden')
        }

    })

    ul.appendChild(li)
}

function Task(text, date) {
    this.text = text
    this.date = date
}

addTask(new Task('What have i done today', 'Out 8 2021'))
addTask(new Task('What have i done today', 'Out 8 2021'))
addTask(new Task('What have i done today', 'Out 8 2021'))
addTask(new Task('What have i done today', 'Out 8 2021'))
addTask(new Task('What have i done Tomorrow', 'Out 9 2021'))
addTask(new Task('What have i done today', 'Out 8 2021'))
addTask(new Task('What have i done today', 'Out 8 2021'))
addTask(new Task('What have i done today', 'Out 8 2021'))
addTask(new Task('What have i done today', 'Out 8 2021'))
addTask(new Task('What have i done today', 'Out 8 2021'))
addTask(new Task('What have i done today', 'Out 8 2021'))
addTask(new Task('What have i done today', 'Out 8 2021'))
addTask(new Task('What have i done today', 'Out 8 2021'))
addTask(new Task('What have i done today', 'Out 8 2021'))
addTask(new Task('What have i done today', 'Out 8 2021'))



const typed = new Typed('.txt-rotate', {
  strings: [ "Master your day.", "Crush your to-do list.", "Stay productive!"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});