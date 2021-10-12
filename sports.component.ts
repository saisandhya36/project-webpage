import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  sports = [
    {'id':1,'name':'sports','description':'Book of Rules of Games and Sports First Edition','image':'../../assets/spfig1.jpg'},
    {'id':1,'name':'sports','description':'	The Champions Mind: How Great Athletes Think, Train, and Thrive','image':'../../assets/spfig2.jpg'},
    {'id':1,'name':'sports','description':'	Books Sports ','image':'../../assets/spfig3.jpg'},
    {'id':1,'name':'sports','description':'	Sport Leadership in the 21st Century ','image':'../../assets/spfig4.jpg'},
  ]
 

}
