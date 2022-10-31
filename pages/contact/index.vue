<template>

  <div class="container   mx-auto">
    <Header/>

    <div class="absolute left-0 top-[6rem]  right-0 ">
      <img :src="banner" alt="" class="w-full h-auto xl:h-[33.125rem] object-cover">
    </div>

    <div class="flex justify-center items-center md:mt-[52%] mt-[66%] 2xl:mt-[45%] ">
      <div class=" text-[#000000] font-[500] md:text-[40px] text-[25px] border-b-2 border-b-[#165AAD] ">
        LIÊN HỆ VỚI CHÚNG TÔI
      </div>
    </div>

    <div class="grid md:grid-cols-3 grid-cols-1 md:px-0 md:mx-5 px-5 gap-10 my-10">
      <div class="col-span-1 box ">
        <div class="py-14">
          <div class="flex justify-between items-center  flex-col">
            <div class="mb-5">
              <svg width="39" height="41" viewBox="0 0 39 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M38.9988 30.3119V36.2099C39.001 36.7575 38.8891 37.2994 38.6704 37.8011C38.4516 38.3028 38.1307 38.7531 37.7283 39.1233C37.3259 39.4935 36.8508 39.7753 36.3334 39.9507C35.8161 40.1261 35.2679 40.1913 34.724 40.142C28.69 39.4846 22.8938 37.4173 17.8014 34.1063C13.0635 31.0878 9.04656 27.0604 6.03591 22.3102C2.72193 17.1812 0.659571 11.3417 0.0159161 5.26475C-0.033086 4.72108 0.0313581 4.17314 0.205145 3.65581C0.378931 3.13848 0.658253 2.6631 1.02533 2.25993C1.3924 1.85676 1.83918 1.53464 2.33722 1.31408C2.83527 1.09352 3.37366 0.979342 3.91813 0.978828H9.80085C10.7525 0.969438 11.6751 1.30731 12.3966 1.92946C13.1182 2.55162 13.5895 3.41561 13.7227 4.36038C13.971 6.2479 14.4314 8.10119 15.0953 9.8849C15.3591 10.5886 15.4162 11.3534 15.2598 12.0886C15.1034 12.8238 14.7401 13.4987 14.2129 14.0332L11.7225 16.5301C14.514 21.4521 18.5788 25.5274 23.488 28.3262L25.9784 25.8293C26.5115 25.3007 27.1846 24.9365 27.9179 24.7797C28.6512 24.6229 29.414 24.6801 30.1159 24.9446C31.895 25.6102 33.7434 26.0719 35.626 26.3208C36.5786 26.4556 37.4485 26.9366 38.0704 27.6725C38.6922 28.4083 39.0227 29.3477 38.9988 30.3119Z"
                  fill="#165AAD"/>
              </svg>
            </div>
            <div class="mb-5 text-[#000000] font-[500] text-[16px]">
              (+84) 0123 456 78
            </div>
            <div class="mb-5 font-[300] text-[#000000] text-[16px]">
              Hỗ trợ trực tuyến 24/7
            </div>
            <div class="mb-5 font-[500] cursor-pointer text-[#000000] text-[16px]">
              Liên hệ
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1 box">
        <div class="py-14">
          <div class="flex justify-between items-center  flex-col">
            <div class="mb-5">
              <svg width="32" height="39" viewBox="0 0 32 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30 16.0151C30 26.9324 16 36.2901 16 36.2901C16 36.2901 2 26.9324 2 16.0151C2 12.2924 3.475 8.72219 6.1005 6.08983C8.72601 3.45748 12.287 1.97864 16 1.97864C19.713 1.97864 23.274 3.45748 25.8995 6.08983C28.525 8.72219 30 12.2924 30 16.0151Z"
                  stroke="#165AAD" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                  d="M15.9997 20.694C18.577 20.694 20.6663 18.5992 20.6663 16.0151C20.6663 13.4311 18.577 11.3363 15.9997 11.3363C13.4223 11.3363 11.333 13.4311 11.333 16.0151C11.333 18.5992 13.4223 20.694 15.9997 20.694Z"
                  stroke="#165AAD" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </div>
            <div class="mb-5 text-[#000000] font-[500] text-[16px]">
              109 Cầu Giấy, Hà Nội
            </div>
            <div class="mb-5 font-[300] text-[#000000] text-[16px]">
              Thứ 2 - Thứ 6: từ 8:00 đến 17:00
            </div>
            <div class="mb-5 font-[500] cursor-pointer text-[#000000] text-[16px]">
              Xem địa chỉ
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1 box">
        <div class="py-14">
          <div class="flex justify-between items-center  flex-col">
            <div class="mb-5">
              <svg width="37" height="31" viewBox="0 0 37 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.3 1.98904H31.7C33.515 1.98904 35 3.47792 35 5.29765V25.1493C35 26.969 33.515 28.4579 31.7 28.4579H5.3C3.485 28.4579 2 26.969 2 25.1493V5.29765C2 3.47792 3.485 1.98904 5.3 1.98904Z"
                  fill="white" stroke="#165AAD" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M35 5.29764L18.5 16.8777L2 5.29764" fill="white"/>
                <path d="M35 5.29764L18.5 16.8777L2 5.29764" stroke="#165AAD" stroke-width="3.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="mb-5 text-[#000000] font-[500] text-[16px]">
              vmtjsc@example.com
            </div>
            <div class="mb-5 font-[300] text-[#000000] text-[16px]">
              Hỗ trợ mail 24/7
            </div>
            <div class="mb-5 font-[500]  cursor-pointer text-[#000000] text-[16px]">
              Gửi mail
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center flex-col items-center my-5 px-5 ">
      <div class=" text-[#000000] font-[500] md:text-[40px] text-[20px]   ">
        Đăng ký nhận thông tin mới nhất
      </div>
      <div class="border-b-4 border-b-[#165AAD] w-[160px] mb-3">

      </div>
    </div>

    <div class="grid md:grid-cols-2 grid-cols-1 gap-10 px-5 mb-[5rem]">
      <div class="col-span-1 flex flex-col justify-between">
        <div>
          <input type="text " placeholder="Họ và Tên" class=" p-3 w-full border-input outline-none "> <br>
          <input type="text" placeholder="Email" class="p-3  w-full border-input outline-none"> <br>
          <input type="text" placeholder="Điện thoại" class=" p-3 w-full border-input outline-none"> <br>
          <input type="text" placeholder="Nội dung" class=" p-3 w-full border-input outline-none"> <br>
        </div>

        <div class="flex  mt-5 md:mt-0 justify-center items-center ">
          <div
            class="w-[160px] h-[47px] font-[500] text-[20px] text-[#165AAD] cursor-pointer bg-[#FFFFFF] bd flex justify-center items-center">
            ĐĂNG KÝ
          </div>
        </div>
      </div>

      <div class="col-span-1   flex justify-center w-full  h-[324px] overflow-hidden">
        <div>
          <img src="~@/assets/images/contact/map.png" alt="" class="w-full h-full object-cover">
        </div>
      </div>
    </div>


    <div class="absolute right-0 left-0 ">
      <Footer/>
    </div>

  </div>

</template>

<script>
import banner from '~/assets/images/contact/banner.png'
import Header from "@/components/Header";

export default {
  name: "index",
  head() {
    return {
      title: 'Liên hệ',
      meta: [
        {
          hid: 'description',
          name: 'introduce',
          content: 'Liên hệ'
        }
      ],
    }
  },
  data() {
    return {
      banner: banner
    }
  },
}
</script>

<style scoped>
.box {
  background: #FFFFFF;
  box-shadow: 0px 4px 11px 2px rgba(0, 0, 0, 0.25);
}

.border-input {
  border-bottom: 1px solid #787878
}

.bd {
  border: 2px solid #165AAD;
}
</style>
