import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ContentType } from '../enums/contentType';
import { PgPage } from '../interfaces/pg-page';
import { ContentfulNormalizerService } from './contentful-normalizer.service';
import { ContentfulService } from './contentful.service';

import { ContentfulCollection, Entry } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class PgPageService {

  constructor(
    private contentfulService: ContentfulService,
    private normalizerService: ContentfulNormalizerService
  ) { }

  getPageBy(slug: string): Observable<PgPage> {
    return this.getPageFromContentful(slug).pipe(
      map(res => {
        const entry = res?.items[0];
        return this.normalizePage(entry)
      })
    );
  }

  private getPageFromContentful(slug: string): Observable<ContentfulCollection<Entry<any>>> {
    const query = {
      content_type: ContentType.PG_PAGE,
      'fields.slug': slug,
      include: 10,
    };
    return this.contentfulService.getEntries(query);
  }

  private normalizePage(page: Entry<any>): PgPage {
    return this.normalizerService.normalizePage(page);
  }

}
