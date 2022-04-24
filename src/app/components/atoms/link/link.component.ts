import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from './link.interface';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() link: Link;

  constructor(private router: Router,
              private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    // console.log(this.link);
  }

  onClick(event: MouseEvent): void {
    if (this.link.actionType === 'navigate') {
      event.preventDefault();
      this.viewportScroller.scrollToAnchor(this.link.actionUrl);
    }
  }

}
