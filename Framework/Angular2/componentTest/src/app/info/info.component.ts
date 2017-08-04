import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
    <h3>{{title}}</h3>
    <div class="info_input">
    <div class="name">Name<br><input type="text" name="name" [(ngModel)]="name"></div>
    <div class="phone">Phone<br><input type="text" name="phone" [(ngModel)]="phone"></div>
    <div class="email">E-mail<br><input type="text" name="email" [(ngModel)]="email"></div>
    </div>
    <div class="info_view">
    <div class="name"><span>이름</span><br>{{name}}</div>
    <div class="phone"><span>전화 번호</span><br>{{phone}}</div>
    <div class="email"><span>이메일</span><br>{{email}}</div>
    </div>`,
    styleUrls : [`./info.component.css`]
})
export class HelloComponent {
  title = 'My Info';  
}