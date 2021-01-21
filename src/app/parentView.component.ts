import { Component, ViewChild } from '@angular/core';
import { ChildViewComponent } from './childView.component';

@Component({
    selector: 'app-parent-view',
    template: `<button (click)="onAddForChild()">Add for child</button>
        <app-child-view></app-child-view>
    `
})
export class ParentViewComponent {
    @ViewChild(ChildViewComponent)
    myChild: ChildViewComponent;

    constructor() {
        this.myChild = new ChildViewComponent;            
    }

    onAddForChild() {
        this.myChild.value++;
    }
}