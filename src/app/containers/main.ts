import { Component } from '@angular/core';
import { AppBar } from '../ui/app-bar';
import { Notes } from './notes';

@Component({
	selector: 'main-container',
	template: `
		<div class="main-container">
			<app-bar></app-bar>
			<main class="main">
				<router-outlet></router-outlet>
			</main>
		</div>
	`
})
export class Main {}
