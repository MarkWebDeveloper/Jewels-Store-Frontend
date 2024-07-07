import type { ILoginDTO } from "@/core/auth/ILoginDTO";
import LoginService from "@/core/auth/LoginService";
import { defineStore } from "pinia";
import { useAlertsStore } from "./alertsStore";
import type { ITokenDTO } from "@/core/auth/ITokenDTO";
import { useHeaderStore } from "./headerStore";

export const useLoginStore = defineStore("login", {
    state: () => {
        return {
            isLoggedIn: false as boolean,
            loginFormIsOpened: false as boolean,
            loggedUserId: 0 as number,
            loggedUserRole: "" as string,
            isUser: false as boolean,
            isAdmin: false as boolean,
            JWTToken: {} as ITokenDTO,
            alertsStore: useAlertsStore(),
            headerStore: useHeaderStore()
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
          sessionStorage.setItem("roles", response.roles)
          sessionStorage.setItem("accessToken", response.accessToken)
          sessionStorage.setItem("refreshToken", response.refreshToken)
          this.isLoggedIn = true
          this.loggedUserId = response.userId
          this.loggedUserRole = response.roles
          this.loginFormIsOpened = false
        } catch (error) {
          this.alertsStore.createAlert("error", "Unexpected error occurred during the login process")
        }
      },

      logout(): void {
        sessionStorage.clear()
        this.isLoggedIn = false
        this.loggedUserId = 0
        this.loggedUserRole = ""
        this.headerStore.userProfileDropdownIsOpened = false
        this.headerStore.adminProfileDropdownIsOpened = false
      }
    },
  });