<template>
  <a
    :href="link"
    target="_blank"
    :disabled="!link"
    class="flex flex-col items-center justify-center gap-4 py-4 enabled:cursor-pointer"
    noreferrer
    noopener
  >
    <img
      class="aspect-square w-1/2 max-w-28 rounded-full"
      :src="`/img/teams/${image}`"
      :alt="name"
    />
    <div class="text-center text-sm">
      <h3 class="font-bold leading-4">{{ name }}</h3>
      <p>{{ role }}</p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
  },
};
</script>
