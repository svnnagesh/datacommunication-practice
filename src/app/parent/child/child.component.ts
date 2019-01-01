import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() myAddingValues;

  constructor() { }

  ngOnInit() {
    console.log('our adding value is', this.myAddingValues);
  }

}
