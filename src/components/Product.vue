<template>
    <v-card 
        class="mx-auto"
        max-width="344"
    >
        <v-img
            :src="product.image"
            height="250px"
            cover
        >
        </v-img>
        <v-card-title>
            {{ product.title }}
        </v-card-title>

        <v-card-subtitle>
            {{ product.category }}
        </v-card-subtitle>

        <v-card-actions>
            <v-btn
                color="orange-lighten-2"
                variant="text"
            >
                Explore
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="show = !show"
            >
                More
            </v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                    {{ product.description }}
                </v-card-text>
            </div>
        </v-expand-transition>


    </v-card>
</template>

<script>
    export default {
        name: 'Product',
        props: ['product'],
        methods: {
        },
        data() {
            return {
                show: false,
            }
        }
    }
</script>

<style>
    .red {
        color: red;
    }
</style>