import { Component, Input } from '@angular/core';

@Component({
    selector: 'note-card',
    styleUrls: ['./note-card.css'],
    templateUrl: './note-card.html'
})
export class NoteCard {
    @Input() note = {};
};