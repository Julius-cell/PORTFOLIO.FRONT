import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Page } from './page.interface';
import { PageService } from 'src/app/services/page.service';
import { environment } from 'src/environments/environment';
import { ContentType } from 'src/app/shared/enums/contentType';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page: Observable<Page>;

  ContentType = ContentType; 

  constructor(
    private pageService: PageService,
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
    this.page = this.pageService.getPageBy(slug);
    this.page.subscribe(res => console.log(res));
  }

}
