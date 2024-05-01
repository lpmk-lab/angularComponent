import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  Title:string="Light of Ocean in World"
  getTitle(){
    return "Light of Ocean in Luffy"
  }
  source:string="/assets/img/bora-bora-685303_1280.jpg"
}
