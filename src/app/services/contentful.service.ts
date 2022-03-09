import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import { from, Observable } from 'rxjs';
import * as contentful from 'contentful';
import { ContentfulCollection, Entry } from 'contentful';

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
