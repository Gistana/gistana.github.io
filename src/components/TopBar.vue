<script>
export default {
  props: {
    leadingIcon: {
      type: String,
    },
    trailingIcon: {
      type: String,
    },
  },
};
</script>

<template>
  <nav class="md:shadow-default h-auto w-full bg-white md:hidden">
    <div class="container mx-auto flex items-stretch justify-between">
      <RouterLink
        to="/"
        class="flex aspect-square w-12 items-center justify-center"
      >
        <v-icon v-if="leadingIcon" :name="leadingIcon" />
      </RouterLink>
      <div class="flex-auto">
        <slot />
      </div>
      <div class="flex aspect-square w-12 items-center justify-center">
        <v-icon v-if="trailingIcon" :name="trailingIcon" />
      </div>
    </div>
  </nav>
</template>
