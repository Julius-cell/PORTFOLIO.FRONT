import { Injectable } from '@angular/core';

import { AssetNormalizerSet, DefaultNormalizerSet, MapNormalizerSet } from '../sets/default-normalizer.set';
import { Page } from '../components/page/page.interface';

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
      blocks,
      // template,
      footer,
      // info,
    } = contentfulPage.fields;
    const contentTypeId = contentType?.sys?.id;
    return {
      id,
      contentTypeId,
      title,
      description,
      slug,
      header: header ? this.getFields(header) : null,
      blocks: blocks ? blocks.map(contentfulBlock => this.getFields(contentfulBlock)) : [],
      footer: footer ? this.getFields(footer) : null
    }
  }

  getFields(contentfulBlock: Entry<any>): any {
    if (contentfulBlock && contentfulBlock.sys && contentfulBlock.sys.contentType) {
      const { id, contentType } = contentfulBlock.sys;
      const contentTypeId = contentType?.sys?.id;
      const { fields } = contentfulBlock;
      const { name, ...rest } = this.normalizeDefault(fields);
      return {
        contentTypeId,
        ...rest,
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

    for (const asset of AssetNormalizerSet.keys()) {
      if (asset in newBlockIn && newBlockIn[asset].fields) {
        newBlockIn[asset] = this.normalizeAsset(newBlockIn[asset]);
      }
    }

    for (const option of MapNormalizerSet.keys()) {
      if (
        option in newBlockIn &&
        typeof newBlockIn[option] !== 'string' &&
        newBlockIn[option].length > 0
      ) {
        const blockArray = newBlockIn[option];
        newBlockIn[option] = blockArray.reduce((result, elem) => {
          if (elem?.sys?.contentType) {
            result.push(this.normalizeDefault(elem.fields));
          }
          return result;
        }, []);
      }
    }

    return newBlockIn;
  }

  normalizeAsset(
    contentfulAsset: Asset
  ): { id: string | number; url: string; title: string; alt: string; contentType: string } | Asset {
    if (contentfulAsset && contentfulAsset.fields && contentfulAsset.fields.file) {
      return {
        id: contentfulAsset.sys.id,
        url: contentfulAsset.fields.file.url,
        title: contentfulAsset.fields.title,
        alt: contentfulAsset.fields.title,
        contentType: contentfulAsset?.fields?.file?.contentType,
      };
    }
    return contentfulAsset;
  }
}
