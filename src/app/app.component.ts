import { Component,OnInit,AfterViewInit } from '@angular/core';
import * as Primitives from 'a01/primitives.min.js';

declare var $:any;
declare var famDiagram:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {

constructor() {  
  var features=   function famdiagram() {
    var options = new Primitives.famdiagram.Config();

 var items = [
     { id: 1, spouses: [2], title: "Thomas Williams", label: "Thomas Williams", description: "1, 1st husband", image: "demo/images/photos/t.png" },
     { id: 2, title: "Mary Spencer", label: "Mary Spencer", description: "2, The Mary",image: "demo/images/photos/m.png" },
     { id: 3, spouses: [2], title: "David Kirby", label: "David Kirby", description: "3, 2nd Husband", image: "demo/images/photos/d.png" },
     { id: 4, parents: [1, 2], title: "Brad Williams", label: "Brad Williams", description: "4, 1st son", image: "demo/images/photos/b.png" },
     { id: 5, parents: [2, 3], title: "Mike Kirby", label: "Mike Kirby", description: "5, 2nd son, having 2 spouses", image: "demo/images/photos/m.png"}
 ];

/*  options.items = items;
 options.cursorItem = 2;
 options.linesWidth = 1;
 options.linesColor = "black";
 options.hasSelectorCheckbox = Primitives.common.Enabled.False;
 options.normalLevelShift = 20;
 options.dotLevelShift = 20;
 options.lineLevelShift = 20;
 options.normalItemsInterval = 10;
 options.dotItemsInterval = 10;
 options.lineItemsInterval = 10; */

}}



  
  ngOnInit()
  {
    
    
  }
  ngAfterViewInit()
  {

  
  var items = [
    { id: 1, spouses: [2], title: "Thomas Williams", label: "Thomas Williams", description: "1, 1st husband", image: "demo/images/photos/t.png" },
    { id: 2, title: "Mary Spencer", label: "Mary Spencer", description: "2, The Mary",image: "demo/images/photos/m.png" },
    { id: 3, spouses: [2], title: "David Kirby", label: "David Kirby", description: "3, 2nd Husband", image: "demo/images/photos/d.png" },
    { id: 4, parents: [1, 2], title: "Brad Williams", label: "Brad Williams", description: "4, 1st son", image: "demo/images/photos/b.png" },
    { id: 5, parents: [2, 3], title: "Mike Kirby", label: "Mike Kirby", description: "5, 2nd son, having 2 spouses", image: "demo/images/photos/m.png"}
];
    $("#basicdiagram").famDiagram(items); 
    $('button').click(function() { alert('Hi')})
    
    console.log('this works because its sent from AfterViewInit');
    

  }


}
