import { Component } from '@angular/core';
import { Main } from './containers';

@Component({
	selector: 'app',
	template: `
		<div>
			<router-outlet></router-outlet>
		</div>
	`
})
export class App {}
