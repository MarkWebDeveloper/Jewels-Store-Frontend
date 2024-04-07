import axios, { AxiosError, type AxiosProxyConfig, type AxiosResponse, type RawAxiosRequestConfig } from "axios";
import type { IStripeResponse } from "./IStripeResponse";
import type { IPaymentRequest } from "./IPaymentRequest";

export default class StripeService {

    private uri: string = import.meta.env.VITE_APP_API_PAYMENTS

    async post(paymentRequest: IPaymentRequest): Promise<IStripeResponse> {

        let config: RawAxiosRequestConfig = {
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/api/v1/payments/create-payment-intent/stripe',
            headers: { 
              'Content-Type': 'application/json'
            },
          };

        try {
            const response: AxiosResponse = await axios.post(this.uri + 'create-payment-intent/stripe', paymentRequest, config)
            const status: number = response.status
            console.log(status);
            return response.data
        } catch (error: unknown) {
            throw new Error('Error with API calling: ' + error)
        }
    }
}