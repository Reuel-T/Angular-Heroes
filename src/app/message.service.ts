import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  //string array to hold messages
  messages: string[] = [];

  //adds a message
  add(message: string) {
    this.messages.push(message);
  }

  //clears the messages array
  clear() {
    this.messages = [];
  }
}