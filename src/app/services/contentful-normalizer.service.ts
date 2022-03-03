import { Injectable } from '@angular/core';

import { Block, PgPage } from '../interfaces/pg-page';

import { Entry } from 'contentful';

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

  normalizeBlock(contentfulBlock: Entry<any>): Block {
    if (contentfulBlock && contentfulBlock.sys && contentfulBlock.sys.contentType) {
      const { id, contentType } = contentfulBlock.sys;
      const contentTypeId = contentType?.sys?.id;
      const { fields } = contentfulBlock;
      let block;
      return {
        id,
        contentTypeId,
        contentType: contentTypeId,
        ...block,
      };
    }
  }
}
