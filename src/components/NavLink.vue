<template>
  <li>
    <a :href="to" class="hover:text-yellow-600"><slot /></a>
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
