import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;
  constructor() {
    this.name = '';  
    this.age = 0;  
   }

  ngOnInit(): void {
  }

}
