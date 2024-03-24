import type { ICategory } from "../categories/ICategory";
import type { IImage } from "../images/IImage";

export interface IProduct {
    id: number,
    productName: string,
    productDescription: string,
    images: IImage[],
    price: number,
    categories: ICategory[]
}