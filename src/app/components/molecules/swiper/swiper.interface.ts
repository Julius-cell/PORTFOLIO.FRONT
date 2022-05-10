export interface Swiper {
    contentTypeId: string;
    title?: string;
    slides: any[];
    slidesPerViewDesktop: number;
    slidesPerViewMobile: number;
    spaceBetween: number;
    speed: number;
    isFullWidth: boolean;
    height: string;
    loop: boolean;
}