<script setup>
import { TitikKumpul, JalurEvakuasi, TitikRawan } from "@/components/icons";
defineProps(["label", "icon", "id"]);
const checked = defineModel(false);
</script>
<template>
  <label
    class="-mx-2 flex cursor-pointer items-center gap-2 px-2 py-1 hover:bg-gray-100"
  >
    <input
      type="checkbox"
      class="peer hidden"
      name=""
      :id="id"
      v-model="checked"
    />
    <span
      class="inline-flex h-4 w-4 items-center justify-center rounded bg-gray-300 text-transparent peer-checked:bg-yellow-600 peer-checked:text-white"
    >
      <v-icon name="fa-check" scale="0.8" />
    </span>
    <span class="flex items-center gap-1">
      <TitikKumpul
        v-if="icon === 'titik-kumpul'"
        class="h-4 w-4 text-yellow-600"
      />
      <JalurEvakuasi
        v-if="icon === 'jalur-evakuasi'"
        class="h-4 w-4 text-yellow-600"
      />
      <TitikRawan
        v-if="icon === 'titik-rawan'"
        class="h-4 w-4 text-yellow-600"
      />
      {{ label }}
    </span>
  </label>
</template>
