import { Injectable } from '@angular/core';

import { Block, Page } from '../interfaces/page';
import { DefaultNormalizerSet } from '../sets/default-normalizer.set';

import { Asset, Entry } from 'contentful';


@Injectable({
  providedIn: 'root'
})
export class ContentfulNormalizerService {

  constructor() { }

  normalizePage(contentfulPage: Entry<any>): Page | undefined {
    if (!contentfulPage) {
      return;
    }
    const { id, contentType } = contentfulPage?.sys;
    const {
      title,
      description,
      slug,
      header,
      // template,
      footer,
      // blocks,
      // info,
    } = contentfulPage.fields;
    const contentTypeId = contentType?.sys?.id;
    return {
      id,
      contentTypeId,
      title,
      description,
      slug,
      header: header ? this.normalizeBlock(header) : null,
      footer: footer ? this.normalizeBlock(footer) : null
    }
  }

  normalizeBlock(contentfulBlock: Entry<any>): Block | any {
    if (contentfulBlock && contentfulBlock.sys && contentfulBlock.sys.contentType) {
      const { fields } = contentfulBlock;
      const block = this.normalizeDefault(fields);
      return {
        ...block,
      };
    }
  }

  normalizeDefault(newBlockInProp: any): any {
    const newBlockIn = { ...newBlockInProp };
    for (const option of DefaultNormalizerSet.keys()) {
      if (option in newBlockIn && newBlockIn[option].fields) {
        newBlockIn[option] = this.normalizeDefault(newBlockIn[option].fields);
      }
    }
    return newBlockIn;
  }
}
