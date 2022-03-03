import { Injectable } from '@angular/core';
import { Entry } from 'contentful';
import { PgPage } from '../interfaces/pg-page';

@Injectable({
  providedIn: 'root'
})
export class ContentfulNormalizerService {

  constructor() { }

  normalizePage(contentfulPage: Entry<any>): PgPage | undefined {
    if (!contentfulPage) {
      return;
    }
    const { id, contentType } = contentfulPage?.sys;
    const {
      title,
      description,
      slug,
      // header,
      // template,
      // footer,
      // blocks,
      // info,
    } = contentfulPage.fields;
    const contentTypeId = contentType?.sys?.id;
    return {
      id,
      contentTypeId,
      title,
      description,
      slug
    }
  }
}
