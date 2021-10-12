import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  computers= [
    {'id':1,'name':'Angular','description':'Books Learning Angular For .net Developers','image':'../../assets/cfig1.jpg'},
    {'id':1,'name':'Javascript','description':'AVASCRIPT MADE EASY: A Modern Introduction to Javascript from beginning to Intermediate level','image':'../../assets/cfig2.jpg'},
    {'id':1,'name':'c#','description':'Beginning C# Object-Oriented Programming','image':'../../assets/cfig3.jpg'},
    {'id':1,'name':'software Testing','description':'Software Testing : Academic Achiever','image':'../../assets/cfig4.jpg'},
  ]


}
