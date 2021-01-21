import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `<button (click)="addForParent()">Add</button>`
})
export class ChildComponent {
    @Output() myclick = new EventEmitter();

    addForParent() {
        this.myclick.emit();
    }
}