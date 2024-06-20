import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
    state: () => {
        return {
            isLoggedIn: false as boolean,
          };
    },
  
    actions: {
      switchLogin() {
        this.isLoggedIn = !this.isLoggedIn
      }
    },
  });