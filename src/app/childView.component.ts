import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child-view',
    template: `<h3>{{ value }}</h3>
    `
})
export class ChildViewComponent {
    value = 0;
}