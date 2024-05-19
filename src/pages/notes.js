import './notes.css'
import Colcade from 'colcade';

export const NotesStorage = (function () {

    let note_storage = []

    const addNote = (title, description) => {

        note_storage.push({
            title,
            description
        })

    }

    const renderNotes = function() {
        document.querySelector('.content').innerHTML = `
        <main class="main-notes">
            <div class="page-title">
                <h1>Notes</h1>
                <button class='openModel' onclick="document.querySelector('#note-dialog-box').showModal()">
                    <svg style="rotate: 45deg;" xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                    Add Note
                </button>
            </div>
    
            <div class="grid">
                <!-- columns -->
                <div class="grid-col grid-col--1"></div>
                <div class="grid-col grid-col--2"></div>
                <div class="grid-col grid-col--3"></div>
                <!-- items -->

            </div>
    
            <dialog id="note-dialog-box">
            <form action="">
    
                <div class="dialog-legend">            
                    <p>Add New Note</p>
                    <button onclick="document.querySelector('#note-dialog-box').close()" type="button" formmethod="dialog">
                        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                    </button>
                </div>
    
                <ul>
    
                    <li>
                        <label for="title">Title<span>*</span></label>
                        <input type="text" name="title" id="title" maxlength="30" required>
                    </li>
                    <li>
                        <label for="description">Description</label>
                        <textarea name="description" id="description" rows="8"></textarea>
                    </li>
                </ul>
    
                <div>
                    <button class="entry" type="submit" formmethod="dialog">Submit</button>
                </div>
                
    
            </form>
    
            </dialog>
        </main>
        `

        var colc = new Colcade( '.grid', {
            columns: '.grid-col',
            items: '.grid-item'
          });

        note_storage.forEach((value, index) => {
            const div = document.createElement('div')
            div.classList.add('grid-item')
            div.innerHTML = `<div class="grid-content">
                                <div class="title">
                                    <h3>${value.title}</h3>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                                </div>
                                <p contenteditable="true">${value.description}</p>

                            </div>
                            `
            
            div.querySelector('p').addEventListener('focusout', (event) => {
                note_storage[index].description = event.target.textContent
            })

            div.querySelector('svg').addEventListener('click', () => {
                note_storage.splice(index, 1)
                renderNotes()
            })

            colc.prepend(div)
        })

        const dialog = document.querySelector('#note-dialog-box')

        dialog.addEventListener('click', (event) => {
            if (event.target.id == 'note-dialog-box') {
                document.querySelector('#note-dialog-box').close()
            }
        })
    
        const form = document.querySelector('#note-dialog-box form')
    
        form.addEventListener('submit', (event) => {
            event.preventDefault()
            const formData = new FormData(form)
    
            addNote(formData.get('title'), formData.get('description'))

            document.querySelector('.active').click()
            document.querySelector('#note-dialog-box').close()
            form.reset()
            }
        )

    }

    return {
        addNote,
        renderNotes,
        note_storage
    }

})()