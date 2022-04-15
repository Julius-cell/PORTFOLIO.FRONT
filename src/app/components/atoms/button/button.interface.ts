import { Image } from "../image/image.interface";

export interface Button {
    name: string;
    label: string;
    icon?: Image;
    buttonType: string;
    actionType?: string;
    actionUrl?: string;
}