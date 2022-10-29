<template>
<div>
  <Header/>
  tiện ích
</div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "index",
  head() {
    return {
      title: 'Tiện ích',
      meta: [
        {
          hid: 'description',
          name: 'introduce',
          content: 'Tiện ích'
        }
      ],
    }
  },
}
</script>

<style scoped>

</style>
