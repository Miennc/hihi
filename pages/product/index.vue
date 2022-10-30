<template>
  <div class="container mx-auto">
    <Header/>
    <div class="absolute left-0 top-[6rem]  right-0 ">
      <img src="~@/assets/images/introduce/banner.png" alt="" class="w-full h-auto xl:h-[33.125rem] object-cover">
    </div>

    <div class="flex justify-center items-center md:mt-[52%] mt-[66%]  2xl:mt-[45%]">
      <div class=" text-[#000000] font-[500] md:text-[40px] text-[25px] border-b-2 border-b-[#165AAD] ">
        SẢN PHẨM
      </div>
    </div>

    <div class="text-center my-5 text-[#000000] font-[500] md:text-[20px] text-[16px]">
      BẢO HIỂM HẠNH PHÚC
    </div>

    <div class="text-center text-[#165AAD] font-[400] md:text-[18px] text-[16px]">
      1 HỢP ĐỒNG 2 GIÁ TRỊ - BẢO HIỂM <br>
      BỆNH TẬT VÀ TAI NẠN
    </div>


    <div tabindex="0" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
      <div class="collapse-title text-xl font-medium">
        Focus me to see content
      </div>
      <div class="collapse-content">
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </div>
    </div>

    <div tabindex="1" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
      <div class="collapse-title text-xl font-medium">
        Focus me to see content
      </div>
      <div class="collapse-content">
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </div>
    </div>

    <div tabindex="2" class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
      <div class="collapse-title text-xl font-medium">
        Focus me to see content
      </div>
      <div class="collapse-content">
        <p>tabindex="0" attribute is necessary to make the div focusable</p>
      </div>
    </div>



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
  }
}
</script>

<style scoped>

</style>
