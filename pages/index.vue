<template>
  <div class="container mx-auto">
    <!--    <Header/>-->
    <div class="flex justify-center items-center mt-[7rem]">
      <div class=" text-[#000000] font-[500] md:text-[40px] text-[30px] border-b-2 border-b-[#165AAD] ">
        TIN TỨC
      </div>
    </div>

    <div class="flex justify-center flex-col items-center">
      <div class=" text-[#000000] font-[500] md:text-[40px] text-[25px] mt-3  ">
        SẢN PHẨM CỦA CHÚNG TÔI
      </div>
      <div class="border-b-2 border-b-[#165AAD] w-[160px] mb-3">

      </div>
    </div>


    <div class="grid md:grid-cols-2 grid-cols-1 mx-[4rem] mt-5 gap-5">
      <div class="col-span-1">
        <div>
          <img :src="imgContent1" alt="ảnh nội dung sản phẩm">
        </div>
      </div>

      <div class="flex flex-col col-span-1 justify-center items-center">
        <div>
          BẢO HIỂM HẠNH PHÚC
        </div>
        <div>
          1 HỢP ĐỒNG 2 GIÁ TRỊ - BẢO HIỂM BỆNH TẬT VÀ TAI NẠN

        </div>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </div>
      </div>
    </div>

    <div class="bg-[#165AAD] absolute left-0 right-0">
      <div class="p-10 ">
        <div class="flex justify-center  items-center text-[#FFFFFF] font-[600] text-[25px] md:text-[40px] ">
          LIÊN HỆ VỚI CHÚNG TÔI
        </div>


         <div class="bg-[#FFFFFF] mx-[15rem]    box-shadow rounded-[20px]  ">
           <div class="p-10 ">
             <input type="text " placeholder="Họ và Tên" class=" p-2 w-full border-input outline-none "> <br>
             <input type="text" placeholder="Email" class="p-2  w-full border-input outline-none"> <br>
             <input type="text" placeholder="Điện thoại" class=" p-2 w-full border-input outline-none"> <br>
             <input type="text" placeholder="Nội dung" class=" p-2 w-full border-input outline-none"> <br>
           </div>

           <div class="flex justify-center  items-center  ">
             <button
               class="bg-[#165AAD]  mb-[3rem] mt-4 text-[#FFFFFF] font-[700] text-[20px] p-2 rounded-[20px] w-[200px] ">
               GỬI
             </button>
           </div>


       </div>
      </div>
    </div>


    <div class="grid grid-cols-2 mx-[4rem] bg-red-500 gap-5">

      <div class="flex flex-col col-span-1 justify-center items-center">
        <div>
          VỀ CHÚNG TÔI
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </div>
      </div>
      <div class="col-span-1">
        <div>
          <img :src="imgContent1" alt="ảnh nội dung sản phẩm">
        </div>
      </div>


    </div>


    <div>
      <div class=" px-[10rem] grid grid-cols-4">
        <div class="col-span-1  flex flex-col justify-center items-center">
          <div>
            NỘI DUNG 1
          </div>
          <br>
          <div>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor s. <br>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet. <br>
          </div>
        </div>
        <div class="col-span-1  flex flex-col justify-center items-center">
          <div>
            NỘI DUNG 1
          </div>
          <br>
          <div>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor s. <br>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet. <br>
          </div>
        </div>
        <div class="col-span-1  flex flex-col justify-center items-center">
          <div>
            NỘI DUNG 1
          </div>
          <br>
          <div>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor s. <br>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet. <br>
          </div>
        </div>
        <div class="col-span-1  flex flex-col justify-center items-center">
          <div>
            NỘI DUNG 1
          </div>
          <br>
          <div>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor s. <br>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet. <br>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import imgContent1 from '~/assets/images/imgContent1.svg'
import Footer from "@/components/Footer";

export default {
  name: 'IndexPage',
  data() {
    return {
      imgContent1: imgContent1
    }
  },
}
</script>

<style>
.box-shadow {
  box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.border-input {
  border-bottom: 1px solid #787878
}
</style>
