<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useProductsStore } from './stores/productsStore';
import { useCategoriesStore } from './stores/categoriesStore';
import { useAlertsStore } from './stores/alertsStore';
import { useImagesStore } from './stores/imagesStore';
import { useHeaderStore } from './stores/headerStore';
import { useLoginStore } from './stores/loginStore';
import axios, { type AxiosRequestConfig } from 'axios';
import type { IRefreshTokenDTO } from './core/auth/IRefreshTokenDTO';

const productsStore = useProductsStore()
const categoriesStore = useCategoriesStore()
useAlertsStore()
useImagesStore()
useHeaderStore()
useLoginStore()

productsStore.getAllProducts()
categoriesStore.getAllCategories()
// const gettingProducts = async () => { await productsStore.getAllProducts() }
// gettingProducts()

axios.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    // Check if the error is unauthorized
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // Create refresh token DTO
      let refreshToken: string = localStorage.getItem("refreshToken")!
      let refreshTokenDTO: IRefreshTokenDTO = {
        refreshToken: ""
      }
      refreshTokenDTO.refreshToken = refreshToken
      let config: AxiosRequestConfig = {
            maxBodyLength: Infinity,
            headers: {
                'Content-Type': 'application/json'
            }
        }
      try {
        const response = await axios.post('http://localhost:8080/api/v1/all/token', refreshTokenDTO, config);
        const { accessToken } = response.data;
        // Set the new access token in your state
        localStorage.setItem("userId", String(response.data.userId))
        localStorage.setItem("accessToken", response.data.accessToken)
        localStorage.setItem("refreshToken", response.data.refreshToken)
        // Then retry the original request
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return axios(originalRequest);
      } catch (err) {
        // Handle error, e.g., logout user
        console.error(err);
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);
</script>

<template>
  <div>
    <div class="wrapper">
      <nav>
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/admin-dashboard">Dashboard</RouterLink>
        <RouterLink class="link" to="/stripe-payment">Stripe</RouterLink>
      </nav>
    </div>
  </div>

  <RouterView />
</template>

<style lang="scss" scoped>
.link {
  margin-left: 2rem;
}
</style>
