import { Image } from "../image/image.interface";

export interface Banner {
    contentTypeId: string;
    title?: string;
    subTitle?: string;
    bgImage?: Image;
    bgColor?: string;
}