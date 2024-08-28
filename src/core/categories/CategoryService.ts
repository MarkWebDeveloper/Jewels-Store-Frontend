import axios from "axios";
import type { ICategory } from "./ICategory";

export default class CategoryService {

    private uri = import.meta.env.VITE_APP_API_CATEGORIES

    async getAll(): Promise<ICategory[]> {
        try {
            const response = await axios.get(this.uri)
            const data: ICategory[] = await response.data
            return data
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }

}