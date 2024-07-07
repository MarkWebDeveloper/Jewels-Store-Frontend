import { defineStore } from "pinia";

export const useHeaderStore = defineStore("header", {
    state: () => {
        return {
            adminProfileDropdownIsOpened: false as boolean,
            userProfileDropdownIsOpened: false as boolean,
            loginDropdownIsOpened: false as boolean
          };
    },
  
    actions: {
      switchDropdown(stateKey: string) {
        if (stateKey === 'user-profile') {
          this.userProfileDropdownIsOpened = !this.userProfileDropdownIsOpened;
        } else if (stateKey === 'admin-profile') {
          this.adminProfileDropdownIsOpened = !this.adminProfileDropdownIsOpened;
        } else if (stateKey === 'login') {
          this.loginDropdownIsOpened = !this.loginDropdownIsOpened;
        }
      }
    },
  });