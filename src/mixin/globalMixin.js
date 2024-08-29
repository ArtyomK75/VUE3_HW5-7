export const globalMixin = {
    data() {
        return {
            mocTestMixinGlobalData: 'MOC test mixin',
        }
    },
    methods: {
        greeting() {
            console.log("Component was initialized: global mixin");
        }
    },
    created() {
        this.greeting();
    },
    beforeUnmount() {
        console.log("Component was unmounted: global mixin");
    }
}