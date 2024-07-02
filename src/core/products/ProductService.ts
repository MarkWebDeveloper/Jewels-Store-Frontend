import axios, { type AxiosRequestConfig } from "axios";
import type { IProduct } from "./IProduct";
import type { IProductDTO } from "./IProductDTO";

export default class ProductService {

    private userUri: string = import.meta.env.VITE_APP_API_USER_PRODUCTS
    private adminUri: string = import.meta.env.VITE_APP_API_ADMIN_PRODUCTS

    async get(): Promise<IProduct[]> {
        let config: AxiosRequestConfig = {
            withCredentials: true,
            maxBodyLength: Infinity
        }

        try {
            const response = await axios.get(this.userUri, config)
            const data: IProduct[] = await response.data
            return data
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async getOneById(id: number): Promise<IProduct> {
        let config: AxiosRequestConfig = {
            withCredentials: true,
            maxBodyLength: Infinity
        }

        try {
            const response = await axios.get(`${this.userUri}/${id}`, config)
            const data: IProduct = await response.data
            return data
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async post(newProduct: IProductDTO): Promise<IProduct> {

        let config: AxiosRequestConfig = {
            withCredentials: true,
            maxBodyLength: Infinity,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
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
            withCredentials: true,
            maxBodyLength: Infinity,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("accessToken")
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
            withCredentials: true,
            maxBodyLength: Infinity,
            headers: {
                'Content-Type': 'application/json'
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