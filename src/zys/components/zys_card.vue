<template>
  <el-col :span="5" style="margin-right:10px;width: 275px;">
    <div class="home_card" :style="{height: card_height+'px'}">
      <div>
        <div class="home_card_header">
          <span class="home_card_title">
            <slot name="card_title"></slot>
          </span>
        </div>
        <div class="home_card_content">
          <div class="home_card_link_item" v-for="link in card_links">
            <router-link :to="{ name: link.name }">{{ link.title }}</router-link>
          </div>
          <div class="home_card_link_item" v-for="link in card_outer_links">
            <a :href="link.name" target="_blank">{{ link.title }}</a>
          </div>
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
export default {
  props: {
    card_links: {
      type: Array,
      required: false
    },
    card_outer_links: {
      type: Array,
      required: false
    },
    card_height: {
      type: Number,
      required: false,
      default: 200
    }
  }
}
</script>
