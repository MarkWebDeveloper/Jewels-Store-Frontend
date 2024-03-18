import axios from "axios";
import type { IProduct } from "./IProduct";
import type { IProductDTO } from "./IProductDTO";

export default class ProductService {

    private uri = import.meta.env.VITE_APP_API_PRODUCTS

    async get(): Promise<IProduct[]> {
        try {
            const response = await axios.get(this.uri)
            const data: IProduct[] = await response.data
            return data
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async post(newProduct: IProductDTO): Promise<void> {

        try {
            const response = await axios.post(this.uri, newProduct)
            const status = response.status
            console.log(status);            
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async delete(id: number): Promise<void> {

        const uri = `${this.uri}/${id}`
        
        try {
            const response = await axios.delete(uri)
            const status = response.status
            console.log(status);
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async put(Product: IProductDTO): Promise<void> {

        const uri = `${this.uri}/${Product.id}`

        try {
            const response = await axios.put(uri, Product)
            const status = response.status
            console.log(status);
            
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }

    }

}