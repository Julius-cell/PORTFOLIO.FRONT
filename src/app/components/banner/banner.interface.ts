import { Image } from "src/app/shared/interfaces/resources";

export interface Banner {
    contentTypeId: string;
    title?: string;
    subTitle?: string;
    bgImage?: Image;
    bgColor?: string;
}