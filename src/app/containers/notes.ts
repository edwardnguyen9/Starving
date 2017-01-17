import {Component} from '@angular/core'

@Component({
    selector: 'notes-container',
    styleUrls: ['./notes.css'],
    templateUrl: './notes.html'
})
export class NotesContainer{
    note = {title: 'this is a note', value: 'value'}
}