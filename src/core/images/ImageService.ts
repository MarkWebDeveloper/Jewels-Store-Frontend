import axios, { type AxiosRequestConfig } from "axios";

export default class ImageService {

    private uri: string = import.meta.env.VITE_APP_API_IMAGES

    async getOneAsFile(filename: string): Promise<Blob> {

        let config: AxiosRequestConfig = {
            withCredentials: true,
            maxBodyLength: Infinity,
            responseType: 'blob'
        }

        try {
            const response = await axios.get(this.uri + "/getAsResource/" + filename, config)
            const status = response.status
            console.log(status);
            return response.data           
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async post(productId: number, formData: FormData): Promise<String> {

        let config: AxiosRequestConfig = {
            withCredentials: true,
            maxBodyLength: Infinity
        }

        try {
            const response = await axios.post(this.uri + "/uploadImages/" + productId, formData, config)
            const status = response.status
            console.log(status);
            return response.data            
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

    async deleteOne(filename: string): Promise<String> {

        let config: AxiosRequestConfig = {
            withCredentials: true,
            maxBodyLength: Infinity
        }

        try {
            const response = await axios.post(this.uri + + filename, config)
            const status = response.status
            console.log(status);
            return response.data            
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

}