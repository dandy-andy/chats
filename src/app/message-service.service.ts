import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  getChatList(): Message[] {
    // PRISA prototype data
    return allMessages.filter((m) => m.messageType === 'CHAT');
  }

  getChatsForOrderId(orderId: string): Map<string, Message[]> {
    const chats = allMessages.filter(
      (m) => m.messageType === 'CHAT' && m.orderID === orderId
    );
    return chats.reduce(
      (map, message) =>
        map.set(message.fromMediaHouseName, [
          ...(map.get(message.fromMediaHouseName) || []),
          message,
        ]),
      new Map()
    );
  }

  getNotifications(): Message[] {
    // PRISA prototype data
    return allMessages.filter((m) => m.messageType === 'NOTIFICATION');
  }
}

const allMessages: Message[] = [
  {
    messageType: 'NOTIFICATION',
    notificationType: 'APPROVED',
    orderID: '900126',
    customerName: 'Acme Co',
    orderDescription: 'Summer Campaign',
    messageText: 'Reservation request has been approved',
    read: false,
    fromUserID: '',
    fromUserName: '',
    fromMediaHouseID: 'MH1',
    fromMediaHouseName: 'Mediagroup 1',
    timestamp: new Date('2022-07-26T08:26:00Z'),
  },
  {
    messageType: 'NOTIFICATION',
    notificationType: 'APPROVED',
    orderID: '900127',
    customerName: 'Wiznu Oy',
    orderDescription: 'Summer Campaign',
    messageText: 'Reservation request has been approved',
    read: false,
    fromUserID: '',
    fromUserName: ' Tables',
    fromMediaHouseID: 'MH1',
    fromMediaHouseName: 'Mediagroup 1',
    timestamp: new Date('2022-07-25T05:40:00Z'),
  },
  {
    messageType: 'NOTIFICATION',
    notificationType: 'MODIFIED',
    orderID: '900128',
    customerName: 'Melbourne Music',
    orderDescription: 'Brass Summer Sale',
    messageText: 'Order has been modified',
    read: true,
    fromUserID: 'FREDSMITH',
    fromUserName: 'Fred Smith',
    fromMediaHouseID: 'MH1',
    fromMediaHouseName: 'Mediagroup 4',
    timestamp: new Date('2022-07-21T09:07:00Z'),
  },
  {
    messageType: 'CHAT',
    orderID: '900126',
    customerName: 'Acme Co',
    orderDescription: 'St Kilda New Store Opening',
    messageText:
      'Hi Andrew!\n\nThis order request has been approved and reserved for 20th July 2022.\n\nBest Regards,\nFred.',
    read: false,
    fromUserID: '',
    fromUserName: 'Jack Black',
    fromMediaHouseID: 'MH1',
    fromMediaHouseName: 'Mediagroup 2',
    timestamp: new Date('2022-07-26T08:26:00Z'),
  },
  {
    messageType: 'CHAT',
    orderID: '900127',
    customerName: 'Melbourne Music',
    orderDescription: 'Summer Campaign',
    messageText:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    read: false,
    fromUserID: '',
    fromUserName: 'Dianne Fronk',
    fromMediaHouseID: 'MH1',
    fromMediaHouseName: 'Mediagroup 1',
    timestamp: new Date('2022-07-25T05:17:00Z'),
  },
  {
    messageType: 'CHAT',
    orderID: '900127',
    customerName: 'Melbourne Music',
    orderDescription: 'Summer Campaign',
    messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    read: false,
    fromUserID: '',
    fromUserName: 'Julie Anderson',
    fromMediaHouseID: 'MH1',
    fromMediaHouseName: 'Mediagroup 1',
    timestamp: new Date('2022-07-25T05:15:00Z'),
  },
  {
    messageType: 'CHAT',
    orderID: '900127',
    customerName: 'Melbourne Music',
    orderDescription: 'Summer Campaign',
    messageText:
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    read: false,
    fromUserID: '',
    fromUserName: 'Rachelle Lemar',
    fromMediaHouseID: 'MH1',
    fromMediaHouseName: 'Mediagroup 1',
    timestamp: new Date('2022-07-25T05:13:00Z'),
  },
  {
    messageType: 'CHAT',
    orderID: '900127',
    customerName: 'Melbourne Music',
    orderDescription: 'Summer Campaign',
    messageText:
      'voluptate velit esse cillum dolore eu fugiat nulla pariatur quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    read: false,
    fromUserID: '',
    fromUserName: 'Andrew Kennedy',
    fromMediaHouseID: 'MH1',
    fromMediaHouseName: 'Mediagroup 1',
    timestamp: new Date('2022-07-25T05:10:00Z'),
  },
  {
    messageType: 'CHAT',
    orderID: '900127',
    customerName: 'Melbourne Music',
    orderDescription: 'Summer Campaign',
    messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    read: false,
    fromUserID: '',
    fromUserName: 'Bobby Tables',
    fromMediaHouseID: 'MH1',
    fromMediaHouseName: 'Mediagroup 1',
    timestamp: new Date('2022-07-25T05:00:00Z'),
  },

  {
    messageType: 'CHAT',
    orderID: '900127',
    customerName: 'Melbourne Music',
    orderDescription: 'Summer Campaign',
    messageText:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    read: false,
    fromUserID: '',
    fromUserName: 'Fred Nerk',
    fromMediaHouseID: 'MH2',
    fromMediaHouseName: 'Mediagroup 2',
    timestamp: new Date('2022-07-25T05:17:00Z'),
  },
  {
    messageType: 'CHAT',
    orderID: '900127',
    customerName: 'Melbourne Music',
    orderDescription: 'Summer Campaign',
    messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    read: false,
    fromUserID: '',
    fromUserName: 'Andrew Kennedy',
    fromMediaHouseID: 'MH2',
    fromMediaHouseName: 'Mediagroup 2',
    timestamp: new Date('2022-07-25T05:15:00Z'),
  },
  {
    messageType: 'CHAT',
    orderID: '900127',
    customerName: 'Melbourne Music',
    orderDescription: 'Summer Campaign',
    messageText:
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    read: false,
    fromUserID: '',
    fromUserName: 'Fred Nerk',
    fromMediaHouseID: 'MH2',
    fromMediaHouseName: 'Mediagroup 2',
    timestamp: new Date('2022-07-25T05:13:00Z'),
  },
  {
    messageType: 'CHAT',
    orderID: '900127',
    customerName: 'Melbourne Music',
    orderDescription: 'Summer Campaign',
    messageText: 'voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    read: false,
    fromUserID: '',
    fromUserName: 'Andrew Kennedy',
    fromMediaHouseID: 'MH2',
    fromMediaHouseName: 'Mediagroup 2',
    timestamp: new Date('2022-07-25T05:10:00Z'),
  },
  {
    messageType: 'CHAT',
    orderID: '900127',
    customerName: 'Melbourne Music',
    orderDescription: 'Summer Campaign',
    messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    read: false,
    fromUserID: '',
    fromUserName: 'Peta Williams',
    fromMediaHouseID: 'MH2',
    fromMediaHouseName: 'Mediagroup 2',
    timestamp: new Date('2022-07-25T05:00:00Z'),
  },

  {
    messageType: 'CHAT',
    orderID: '900127',
    customerName: 'Melbourne Music',
    orderDescription: 'Summer Campaign',
    messageText: 'voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    read: false,
    fromUserID: '',
    fromUserName: 'Andrew Kennedy',
    fromMediaHouseID: 'MH3',
    fromMediaHouseName: 'Mediagroup 3',
    timestamp: new Date('2022-07-25T05:10:00Z'),
  },
  {
    messageType: 'CHAT',
    orderID: '900127',
    customerName: 'Melbourne Music',
    orderDescription: 'Summer Campaign',
    messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    read: false,
    fromUserID: '',
    fromUserName: 'Vivianne Rose',
    fromMediaHouseID: 'MH3',
    fromMediaHouseName: 'Mediagroup 3',
    timestamp: new Date('2022-07-25T05:00:00Z'),
  },

  {
    messageType: 'CHAT',
    orderID: '900128',
    customerName: 'Acme Co',
    orderDescription: 'Summer Campaign',
    messageText:
      'Hi Andrew!\n\nThis order request has been approved and reserved for 20th July 2022.\n\nBest Regards,\nFred.',
    read: true,
    fromUserID: '',
    fromUserName: 'Fred Smith',
    fromMediaHouseID: 'MH1',
    fromMediaHouseName: 'Mediagroup 4',
    timestamp: new Date('2022-07-21T09:07:00Z'),
  },
  {
    messageType: 'CHAT',
    orderID: '900129',
    customerName: 'Widgets Co',
    orderDescription: 'New Summer Campaign',
    messageText:
      'Hi Andrew!\n\nThis order request has been approved and reserved.\n\nBest Regards,\nJane.',
    read: true,
    fromUserID: '',
    fromUserName: 'Jane Citizen',
    fromMediaHouseID: 'MH1',
    fromMediaHouseName: 'Mediagroup 2',
    timestamp: new Date('2022-07-20T14:12:31Z'),
  },
  {
    messageType: 'CHAT',
    orderID: '900130',
    customerName: 'Media Buzz Corp',
    orderDescription: 'Summer Sale',
    messageText: "That's great!",
    read: true,
    fromUserID: '',
    fromUserName: 'Andrew Kennedy',
    fromMediaHouseID: '',
    fromMediaHouseName: 'Agency 1',
    timestamp: new Date('2022-07-10T05:00:00Z'),
  },
];
