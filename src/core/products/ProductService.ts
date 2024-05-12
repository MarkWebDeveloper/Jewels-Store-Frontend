import axios, { type AxiosRequestConfig } from "axios";
import type { IProduct } from "./IProduct";
import type { IProductDTO } from "./IProductDTO";

export default class ProductService {

    private uri: string = import.meta.env.VITE_APP_API_PRODUCTS

    async get(): Promise<IProduct[]> {
        let config: AxiosRequestConfig = {
            withCredentials: true,
            maxBodyLength: Infinity
        }

        try {
            const response = await axios.get(this.uri, config)
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
            const response = await axios.get(`${this.uri}/${id}`, config)
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
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await axios.post(this.uri, newProduct, config)
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
            maxBodyLength: Infinity
        }
        
        try {
            const response = await axios.delete(`${this.uri}/${id}`, config)
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
            const response = await axios.put(`${this.uri}/${id}`, product, config)
            const status = response.status
            console.log(status);
            return response.data
            
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }

    }

}