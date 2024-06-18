import { defineStore } from "pinia";

export const useHeaderStore = defineStore("header", {
    state: () => {
        return {
            profileDropdownIsOpened: false as boolean,
          };
    },
  
    actions: {
      switchProfileDropdown() {
        this.profileDropdownIsOpened = !this.profileDropdownIsOpened
        console.log(this.profileDropdownIsOpened)
      }
    },
  });