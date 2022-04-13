import { Asset } from "src/app/shared/interfaces/resources";

export interface Image {
    actionType?: string;
    actionUrl?: string;
    desktopImage?: Asset;
    mobileImage?: Asset;
}