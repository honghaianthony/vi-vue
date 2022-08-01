<template>
    <h1>Transactions Detail is here</h1>
    <h1>{{ $route.params.id }}</h1>
    <div v-if="transaction">
        <h3>{{ transaction.name }}</h3>
        <p>{{ transaction.price }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            transaction: null,
        };
    },
    created() {
        fetch("http://localhost:3000/transactions/" + this.$route.params.id)
            .then((response) => response.json())
            .then((data) => (this.transaction = data))
            .then(() => console.log(this.transaction));
    },
};
</script>
