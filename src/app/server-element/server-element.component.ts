import { Component, OnInit, Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {

  //6-66 assigns an alias; must bind to srvElement instead of element
  @Input('srvElement') element: {type: string, name: string, content: string}

  constructor() { }

  ngOnInit() {
  }

}
