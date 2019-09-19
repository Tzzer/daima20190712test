<template>
  <transition name="fade">
    <div class="info-model" v-show="showInfoModel">
      <div class="brief-modal">
        <h2>
          <i v-if="rst.is_premium">品牌</i>
          <span>{{rst.name}}</span>
        </h2>
        <ul>
          <li>
            <h3>{{rst.rating}}</h3>
            <p>评分</p>
          </li>
          <li>
            <h3>{{rst.recent_order_num}}</h3>
            <p>月售</p>
          </li>
          <li v-if="rst.delivery_mode">
            <h3>蜂鸟转送</h3>
            <p>约{{rst.order_lead_time}}分钟</p>
          </li>

          <li>
            <h3>¥{{rst.float_delivery_fee}}元</h3>
            <p>配送费</p>
          </li>
          <li>
            <h3>{{(rst.distance / 1000).toFixed(1) }}km</h3>
            <p>距离</p>
          </li>
        </ul>
        <h3 class="promotion">
          <span>公告</span>
        </h3>
        <p class="brief-modal-yx">{{rst.promotion_info}}</p>
      </div>
      <!-- x号 -->
      <div class="brief-modal-close" @click="$emit('close')">
        <img
          src="https://fuss10.elemecdn.com/8/ba/bcfa8cc62b20e044bd2ea1c1c7f3dpng.png?imageMogr/format/webp/"
          alt
        />
      </div>
    </div>
  </transition>
</template>