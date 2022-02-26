import { Injectable } from '@angular/core';

import * as contentful from 'contentful';

import { environment } from 'src/environments/environment';
import { ContentfulClientApi, ContentfulCollection, createClient, Entry } from 'contentful';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = contentful.createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.accessToken,
    environment: environment.contentful.environment,
  })

  constructor() {}

  getEntries(query?: any): Observable<ContentfulCollection<Entry<any>>> {
    const promise = this.client.getEntries(query);
    return from(promise);
  }

  getEntry(id: string, query?: any): Observable<Entry<any>> {
    const promise = this.client.getEntry(id, query);
    return from(promise);
  }
}
