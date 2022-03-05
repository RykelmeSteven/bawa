import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-caroussel-home',
  templateUrl: './panel-home.component.html',
  styleUrls: ['./panel-home.component.css']
})
export class CarousselHomeComponent implements OnInit {
 
	
	slides = [
    {'image': '../../../assets/images/restaurantImg.jpg'}, 
    {'image': '../../../assets/images/restaurantImg.jpg'},
    {'image': '../../../assets/images/restaurantImg.jpg'}, 
    {'image': '../../../assets/images/restaurantImg.jpg'}, 
    {'image': '../../../assets/images/restaurantImg.jpg'}
  ];
  constructor() { 
 
  }

  ngOnInit() {
  }

}
