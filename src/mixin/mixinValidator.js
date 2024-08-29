export const mixinValidator = {
    methods: {
        validateEmailInMixin(email) {
            return /\S+@\S+\.\S+/.test(email);
        }
    },
}