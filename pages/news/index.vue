<template>
  <div class="container mx-auto">
    <Header/>
    <div class="flex justify-center items-center mt-[8rem]">
      <div class=" text-[#000000] font-[500] md:text-[40px] text-[25px] border-b-2 border-b-[#165AAD] ">
        TIN TỨC
      </div>
    </div>


    <div>
      <div class=" mx-[5rem] border-b-2 border-b-[#D9D9D9]">
        <div class="flex md:justify-start justify-center flex-wrap my-5 md:my-0 items-center">
          <div
            class="bg-[#165AAD] cursor-pointer flex text-[#FFFFFF] font-[500] text-[20px] justify-center items-center w-[150px] h-[60px]">
            Tin tức VMT
          </div>
          <div
            class="bg-[#FFFFFF] text-[#777777] cursor-pointer  text-[20px] font-[500] flex justify-center items-center w-[150px] h-[60px]">
            Khuyến mãi
          </div>
          <div
            class="bg-[#FFFFFF] flex text-[#777777] text-[20px] cursor-pointer font-[500] justify-center items-center w-[150px] h-[60px]">
            Blog bảo hiểm
          </div>
        </div>
      </div>
    </div>


    <div class="grid relative  mb-[5rem]    h-full md:grid-cols-3 mt-[4rem] md:px-[5rem] gap-10 grid-cols-1 ">
      <div class="md:col-span-2 col-span-1   bd" v-for="(item,index) in 2" :key="index">
        <div>
          <img src="~@/assets/images/new/imgNew1.png" alt="" class="w-full h-full object-cover">
        </div>
        <div class="my-5 px-3">
          <div class="flex justify-start items-center">
            <div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                  stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 4.19995V8.99995L12.2 10.6" stroke="black" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="px-2">
              October 20, 2022
            </div>

            <div class="px-2">
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 13.8C17 14.2243 16.8314 14.6313 16.5314 14.9314C16.2313 15.2314 15.8243 15.4 15.4 15.4H2.6C2.17565 15.4 1.76869 15.2314 1.46863 14.9314C1.16857 14.6313 1 14.2243 1 13.8V2.6C1 2.17565 1.16857 1.76869 1.46863 1.46863C1.76869 1.16857 2.17565 1 2.6 1H6.6L8.2 3.4H15.4C15.8243 3.4 16.2313 3.56857 16.5314 3.86863C16.8314 4.16869 17 4.57565 17 5V13.8Z"
                  stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

            </div>

            <div>
              Tin tức VMJ
            </div>
          </div>

          <div class="text-[#2C2C2C] font-[500] text-[20px] ">
            TIN TỨC MỚI CỦA VMT SÁNG NGÀY 18/10
          </div>

          <div class="text-[#2C2C2C] font-[400] text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </div>

          <div
            class="w-[120px] my-5 hover:text-white hover:bg-[#165AAD] h-[35px] border-2 border-[#165AAD] bg-white cursor-pointer flex justify-center items-center">
            Xem thêm
          </div>


        </div>
      </div>


      <div class="col-span-1  md:absolute md:top-0 md:right-[5%] md:left-[70%]    ">
        <div class="flex w-full ">
          <div class="w-full">
            <input type="text" placeholder="Tìm kiếm... " class="w-full outline-none border p-2 border-[#777777]">
          </div>
          <div class="w-[50px] bg-[#165AAA] flex justify-center items-center">
            <i class="fa-solid fa-magnifying-glass text-white text-xl"></i>
          </div>
        </div>

        <div class="mt-5 bg-[#FFFFFF]  bd">
          <div class="p-2">
            <div class="flex">
              <div class="  text-[#000000] font-[500] md:text-[20px] text-[16px] border-b-2 border-b-[#165AAD] ">
                Tin tức mới nhất
              </div>
            </div>
          </div>
          <div v-for="(item,index) in 3" :key="index" class="grid grid-cols-2 mb-5 gap-5 px-2 place-content-stretch">
            <div class="col-span-1 bg-blue-500 w-full h-full overflow-hidden">
              <img src="~@/assets/images/new/imgNew2.png" alt="" class="w-full h-full object-fill">
            </div>
            <div class="col-span-1   w-full h-full overflow-hidden">
              <div class="font-[500] text-[15px] text-[#000000] "> Tin mới sáng ngày 22/10
              </div>
              <div>Lorem ipsum dolor sit amet,
                Lorem ipsum dolor sit amet.
              </div>
            </div>
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
import Header from "@/components/Header";

export default {
  name: "index",
  head() {
    return {
      title: 'Tin tức',
      meta: [
        {
          hid: 'description',
          name: 'introduce',
          content: 'Tin tức'
        }
      ],
    }
  },
}
</script>

<style scoped>
.bd {
  border: 0.5px solid #777777;
}
</style>
