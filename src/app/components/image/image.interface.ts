import { Asset } from "src/app/shared/interfaces/resources";

export interface Image {
    name: string;
    actionType?: string;
    actionUrl?: string;
    desktopImage?: Asset;
    mobileImage?: Asset;
}