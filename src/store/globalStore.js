import {defineStore} from "pinia";

export const useGlobalStore = defineStore('globalStore', {
    state: () => ({
        themeState: 'light'
    }),
    getters: {
        getThemeState: (state) => state.themeState
    },
    actions: {
        changeThemeState() {
            this.themeState = this.themeState === 'light' ? 'dark' : 'light';
        }
    },
})

export default useGlobalStore;
