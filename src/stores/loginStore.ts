import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
    state: () => {
        return {
            isLoggedIn: false as boolean,
            loginFormIsOpened: false as boolean
          };
    },
  
    actions: {
      switchLoginForm() {
        this.loginFormIsOpened = !this.loginFormIsOpened
      }
    },
  });