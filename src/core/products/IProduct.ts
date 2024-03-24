import type { ICategory } from "../categories/ICategory";

export interface IProduct {
    id: number,
    productName: string,
    productDescription: string,
    images: object[],
    price: number,
    categories: ICategory[]
}