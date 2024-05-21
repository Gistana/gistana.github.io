<template>
  <li>
    <router-link
      :to="to"
      class="inline-block px-5 py-4 hover:text-yellow-600 sm:py-3"
      active-class="text-yellow-600"
    >
      <slot />
    </router-link>
  </li>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
