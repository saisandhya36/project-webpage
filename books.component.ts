import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  books= [
      {'id':1,'name':'story book','description':'Harry Potter and the Philosopher','image':'../../assets/fig1.jpg'},
      {'id':1,'name':'angular','description':'A Journey to Angular Development','image':'../../assets/fig2.jpg'},
      {'id':1,'name':'politics','description':'The Politics: Aristotle philosphy on man as a political man"','image':'../../assets/fig3.jpg'},
      {'id':1,'name':'science','description':'NCERT General Science and Science and Technology for Civil Services','image':'../../assets/sfig2.jpg'},
      {'id':1,'name':'health','description':'	Health and Wellness ','image':'../../assets/hfig4.jpg'},
    ]
}
