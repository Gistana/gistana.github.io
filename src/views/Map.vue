<script>
import { TopBar } from "@/components";
import {
  LMap,
  LTileLayer,
  LMarker,
  LControlLayers,
  LGeoJson,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

import administrasi from "../data/administrasi.json";

export default {
  components: {
    TopBar,
    LMap,
    LTileLayer,
    LMarker,
    LControlLayers,
    LGeoJson,
  },
  data() {
    return {
      center: [0.7569440156221701, 122.61520767212],
      geojson: administrasi,
    };
  },
};
</script>

<template>
  <div class="flex h-svh flex-col">
    <top-bar leadingIcon="fa-arrow-left">
      <h1
        class="flex h-full items-center justify-center text-center text-lg font-bold"
      >
        Maps Web<span class="text-yellow-600">GIS.</span>
      </h1>
    </top-bar>

    <l-map
      :center="[0.7569440156221701, 122.61520767212]"
      :use-global-leaflet="false"
      :zoom="10"
    >
      <l-control-layers position="topright" />

      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
      <l-tile-layer
        url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg"
        layer-type="base"
        name="Satellite View"
        :visible="false"
      />
      <l-geo-json
        :geojson="geojson"
        layer-type="overlay"
        name="Batas Administrasi"
      />
    </l-map>
  </div>
</template>
