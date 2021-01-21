import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  arrPerson = [
    { name: 'Ti', age: 10 },
    { name: 'Teo', age: 12 },
    { name: 'Tun', age: 14 }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
