import { Injectable } from '@angular/core';

import { ContentType } from '../enums/contentType';
import { ContentfulNormalizerService } from './contentful-normalizer.service';
import { ContentfulService } from './contentful.service';
import { Page } from '../components/page/page.interface';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContentfulCollection, Entry } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(
    private contentfulService: ContentfulService,
    private normalizerService: ContentfulNormalizerService
  ) { }

  getPageBy(slug: string): Observable<Page> {
    return this.getPageFromContentful(slug).pipe(
      map(res => {
        const entry = res?.items[0];
        return this.normalizePage(entry)
      })
    );
  }

  private getPageFromContentful(slug: string): Observable<ContentfulCollection<Entry<any>>> {
    const query = {
      content_type: ContentType.PAGE,
      'fields.slug': slug,
      include: 10,
    };
    return this.contentfulService.getEntries(query);
  }
  private normalizePage(page: Entry<any>): Page {
    return this.normalizerService.normalizePage(page);
  }

}
