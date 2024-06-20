import { defineStore } from "pinia";

export const useHeaderStore = defineStore("header", {
    state: () => {
        return {
            profileDropdownIsOpened: false as boolean,
            loginDropdownIsOpened: false as boolean
          };
    },
  
    actions: {
      switchDropdown(stateKey: string) {
        if (stateKey === 'profile') {
          this.profileDropdownIsOpened =!this.profileDropdownIsOpened;
        } else if (stateKey === 'login') {
          this.loginDropdownIsOpened =!this.loginDropdownIsOpened;
        }
      }
    },
  });