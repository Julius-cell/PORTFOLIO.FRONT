import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PgPage } from 'src/app/interfaces/pg-page';
import { PgPageService } from 'src/app/services/pg-page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
})
export class PageComponent implements OnInit {
  page: Observable<PgPage>;

  constructor(private pgPageService: PgPageService) { }

  ngOnInit(): void {
    this.getPageBySlug('/home');
  }

  getPageBySlug(slug: string) {
    this.page = this.pgPageService.getPageBy(slug);
  }

}
