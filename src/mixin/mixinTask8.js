export const mixinTask8 = {
    data() {
        return {
            mocTestMixinData: 'MOC test mixin',
        }
    },
    methods: {
        greeting() {
            console.log("Component was initialized");
        }
    },
    created() {
        this.greeting();
    },
    beforeUnmount() {
        console.log("Component was unmounted");
    }
}