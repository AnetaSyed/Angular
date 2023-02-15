import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PlayerData } from '../app.component';

@Component({
  selector: 'app-intro-page',
  templateUrl: './intro-page.component.html',
  styleUrls: ['./intro-page.component.scss']
})
export class IntroPageComponent implements OnInit {
  public userName: string;
  public emailAddress: string;
  @Output() public userDataReady = new EventEmitter<PlayerData>();

  constructor() { }

  ngOnInit(): void {
  }

  public submit(form: any, name: string, email: string) {
    this.userDataReady.emit({
      name: name,
      email: email,
    }) 
}
}