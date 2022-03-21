import { Size } from "../enums/sizes";

export const getSizes = (size: any): string => {
    switch (size) {
        case Size.SMALL:
          return '20px';
        case Size.MEDIUM:
          return '50px';
        case Size.LARGE:
          return '100px';
    }
};
