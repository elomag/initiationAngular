import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  persone={
    userName:"francaine et alpha ",
  }
  constructor() { }

  ngOnInit(): void {
  }
  contact(f:any){
this.persone = f
  }
}
