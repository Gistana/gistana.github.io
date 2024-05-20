<script>
import { TopBar } from "@/components";
import {
  LMap,
  LTileLayer,
  LControlLayers,
  LMarker,
  LGeoJson,
  LLayerGroup,
  LControl,
  LCircleMarker,
  LTooltip,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

import { administrasi, jalurEvakuasi } from "../data";

export default {
  components: {
    TopBar,
    LMap,
    LTileLayer,
    LControlLayers,
    LMarker,
    LGeoJson,
    LLayerGroup,
    LControl,
    LCircleMarker,
    LTooltip,
  },
  data() {
    return {
      center: [0.36694401562217005, 123.29020767212],
      administrasi,
      jalurEvakuasi,
      currentLocation: null,
    };
  },

  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.currentLocation = [
          position.coords.latitude,
          position.coords.longitude,
        ];
      });
    }
  },

  methods: {
    gotoMyLocation() {
      if (this.$refs.map && this.currentLocation) {
        this.$refs.map.leafletObject.setView(this.currentLocation, 15);
      }
    },
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

    <l-map :center="center" :use-global-leaflet="false" :zoom="12" ref="map">
      <l-control-layers position="topright" />

      <l-control position="topleft" class="leaflet-control leaflet-bar">
        <router-link
          to="/"
          class="flex h-[30px] w-[30px] items-center justify-center"
        >
          <v-icon
            name="fa-home"
            class="ms-[1px]"
            style="vertical-align: middle"
          />
        </router-link>
      </l-control>

      <l-control
        position="topright"
        class="leaflet-control leaflet-control-layers"
      >
        <button class="h-11 w-11 text-gray-400" @click="gotoMyLocation">
          <v-icon name="md-locationsearching-twotone" scale="1.5" />
        </button>
      </l-control>

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
        :geojson="administrasi"
        layer-type="overlay"
        name="Kecamatan Bulawa"
        :optionsStyle="() => ({ color: '#000000' })"
      />

      <l-layer-group layer-type="overlay" name="Jalur Evakuasi">
        <l-geo-json
          :geojson="jalurEvakuasi"
          :optionsStyle="() => ({ color: '#ffff00' })"
        />
        <l-marker
          :lat-lng="
            jalurEvakuasi.features[0].geometry.coordinates[0]
              .slice(0, 2)
              .toReversed()
          "
        />
      </l-layer-group>

      <l-circle-marker v-if="currentLocation" :lat-lng="currentLocation">
        <l-tooltip>Anda di sini</l-tooltip>
      </l-circle-marker>
    </l-map>
  </div>
</template>
