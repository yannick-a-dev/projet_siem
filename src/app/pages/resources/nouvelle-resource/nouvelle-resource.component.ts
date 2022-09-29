import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-resource',
  templateUrl: './nouvelle-resource.component.html',
  styleUrls: ['./nouvelle-resource.component.css']
})
export class NouvelleResourceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToResource(){
    this.router.navigate(['/mainresource']);
  }

}
