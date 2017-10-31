import { Component,OnInit,AfterViewInit } from '@angular/core';
import * as Primitives from 'a01/primitives.min.js';
import * as $ from 'jquery';

declare var Primitives:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {


  
  ngOnInit()
  {
   
    
  }
  ngAfterViewInit()
  {
    $( 'button' ).click(function() {
      alert( "Initializing chart" );
    });

   
     
console.log('This is after window load ');
  }


}
