import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  politics= [
    {'id':1,'name':'politics','description':'Global Politics | First Edition | By Pearson','image':'../../assets/pfig1.jpg'},
    {'id':1,'name':'polytics','description':'Indian Political System 4Th Edition by Roy and Singh, PEARSON INDIA','image':'../../assets/pfig2.jpg'},
    {'id':1,'name':'politics','description':'The Politics: Aristotle philosphy on man as a political man"','image':'../../assets/fig3.jpg'},
    {'id':1,'name':'politics','description':'Not Just a Civil Servant Paperback"','image':'../../assets/pfig4.jpg'},
  ]

}
