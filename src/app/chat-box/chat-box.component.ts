import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  @Input()
  messages: Message[] = [];

  currentUser: string = "Andrew Kennedy";

  constructor() { }

  ngOnInit() {
  }

  getAvatarText(message: Message): string {
    const names = (message.fromUserName || '').split(' ');
    return (
      names[0].charAt(0) +
      (names.length > 1 ? names[names.length - 1].charAt(0) : '')
    );
  }

  getAvatarColors(message: Message) {
    // TODO choose from 'nice' palette?
    const name = message.fromUserName || ' ';
    const hue = Math.round(
      ((name[0].toUpperCase().charCodeAt(0) - 65) / 26) * 360
    );
    return {
      'background-color': `hsl(${hue}, 100%, 90%)`,
      color: 'black',
    };
  }

}