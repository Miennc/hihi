<template>
  <div class="bg-[#165AAD] shadow-box ">
    <div class="px-[3rem] grid grid-cols-5 gap-5">
      <div class="col-span-1 flex justify-start flex-col items-center">
        <div>
          VMT JSC
        </div>
        <div>
          Lorem ipsum dolor sit amet. <br>
          Lorem ipsum dolor s. <br>
          Lorem ipsum dolor sit amet. <br>
          Lorem ipsum dolor sit amet. <br>
          Lorem ipsum dolor sit amet. <br>
        </div>
      </div>
      <div class="col-span-1 flex justify-start flex-col items-center">
        <div>
          SẢN PHẨM CHÍNH
        </div>
        <div>
          sản phẩm 1 <br>
          sản phẩm 2 <br>
          sản phẩm 3 <br>
          sản phẩm 4 <br>
          sản phẩm 5 <br>
        </div>
      </div>
      <div class="col-span-1 flex justify-start flex-col items-center">
        <div>
          <img src="~/assets/images/imgFooter.svg" alt="">
        </div>
      </div>
      <div class="col-span-1  bg-red-600  flex justify-start flex-col items-center">
        <div>
          SOCIAL MEDIA
        </div>
        <div>
          <div class="flex   justify-around items-center">
            <div><img src="~/assets/images/fa.svg" alt=""></div>
            <div class="mx-2">Facebook</div>
          </div>
          <div class="flex justify-around  items-center">
            <div><img src="~/assets/images/lk.svg" alt=""></div>
            <div class="mx-2">Linkedin</div>
          </div>
          <div class="flex justify-around  items-center">
            <div><img src="~/assets/images/tw.svg" alt=""></div>
            <div class="mx-2">Twitter</div>
          </div>
        </div>
      </div>
      <div class="col-span-1 flex justify-start flex-col items-center">
        <div>
          CONTACT
        </div>
        <div>
          109 Cầu Giấy, Hà Nội <br>
          (+84) 0123 456 78 <br>
          Fax: 949872893865 <br>
          vmtjsc@example.com <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.shadow-box {
  box-shadow: 0px -5px 9px rgba(0, 0, 0, 0.25);
}
</style>
