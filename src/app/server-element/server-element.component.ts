import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy   {

  //6-66 assigns an alias; must bind to srvElement instead of element
  @Input('srvElement') element: {type: string, name: string, content: string}
  @Input() name: string

  constructor() { 
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchange called')
    console.log(changes)

  }

  ngOnInit() {
    console.log('ngOninit called')
  }

  ngDoCheck() {
    console.log('ngdocheck called')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    console.log('onDestroy')
  }
}
