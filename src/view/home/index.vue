<template>
  <div>
    <div @click="pageTo('/cart')">购物车</div>
    <div @click="pageTo('/goods')">商品</div>
  </div>
</template>

<script>
export default {
  methods: {
    pageTo(path) {
      this.$router.push({ path: path })
    }
  }
}
</script>
