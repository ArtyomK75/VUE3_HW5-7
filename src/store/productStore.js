import {defineStore} from "pinia";
import axiosInstance from "@/../services/axios.js";


export const useProductStore = defineStore('product', {
    state: () => ({
        productsState: [],
        totalPagesState: 0,
        productsPerPageState: 6,
        currentPageState: 1,
    }),
    getters: {
        products: (state) => state.productsState,
        totalPages: (state) => state.totalPagesState,
        productsPerPage: (state) => state.productsPerPageState,
        currentPage: (state) => state.currentPageState,
    },
    actions: {
        async getProducts() {
            try {
                const response = await axiosInstance.get('/products');
                this.productsState = response.data;
                this.totalPagesState = Math.ceil(this.productsState.length / this.productsPerPageState);
            } catch (error) {
                console.log(error);
            }
        },
        setCurrentPage(page) {
            this.currentPageState = page;
            },

    },
})

