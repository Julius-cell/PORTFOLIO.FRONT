import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from './image.interface';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() image: Image;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleClick(): void {
    window.open(this.image.actionUrl, this.image.actionType);
  }

}
