<template>
  <div class="container   mx-auto overflow-hidden">
    <Header/>


    <div class="absolute  left-0 top-[6rem]  right-0">
      <VueSlickCarousel v-bind="settings">
        <div class="bg-red-500" v-for="(item,index) in arr" :key="index">
          <img :src="item" alt="" class="w-full xl:h-[33.125rem]  object-cover">
        </div>
      </VueSlickCarousel>
    </div>

    <div class="flex justify-center items-center md:mt-[55%] mt-[70%]  2xl:mt-[50%]">
      <div class=" text-[#000000] font-[500] md:text-[40px] text-[25px] border-b-2 border-b-[#165AAD] ">
        Tin Tức
      </div>
    </div>


    <div class="md:px-[10rem] md:block hidden   my-10">
      <VueSlickCarousel v-bind="settings2">
        <div class="p-3" v-for="(item,index) in 9" :key="index">
          <div class=" bd">
            <div class="w-full h-[200px] p-5">
              <img class="w-full h-full object-cover"
                   src="https://images.pexels.com/photos/13990668/pexels-photo-13990668.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                   alt="">
            </div>
            <div class="px-5 py-5">
              <div class="text-[#000000] font-[500] text-[20px] ">
                NGÀY VÀNG 10.10 2022: TẶNG KHÁCH HÀNG SIÊU ĐÃI TỚI 30%
              </div>
              <div class="font-[400] text-[16px] truncate">
                Ngày 10.10 năm 2022, tổng công ty bảo hiểm dành tặng cho khách hàng ưu đãi lên tới 30%
              </div>
            </div>
          </div>
        </div>

      </VueSlickCarousel>
    </div>

    <div class="flex justify-center flex-col items-center">
      <div class=" text-[#000000] font-[500] md:text-[35px] text-[25px] mt-3  ">
        SẢN PHẨM CỦA CHÚNG TÔI
      </div>
      <div class="border-b-2 border-b-[#165AAD] w-[160px] mb-3">

      </div>
    </div>


    <div class="px-5 md:px-[4rem]">
      <div class="grid md:grid-cols-2 mb-[5rem] grid-cols-1  mt-5 gap-5">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#165AAD]  absolute left-0 right-0 ">
      <div class="p-10 ">
        <div
          class="flex justify-center  items-center text-[#FFFFFF] font-[600] text-[22px] mb-2  md:text-[30px] ">
          LIÊN HỆ VỚI CHÚNG TÔI
        </div>


        <div class="flex justify-center items-center container mx-auto">
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


    <div class="px-5 md:px-[4rem]">
      <div class="grid md:grid-cols-2 mt-[40rem] mb-[5rem] grid-cols-1  mt-5 gap-5">

        <div class="flex flex-col  justify-around col-span-1 justify-center items-center">
          <div class="text-[#000000] font-[500]  md:text-[32px] text-[20px] ">
            BẢO HIỂM HẠNH PHÚC
          </div>
          <div class="text-[#165AAD] font-[400] md:text-[24px] text-[18px]">
            1 HỢP ĐỒNG 2 GIÁ TRỊ - BẢO HIỂM BỆNH TẬT VÀ TAI NẠN
          </div>

          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </div>
        </div>
        <div class="col-span-1 w-full overflow-hidden">
          <div>
            <img :src="imgContent1" alt="ảnh nội dung sản phẩm" class="w-full h-full object-cover">
          </div>
        </div>


      </div>
    </div>


    <div class=" md:px-[6rem] grid md:grid-cols-4  grid-cols-1 mb-[5rem] ">
      <div class="col-span-1 box-shadow mx-5 flex flex-col justify-center items-center">
        <div class="my-5 md:p-7">
          <div class="text-[#000000] text-center font-[500] text-[20px] md:text-[24px] ">
            NỘI DUNG 1
          </div>
          <div class="text-center">
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor s. <br>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet. <br>
          </div>
        </div>
      </div>

      <div class="col-span-1 my-10 md:my-0 box-shadow mx-5 flex flex-col justify-center items-center">
        <div class="my-5 md:p-7">
          <div class="text-[#000000] text-center font-[500] text-[20px] md:text-[24px] ">
            NỘI DUNG 1
          </div>
          <div class="text-center">
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor s. <br>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet. <br>
          </div>
        </div>
      </div>


      <div class="col-span-1 box-shadow mx-5 flex flex-col justify-center items-center">
        <div class="my-5 md:p-7">
          <div class="text-[#000000] text-center font-[500] text-[20px] md:text-[24px] ">
            NỘI DUNG 1
          </div>
          <div class="text-center">
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor s. <br>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet. <br>
          </div>
        </div>
      </div>

      <div class="col-span-1 md:mt-0 mt-10 box-shadow mx-5 flex flex-col justify-center items-center">
        <div class="my-5 md:p-7">
          <div class="text-[#000000] text-center font-[500] text-[20px] md:text-[24px] ">
            NỘI DUNG 1
          </div>
          <div class="text-center">
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor s. <br>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet. <br>
            Lorem ipsum dolor sit amet. <br>
          </div>
        </div>
      </div>

    </div>

    <div class="absolute right-0 left-0 ">
      <Footer/>
    </div>

  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import imgContent1 from '~/assets/images/imgContent1.svg'
import Footer from "@/components/Footer";

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import bannerHome from "~/assets/images/introduce/banner.png";

export default {
  name: 'IndexPage',
  components: {
    Header,
    Footer,
    VueSlickCarousel
  },
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
      settings: {
        "arrows": false,
        "dots": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": true,
        "cssEase": "linear"
      },
      settings2: {
        "dots": true,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "slidesToShow": 3,
        "slidesToScroll": 3,
        "touchThreshold": 5,
        "arrows": true,
      },
      arr: [
        bannerHome, bannerHome, bannerHome, bannerHome, bannerHome
      ]
    }
  },
}
</script>

<style>
.box-shadow {
  box-shadow: 0px 4px 20px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background: #FFFFFF;
}

.border-input {
  border-bottom: 1px solid #787878
}

.bd {
  background: #FFFFFF;
  box-shadow: 0px 4px 15px 3px rgba(0, 0, 0, 0.25);
}
</style>
