import { Injectable } from '@angular/core';
import { ContentfulCollection, Entry } from 'contentful';
import { BehaviorSubject, Observable, Subscriber, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { ContentType } from '../enums/contentType';
import { PgPage } from '../interfaces/pg-page';
import { ContentfulNormalizerService } from './contentful-normalizer.service';
import { ContentfulService } from './contentful.service';

@Injectable({
  providedIn: 'root'
})
export class PgPageService {
  // page = new BehaviorSubject<any>({});

  constructor(
    private contentfulService: ContentfulService,
    private normalizerService: ContentfulNormalizerService
  ) { }

  getPageBy(slug: string): Observable<PgPage> {
    return this.getPageFromContentful(slug).pipe(
      map(res => {
        console.log('from here');
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
