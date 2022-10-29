<template>
  <div class="container mx-auto h-screen">
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


    <div class="grid md:grid-cols-2 mb-[5rem] grid-cols-1 mx-[4rem] mt-5 gap-5">
      <div class="col-span-1">
        <div>
          <img :src="imgContent1" alt="ảnh nội dung sản phẩm">
        </div>
      </div>

      <div class="flex flex-col  justify-around col-span-1 justify-center items-center">
        <div class="text-[#000000] font-[500] md:text-[32px] text-[20px]">
          BẢO HIỂM HẠNH PHÚC
        </div>
        <div class="text-[#165AAD] font-[400] md:text-[24px] text-[18px]">
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

    <div class="bg-[#165AAD]  absolute left-0 right-0 ">
      <div class="p-10 ">
        <div
          class="flex justify-center  items-center text-[#FFFFFF] font-[600] text-[22px] mb-5 md:mb-0 md:text-[40px] ">
          LIÊN HỆ VỚI CHÚNG TÔI
        </div>


        <div class="flex justify-center items-center">
          <div class="bg-[#FFFFFF] md:w-[50%] w-[100%]    box-shadow rounded-[20px]  ">
            <div class="p-10 ">
              <input type="text " placeholder="Họ và Tên" class=" p-2 w-full border-input outline-none "> <br>
              <input type="text" placeholder="Email" class="p-2  w-full border-input outline-none"> <br>
              <input type="text" placeholder="Điện thoại" class=" p-2 w-full border-input outline-none"> <br>
              <input type="text" placeholder="Nội dung" class=" p-2 w-full border-input outline-none"> <br>
            </div>

            <div class="flex justify-center  items-center  ">
              <button
                class="bg-[#165AAD]  mb-[3rem] mt-4 text-[#FFFFFF] font-[700] md:text-[20px] text-[17px] p-2 rounded-[20px] w-[200px] ">
                GỬI
              </button>
            </div>


          </div>
        </div>
      </div>
    </div>


    <div class="grid md:grid-cols-2 mt-[40rem] mb-[5rem] grid-cols-1 mx-[4rem] mt-5 gap-5">

      <div class="flex flex-col  justify-around col-span-1 justify-center items-center">
        <div class="text-[#000000] font-[500]  md:text-[32px] text-[20px] ">
          BẢO HIỂM HẠNH PHÚC
        </div>
        <div class="text-[#165AAD] font-[400] md:text-[24px] text-[18px]">
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
      <div class="col-span-1">
        <div>
          <img :src="imgContent1" alt="ảnh nội dung sản phẩm">
        </div>
      </div>


    </div>


    <div>
      <div class=" md:px-[10rem] grid md:grid-cols-4 grid-cols-1 mb-[5rem]">
        <div class="col-span-1  flex flex-col justify-center items-center">
          <div class="text-[#000000] font-[500] text-[20px] md:text-[24px] ">
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
        <div class="col-span-1 my-3 flex flex-col justify-center items-center">
          <div class="text-[#000000] font-[500] text-[20px] md:text-[24px] ">
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
        <div class="col-span-1 md:mb-0  mb-3 flex flex-col justify-center items-center">
          <div class="text-[#000000] font-[500] text-[20px] md:text-[24px] ">
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
          <div class="text-[#000000] font-[500] text-[20px] md:text-[24px] ">
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


    <div class=" bg-red-500 absolute left-0 right-0 ">
      <Footer/>
    </div>

  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import imgContent1 from '~/assets/images/imgContent1.svg'
import Footer from "@/components/Footer";

export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Bảo hiểm hành phúc',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Bảo hiểm hành phúc'
        }
      ],
    }
  },
  data() {
    return {
      imgContent1: imgContent1,
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
