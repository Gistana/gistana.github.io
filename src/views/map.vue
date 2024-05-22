<script>
import { Sidebar, Checkbox } from "@/components";
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

import {
  administrasi,
  jalurEvakuasiMamungaaTimur,
  jalurEvakuasiPatoa,
  jalurEvakuasiKaidundu,
  jalurEvakuasiBukitHijau,
  titikKumpulMamungaaTimur,
  titikKumpulPatoa,
  titikKumpulKaidundu,
  titikKumpulBukitHijau,
} from "@/data";

export default {
  components: {
    Checkbox,
    Sidebar,
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
      currentLocation: null,

      jalurEvakuasiMamungaaTimur,
      titikKumpulMamungaaTimur,
      showJalurEvakuasiMamungaaTimur: true,
      showTitikKumpulMamungaaTimur: true,

      jalurEvakuasiPatoa,
      titikKumpulPatoa,
      showJalurEvakuasiPatoa: true,
      showTitikKumpulPatoa: true,

      jalurEvakuasiKaidundu,
      titikKumpulKaidundu,
      showJalurEvakuasiKaidundu: true,
      showTitikKumpulKaidundu: true,

      jalurEvakuasiBukitHijau,
      titikKumpulBukitHijau,
      showJalurEvakuasiBukitHijau: true,
      showTitikKumpulBukitHijau: true,
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
    separateFeatures(geoJSON) {
      return geoJSON.features.map((feature) => ({
        ...geoJSON,
        name: feature.properties.NAMOBJ,
        features: [feature],
      }));
    },
  },
};
</script>

<template>
  <div class="flex h-svh flex-row">
    <sidebar>
      <div class="flex flex-col gap-2">
        <h3 class="font-bold">Desa Mamungaa Timur</h3>
        <div class="flex flex-col">
          <checkbox
            icon="titik-kumpul"
            label="Titik Kumpul"
            id="titik-kumpul-mamungaa-timur"
            v-model="showTitikKumpulMamungaaTimur"
          />
          <checkbox
            icon="jalur-evakuasi"
            label="Jalur Evakuasi"
            id="jalur-evakuasi-mamungaa-timur"
            v-model="showJalurEvakuasiMamungaaTimur"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold">Desa Patoa</h3>
        <div class="flex flex-col">
          <checkbox
            icon="titik-kumpul"
            label="Titik Kumpul"
            id="titik-kumpul-patoa"
            v-model="showTitikKumpulPatoa"
          />
          <checkbox
            icon="jalur-evakuasi"
            label="Jalur Evakuasi"
            id="jalur-evakuasi-patoa"
            v-model="showJalurEvakuasiPatoa"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold">Desa Kaidundu</h3>
        <div class="flex flex-col">
          <checkbox
            icon="titik-kumpul"
            label="Titik Kumpul"
            id="titik-kumpul-kaidundu"
            v-model="showTitikKumpulKaidundu"
          />
          <checkbox
            icon="jalur-evakuasi"
            label="Jalur Evakuasi"
            id="jalur-evakuasi-kaidundu"
            v-model="showJalurEvakuasiKaidundu"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <h3 class="font-bold">Desa Bukit Hijau</h3>
        <div class="flex flex-col">
          <checkbox
            icon="titik-kumpul"
            label="Titik Kumpul"
            id="titik-kumpul-bukit-hijau"
            v-model="showTitikKumpulBukitHijau"
          />
          <checkbox
            icon="jalur-evakuasi"
            label="Jalur Evakuasi"
            id="jalur-evakuasi-bukit-hijau"
            v-model="showJalurEvakuasiBukitHijau"
          />
        </div>
      </div>
    </sidebar>

    <l-map
      class="isolate ms-3"
      :center="center"
      :use-global-leaflet="false"
      :zoom="12"
      :min-zoom="12"
      ref="map"
    >
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
        v-for="geoJSON in separateFeatures(administrasi)"
        :geojson="geoJSON"
        :optionsStyle="() => ({ color: geoJSON.features[0].properties.COLOR })"
      >
        <l-tooltip>{{ geoJSON.name }}</l-tooltip>
      </l-geo-json>

      <l-geo-json
        v-if="showJalurEvakuasiMamungaaTimur"
        :geojson="jalurEvakuasiMamungaaTimur"
        :optionsStyle="() => ({ color: '#000000' })"
      />
      <l-geo-json
        v-if="showTitikKumpulMamungaaTimur"
        :geojson="titikKumpulMamungaaTimur"
      />

      <l-geo-json
        v-if="showJalurEvakuasiPatoa"
        :geojson="jalurEvakuasiPatoa"
        :optionsStyle="() => ({ color: '#000000' })"
      />
      <l-geo-json v-if="showTitikKumpulPatoa" :geojson="titikKumpulPatoa" />

      <l-geo-json
        v-if="showJalurEvakuasiKaidundu"
        :geojson="jalurEvakuasiKaidundu"
        :optionsStyle="() => ({ color: '#000000' })"
      />
      <l-geo-json
        v-if="showTitikKumpulKaidundu"
        :geojson="titikKumpulKaidundu"
      />

      <l-geo-json
        v-if="showJalurEvakuasiBukitHijau"
        :geojson="jalurEvakuasiBukitHijau"
        :optionsStyle="() => ({ color: '#000000' })"
      />
      <l-geo-json
        v-if="showTitikKumpulBukitHijau"
        :geojson="titikKumpulBukitHijau"
      />

      <l-circle-marker v-if="currentLocation" :lat-lng="currentLocation">
        <l-tooltip>Anda di sini</l-tooltip>
      </l-circle-marker>
    </l-map>
  </div>
</template>
