<template>
  <div class="bg-[#FFFFFF]   shadow-box absolute top-0 right-0 left-0  ">
    <div class="  container md:block hidden mx-auto ">
      <div class="grid grid-cols-12 p-3   px-[5rem]">
        <div class="col-span-2  flex  items-center">
          <div>
            <img :src="logo" alt="">
          </div>
        </div>

        <div class="col-span-7  flex font-[500] text-[#000000]  justify-center items-center">
          <NuxtLink to="/">
            <div @click="active(0)" :class="{active: active_el==0 }"
                 class="px-2 hover:text-[#165AAD]  cursor-pointer ">TRANG CHỦ
            </div>
          </NuxtLink>

          <NuxtLink to="/introduce">
            <div @click="active(1)" :class="{active: active_el==1 }" class="mx-2 hover:text-[#165AAD]  cursor-pointer">
              GIỚI THIỆU
            </div>
          </NuxtLink>


          <div @click="active(2)" :class="{active: active_el==2 }" class="mx-2 hover:text-[#165AAD]  cursor-pointer">
            SẢN
            PHẨM
          </div>


         <NuxtLink to="/news">
           <div @click="active(3)" :class="{active: active_el==3 }" class="mx-2 hover:text-[#165AAD]  cursor-pointer">
             TIN
             TỨC
           </div>
         </NuxtLink>


          <NuxtLink to="/contact">
            <div @click="active(4)" :class="{active: active_el==4 }" class="mx-2 hover:text-[#165AAD]  cursor-pointer">
              lIÊN HỆ
            </div>
          </NuxtLink>
          <div @click="active(5)" :class="{active: active_el==5 }" class="mx-2 hover:text-[#165AAD]  cursor-pointer">
            TIỆN ÍCH
          </div>
          <div @click="active(6)" :class="{active: active_el==6 }" class="mx-2  hover:text-[#165AAD]  cursor-pointer">
            QUẢNG CÁO
          </div>
        </div>
        <div class="col-span-3 flex justify-end  items-center ">
          <NuxtLink to="/login">
            <button class=" bg-[#165AAD] px-4 py-2 text-white  rounded-md mr-2">Đăng nhập</button>
          </NuxtLink>
            <NuxtLink to="/register">
              <button class=" bg-[#FFFFFF] hover:text-[#FFFFFF] hover:bg-[#165AAD] bd text-[#000000] px-4 py-2 rounded-md">Đăng ký</button>

            </NuxtLink>
        </div>

      </div>

    </div>

    <div class="md:hidden block px-5 ">
      <div class="flex p-3 justify-between items-center">
        <div>
          <img :src="logo" alt="">
        </div>
        <div>
          <i class="fa-solid fa-bars text-3xl cursor-pointer"></i>
        </div>
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
      logo: logo,
      active_el: 0,
    }
  },
  mounted() {
    if (this.$route.path == '/') {
      this.active_el = 0
    } else if (this.$route.path == '/introduce') {
      this.active_el = 1
    } else if (this.$route.path == '/product') {
      this.active_el = 2
    } else if (this.$route.path == '/news') {
      this.active_el = 3
    } else if (this.$route.path == '/contact') {
      this.active_el = 4
    } else if (this.$route.path == '/utility') {
      this.active_el = 5
    } else if (this.$route.path == '/advertisement') {
      this.active_el = 6
    }
  },
  methods: {
    active(index) {
      this.active_el = index
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

.active {
  border-bottom: 3px solid #165AAD;
}
</style>
