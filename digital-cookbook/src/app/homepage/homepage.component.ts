import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent implements OnInit{


  //practice using an event listener to log to the console.
  ngOnInit() {
    const button = document.querySelector('button');
    if (button) {
      button.addEventListener('click', this.sayHello);
    }
  }
  sayHello() {
    console.log("Hello!");
  }
  
}