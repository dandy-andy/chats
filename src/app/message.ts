export interface Message {
  messageType: 'NOTIFICATION' | 'CHAT';
  notificationType?: 'APPROVED' | 'MODIFIED';
  orderID: string;
  customerName: string;
  orderDescription: string;
  messageText: string;
  read: boolean;
  fromUserID: string;
  fromUserName: string;
  fromMediaHouseID: string;
  fromMediaHouseName: string;
  timestamp: Date;
}
