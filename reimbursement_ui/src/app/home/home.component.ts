import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [  
    { img: "../../assets/images/emp-1.jpg" },  
    { img: "../../assets/images/emp-2.jpg" },  
    { img: "../../assets/images/emp-3.jpg" },  
    { img: "../../assets/images/emp-4.jpg" },  
    { img: "../../assets/images/emp-5.jpg" }
  ];  

   slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
    "infinite": true,
    "autoplay": true 
  };  

}
