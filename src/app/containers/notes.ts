import { Component } from '@angular/core';
import { NoteCard, NoteCreator } from '../ui';

@Component({
	selector: 'notes-container',
	directives: [
		NoteCard,
		NoteCreator
	],
	styles: [`
	.notes {
		padding-top: 50px;
	}
	.creator {
		margin-bottom: 40px;
	}
	`],
	template: `
	<div class="row center-xs notes">
		<div class="col-xs-6 creator">
			<note-creator (createNote)="onCreateNote($event)"></note-creator>
		</div>
		<div class="notes col-xs-8">
		<div class="row between-xs">
			<note-card
			class="col-xs-4"
			(checked)="onNoteChecked($event, i)"
			*ngFor="let note of notes; let i = index"
			[note]="note"
			>
			</note-card>
		</div>
		</div>
	</div>
	`
})
export class Notes {
	notes = [
	{title: 'Chores 1', value: 'Don\'t forget to clean up', color: '#eee'},
	{title: 'Chores 2', value: 'Don\'t forget to clean up', color: '#ddd'},
	{title: 'Chores 3', value: 'Don\'t forget to clean up', color: '#eee'}];

	onNoteChecked(note, i) {
		console.log(note)
		this.notes.splice(i, 1)
	}

	onCreateNote(note) {
		this.notes.push(note);
	}
}
