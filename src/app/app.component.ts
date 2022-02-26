import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ContentfulService } from './services/contentful.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private contentful: ContentfulService) {}

  ngOnInit() {
    this.getEntry();
    this.getEntries();
  }

  getEntries(): void {
    this.contentful.getEntries().subscribe(res => {
      console.log(res);
    });
  }

  getEntry(): void {
     this.contentful.getEntry('4YucwrfEbB7sOt2izYO0o7').subscribe(res => {
      console.log(res);
    });
  }

}
