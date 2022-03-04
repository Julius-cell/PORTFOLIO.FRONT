import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { PgPage } from 'src/app/interfaces/pg-page';
import { PgPageService } from 'src/app/services/pg-page.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
})
export class PageComponent implements OnInit {
  page: Observable<PgPage>;

  constructor(
    private pgPageService: PgPageService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscribeToPage();
  }

  subscribeToPage(): void {
    this.route.params.subscribe((params) => {
      const slugRequest = this.buildSlug(params);
      this.getPageBySlug(slugRequest);
    });
  }

  buildSlug(params): string {
    let slug = Object.keys(params).reduce((totalSlug, slug) => {
      if (slug) {
        totalSlug = `${totalSlug}/${params[slug]}`;
      }
      return totalSlug;
    }, '');
    slug = slug ? slug : environment.slugHome;
    return slug;
  }

  getPageBySlug(slug: string) {
    this.page = this.pgPageService.getPageBy(slug);
  }

}
