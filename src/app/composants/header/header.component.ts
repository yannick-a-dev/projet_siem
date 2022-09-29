import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  clickEvent = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buttonNouveauClick(): void {
    this.clickEvent.emit();
  }
}

