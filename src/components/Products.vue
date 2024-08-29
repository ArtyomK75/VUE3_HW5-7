<template>
    <div>
        <h1>Products</h1>
        <v-container>
            <v-row justify="space-between">
              <v-col>
                <v-sheet align="start" class="pa2 ma2">
                  Viewed Products
                </v-sheet>
              </v-col>
              <v-col>
                <v-sheet align="end" class="pa2 ma2">
                  {{ viewedProducts }}
                </v-sheet>
              </v-col>
            </v-row>
            <v-row>
                <v-col v-for="product in paginatedItems" :key="product.id">
                    <product :product="product"/>
                </v-col>
            </v-row>
            <v-row justify="center">
              <v-pagination
                  v-model="localCurrentPage"
                  v-model:items-per-page="productsPerPage"
                  :length="totalPages"
                  :total-visible="totalPages > 5 ? 5 : totalPages"
                  prev-icon="mdi-menu-left"
                  next-icon="mdi-menu-right"
              ></v-pagination>
            </v-row>
        </v-container>
    </div>
</template>

<script>
  import Product from "@/components/Product.vue";
  import {useProductStore} from "@/store/productStore.js";
  import {mapActions, mapState} from "pinia";

    export default {
        name: 'Products',
        components: {
            Product,
        },        
        data () {
            return {
              viewedProducts: 0,
              localCurrentPage: 1,
            }
        },
        methods: {
          ...mapActions(useProductStore, ['getProducts', 'setCurrentPage']),
        },
        mounted() {
          this.localCurrentPage = this.currentPage;
          this.getProducts();
        },
        computed: {
          ...mapState(useProductStore, ['products', 'totalPages', 'productsPerPage', 'currentPage']),
          paginatedItems() {
            this.setCurrentPage(this.localCurrentPage);
            const start = (this.currentPage - 1) * this.productsPerPage;
            const end = start + this.productsPerPage;
            return this.products.slice(start, end);
          },
        }
    };
</script>


