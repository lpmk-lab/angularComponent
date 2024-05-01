import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template:'<div class="alert alert-warning" [ngClass]="{ fadeOut:displayNotification}">  <p>This is Notification</p><div class="close"><button class="btn" (click)="closeNotification()">X</button></div></div>',
  styles: ["div .hello{margin:10px 0px ;padding:10px 20px;background-color:#FAD7A0;text-align:center}",
  "p{font-size:20px}",".close{float:right;margin-top:-40px;}",
  ".fadeOut{visibility:hidden;opacity:0;transition:visibility 0s 2s,opacity 2s linear;}"
]
})
export class NotificationComponent {
displayNotification:boolean=false;
closeNotification(){
this.displayNotification=true
}
}
