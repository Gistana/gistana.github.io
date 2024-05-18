<script>
export default {
  props: {
    href: {
      type: String,
      default: "#",
    },
    icon: {
      type: String,
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    onScroll() {
      this.isShow = window.scrollY > 200;
    },
  },
};
</script>

<template>
  <div v-show="isShow" class="fixed bottom-4 right-4">
    <a
      :href="href"
      class="flex aspect-square w-12 animate-bounce items-center justify-center rounded-full bg-yellow-600 text-white shadow-lg"
    >
      <v-icon :name="icon" />
    </a>
  </div>
</template>
