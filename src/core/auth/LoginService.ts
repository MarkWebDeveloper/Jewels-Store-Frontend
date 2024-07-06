import axios, { type AxiosRequestConfig } from "axios";
import type { ILoginDTO } from "./ILoginDTO";
import type { ITokenDTO } from "./ITokenDTO";

export default class LoginService {

    private uri: string = import.meta.env.VITE_APP_API_LOGIN

    async post(loginDTO: ILoginDTO): Promise<ITokenDTO> {

        let config: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await axios.post(this.uri, loginDTO, config)
            const status = response.status
            console.log(status);
            console.log(response.data)
            return response.data            
        } catch (error) {
            throw new Error('Error with API calling: ' + error)
        }
    }
}