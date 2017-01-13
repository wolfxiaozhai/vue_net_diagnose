<template>
  <div class="home_card" :style="{
    height: card_height+'px',
    width: card_width+'px'}">
    <div>
      <div class="home_card_header">
        <img :src="card_title_png">
        <span class="home_card_title">
          <slot name="card_title"></slot>
        </span>
      </div>
      <div class="home_card_content">

        <div v-for="(link, index) in card_inner_links"
        :class="[
          'home_card_link_item',
          index%2 ==0 ? 'home_card_link_item_even' : 'home_card_link_item_odd'
        ]"
        >
          <img :src="card_item_png">
          <router-link :to="{ name: link.name }">{{ link.title }}</router-link>
        </div>

        <div v-for="(link, index) in card_outer_links"
          :class="[
            'home_card_link_item',
            index%2 ==0 ? 'home_card_link_item_even' : 'home_card_link_item_odd'
          ]"
          >
          <img :src="card_item_png">
          <a :href="link.name" target="_blank">{{ link.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card_inner_links: {
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
    },
    card_width: {
      type: Number,
      required: false,
      default: 200
    },
    card_title_png: {
      required: false
    },
    card_item_png: {
      required: false
    }
  }
}
</script>
