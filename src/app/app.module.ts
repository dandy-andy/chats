import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OrderChatsPanelComponent } from './order-chats-panel/order-chats-panel.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    OrderChatsPanelComponent,
    ChatBoxComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
