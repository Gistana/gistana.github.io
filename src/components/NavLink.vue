<template>
  <li>
    <a :href="to" class="px-5 py-3 hover:text-yellow-600"><slot /></a>
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
