import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemsMenu = [
    { nome: "Home", link: "" },
    { nome: "Locais", link: "" },
    
    { nome: "Rolês de Hoje", link: "" },
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
