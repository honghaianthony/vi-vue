<template>
    <h1>Transaction is here</h1>
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
        <router-link :to="`/transactions/${transaction.id}`">{{
            transaction.name
        }}</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            transactions: [],
        };
    },
    created() {
        fetch("http://localhost:3000/transactions")
            .then((response) => response.json())
            .then((data) => (this.transactions = data));
    },
};
</script>
