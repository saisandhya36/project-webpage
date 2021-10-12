import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  health= [
    {'id':1,'name':'health','description':'	The Only Weight Loss And Health Book You will Ever Need ','image':'../../assets/hfig1.jpg'},
    {'id':1,'name':'health','description':'	FIX IT WITH FOOD: Superfoods to Become Super Healthy','image':'../../assets/hfig2.jpg'},
    {'id':1,'name':'health','description':'Change Your Schedule, Change Your Life','image':'../../assets/hfig3.jpg'},
    {'id':1,'name':'health','description':'	Health and Wellness ','image':'../../assets/hfig4.jpg'},
  ]



}
