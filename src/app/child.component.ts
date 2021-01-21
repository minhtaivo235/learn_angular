import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `<button (click)="addForParent()">Add</button>
    <button (click)="subForParent()">Sub</button>
    `
})
export class ChildComponent {
    @Output() myclick = new EventEmitter<boolean>();

    addForParent() {
        this.myclick.emit(true);
    }
    subForParent() {
        this.myclick.emit(false);
    }
}