import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Message } from '../message';
import { MessageService } from '../message-service.service';

@Component({
  selector: 'app-order-chats-panel',
  templateUrl: './order-chats-panel.component.html',
  styleUrls: ['./order-chats-panel.component.css'],
})
export class OrderChatsPanelComponent implements OnInit, OnChanges {
  @Input()
  orderId?: string;

  @Input()
  publishers: string[] = [];

  private messagesByPublisher = new Map<string, Message[]>();

  conversations = new Map<string, Message[]>();

  constructor(private readonly _messageService: MessageService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['publishers']) {
      this.rebuildConversationMap();
    }
  }

  ngOnInit() {
    this.messagesByPublisher = this._messageService.getChatsForOrderId(
      this.orderId
    );
    this.rebuildConversationMap();
  }

  private rebuildConversationMap() {
    for (let key of this.messagesByPublisher.keys()) {
      this.conversations.set(key, this.messagesByPublisher.get(key));
    }
    for (let publisher of this.publishers) {
      if (!this.conversations.has(publisher)) {
        this.conversations.set(publisher, []);
      }
    }
    console.log(this.conversations);
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
