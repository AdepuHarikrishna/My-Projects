import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mgr-home',
  templateUrl: './mgr-home.component.html',
  styleUrls: ['./mgr-home.component.css']
})
export class MgrHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [  
    { img: "../../assets/images/mgr-1.jpg" },  
    { img: "../../assets/images/mgr-2.jpg" },  
    { img: "../../assets/images/mgr-3.jpg" },  
    { img: "../../assets/images/mgr-4.jpg" },  
    { img: "../../assets/images/mgr-5.jpg" }
  ];  

   slideConfig = {  
    "slidesToShow": 1,  
    "slidesToScroll": 1,  
    "dots": true,  
    "infinite": true,
    "autoplay": true 
  };  


}
