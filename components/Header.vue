<template>
  <div class=" bg-[#FFFFFF]   shadow-box absolute top-0 right-0 left-0">
    <div class="grid grid-cols-12 p-3   px-[5rem]">
      <div class="col-span-2  flex  items-center">
        <div>
          <img :src="logo" alt="">
        </div>
      </div>

      <div class="col-span-7  flex font-[500] text-[#000000]  justify-center items-center">
        <div class="px-2 border-b-2  cursor-pointer border-b-[#165AAD]">TRANG CHỦ</div>
        <div class="px-2 cursor-pointer">GIỚI THIỆU</div>
        <div class="px-2 cursor-pointer">SẢN PHẨM </div>
        <div class="px-2 cursor-pointer">TIN TỨC </div>
        <div class="px-2 cursor-pointer">lIÊN HỆ</div>
        <div class="px-2 cursor-pointer">TIỆN ÍCH</div>
        <div class="px-2 cursor-pointer">QUẢNG CÁO</div>
      </div>
      <div class="col-span-3 flex justify-end  items-center ">
        <button class=" bg-[#165AAD] px-4 py-2 text-white  rounded-md mr-2">Đăng nhập</button>
        <button class=" bg-[#FFFFFF] bd text-[#000000] px-4 py-2 rounded-md">Đăng ký</button>
      </div>

    </div>


  </div>
</template>

<script>
import logo from '~/assets/images/logo.svg'

export default {
  name: "Header",
  data() {
    return {
      logo: logo
    }
  }
}
</script>

<style scoped>
.shadow-box {
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
}
.bd {
  border: 1px solid #000000;
}
</style>
