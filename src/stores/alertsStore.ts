import { defineStore } from "pinia";

export const useAlertsStore = defineStore("alerts", {
    state: () => {
        return {
            showSuccessAlert: false as boolean,
            showErrorAlert: false as boolean,
            alertText: "" as string,
          };
    },
  
    actions: {
      createAlert(alertType: string, alertText: string): void {
        this.alertText = alertText
        if (alertType == "success") {
            this.showSuccessAlert = true;
            setTimeout(() => {
            this.showSuccessAlert = false;
            }, 3000);
        }
        
        if (alertType == "error") {
            this.showErrorAlert = true;
            setTimeout(() => {
            this.showErrorAlert = false;
            }, 3000);
        }
      },
    },
  });