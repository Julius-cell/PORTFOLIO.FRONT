import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRichText'
})
export class FilterRichTextPipe implements PipeTransform {

  transform(richText: string): string {
    return richText.replace(/<li><p>/g, '<li>')
      .replace(/<\/p><\/li>/g, '</li>')
      .replace(/<p><\/p>/g, '');
  }
}
