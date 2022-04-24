import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from './link.interface';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() link: Link;
  @Output() handleClick = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(event: MouseEvent): void {
    // event.preventDefault();
    // this.handleClick.emit(true);
    this.router.navigateByUrl(this.link.actionUrl);
  }

}
