<template>
<div>
  <Header/>
  product
</div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "index",
  head() {
    return {
      title: 'sản phẩm',
      meta: [
        {
          hid: 'description',
          name: 'introduce',
          content: 'sản phẩm'
        }
      ],
    }
  },
}
</script>

<style scoped>

</style>
