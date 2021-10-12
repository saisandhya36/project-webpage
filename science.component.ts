import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  science= [
    {'id':1,'name':'science','description':'Black Holes: The Reith Lectures','image':'../../assets/sfig1.jpg'},
    {'id':1,'name':'science','description':'NCERT General Science and Science and Technology for Civil Services','image':'../../assets/sfig2.jpg'},
    {'id':1,'name':'science','description':'General Science & Technology for Civil Services','image':'../../assets/sfig3.jpg'},
    {'id':1,'name':'science','description':'The Brain - The Story Of You','image':'../../assets/sfig4.jpg'},
  ]

}
