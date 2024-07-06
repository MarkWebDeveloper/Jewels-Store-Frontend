import type { ILoginDTO } from "@/core/auth/ILoginDTO";
import LoginService from "@/core/auth/LoginService";
import { defineStore } from "pinia";
import { useAlertsStore } from "./alertsStore";
import type { ITokenDTO } from "@/core/auth/ITokenDTO";

export const useLoginStore = defineStore("login", {
    state: () => {
        return {
            isLoggedIn: false as boolean,
            loginFormIsOpened: false as boolean,
            loggedUserId: 0 as number,
            JWTToken: {} as ITokenDTO,
            alertsStore: useAlertsStore()
          };
    },
  
    actions: {
      switchLoginForm() {
        this.loginFormIsOpened = !this.loginFormIsOpened
      },

      async login(loginDTO: ILoginDTO): Promise<void> {
        const service = new LoginService();
        try {
          const response = await service.post(loginDTO);
          this.JWTToken = response
          sessionStorage.setItem("userId", String(response.userId))
          sessionStorage.setItem("accessToken", response.accessToken)
          sessionStorage.setItem("refreshToken", response.refreshToken)
          this.loggedUserId = response.userId
          this.loginFormIsOpened = false
        } catch (error) {
          this.alertsStore.createAlert("error", "Unexpected error occurred during the login process")
        }
      },
    },
  });