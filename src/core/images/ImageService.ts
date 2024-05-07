import axios from "axios";

export default class ImageService {

    private uri: string = import.meta.env.VITE_APP_API_IMAGES

    async getOneAsFile(filename: string): Promise<Blob> {

        let config = {
            withCredentials: true
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

        let config = {
            withCredentials: true
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

}