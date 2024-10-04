import axios, { type AxiosRequestConfig } from "axios";
import type { IProduct } from "./IProduct";
import type { IProductDTO } from "./IProductDTO";

export default class ProductService {

    private userUri: string = import.meta.env.VITE_APP_API_USER_PRODUCTS
    private adminUri: string = import.meta.env.VITE_APP_API_ADMIN_PRODUCTS
    private byCategoryUri: string = import.meta.env.VITE_APP_API_PRODUCTS_BY_CATEGORY
    private countUri: string = import.meta.env.VITE_APP_API_PRODUCTS_COUNT

    async getAll(): Promise<IProduct[]> {

        try {
            const response = await axios.get(this.userUri)
            const data: IProduct[] = await response.data
            return data
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async getOneById(id: number): Promise<IProduct> {
        try {
            const response = await axios.get(`${this.userUri}/${id}`)
            const data: IProduct = await response.data
            return data
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async count(): Promise<number> {
        try {
            const response = await axios.get(`${this.countUri}`)
            const data: number = await response.data
            return data
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async getAllByCategory(categoryName: string): Promise<IProduct[]> {
        try {
            const response = await axios.get(`${this.byCategoryUri}/${categoryName}`)
            const data: IProduct[] = await response.data
            return data
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async post(newProduct: IProductDTO): Promise<IProduct> {

        let config: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")
            }
        }

        try {
            const response = await axios.post(this.adminUri, newProduct, config)
            const status = response.status
            console.log(status);
            return response.data            
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async delete(id: number): Promise<void> {

        let config: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")
            }
        }
        
        try {
            const response = await axios.delete(`${this.adminUri}/${id}`, config)
            const status = response.status
            console.log(status);
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async put(product: IProductDTO, id: number): Promise<IProduct> {

        let config: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")
            }
        }

        try {
            const response = await axios.put(`${this.adminUri}/${id}`, product, config)
            const status = response.status
            console.log(status);
            return response.data
            
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }

    }

}