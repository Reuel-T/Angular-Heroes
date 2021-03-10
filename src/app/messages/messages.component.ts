import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

//displays all the messages in the message service

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //hey, a public field!
  //The messageService property must be public because you're going to bind to it in the template.
  //Angular only binds to public component properties.
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
