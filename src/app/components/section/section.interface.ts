export interface Section {
    contentTypeId: string;
    title?: string;
    subTitle?: string;
    columns: string;
    gapMobile?: number;
    gapDesktop?: number;
    bgColor?: string;
    blocks: any[];
}