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
  titikRawanKaidundu,
  titikRawanMamungaaTimur,
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
      center: [0.3702477, 123.2836842],
      administrasi,
      currentLocation: null,
      dataModal: null,
      modal: false,
      points: [],
      searchQuery: "",
      filteredPoints: [],

      jalurEvakuasiMamungaaTimur,
      titikKumpulMamungaaTimur,
      titikRawanMamungaaTimur,
      showJalurEvakuasiMamungaaTimur: true,
      showTitikKumpulMamungaaTimur: true,
      showTitikRawanMamungaaTimur: true,

      jalurEvakuasiPatoa,
      titikKumpulPatoa,
      showJalurEvakuasiPatoa: true,
      showTitikKumpulPatoa: true,

      jalurEvakuasiKaidundu,
      titikKumpulKaidundu,
      titikRawanKaidundu,
      showJalurEvakuasiKaidundu: true,
      showTitikKumpulKaidundu: true,
      showTitikRawanKaidundu: true,

      jalurEvakuasiBukitHijau,
      titikKumpulBukitHijau,
      showJalurEvakuasiBukitHijau: true,
      showTitikKumpulBukitHijau: true,
    };
  },

  mounted() {
    this.points = [
      { geoJSON: this.titikKumpulMamungaaTimur, desa: "Mamungaa Timur" },
      { geoJSON: this.titikRawanMamungaaTimur, desa: "Mamungaa Timur" },
      { geoJSON: this.titikKumpulPatoa, desa: "Patoa" },
      { geoJSON: this.titikKumpulKaidundu, desa: "Kaidundu" },
      { geoJSON: this.titikRawanKaidundu, desa: "Kaidundu" },
      { geoJSON: this.titikKumpulBukitHijau, desa: "Bukit Hijau" },
    ]
      .map(({ geoJSON, desa }) =>
        geoJSON.features.map((feature) => ({
          name: `${feature.properties.name} Desa ${desa}`,
          coordinates: [...feature.geometry.coordinates],
        })),
      )
      .flat();

    this.filteredPoints = [...this.points].slice(0, 5);

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
    showModal(event) {
      this.dataModal = Object.entries(event.layer.feature.properties)
        .filter(
          ([key, value]) =>
            ["name", "description", "image"].includes(key) && value !== null,
        )
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      this.modal = true;
    },
    closeModal() {
      this.dataModal = [];
      this.modal = false;
    },
    filterPoints() {
      this.filteredPoints = this.points
        .filter((point) =>
          point.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
        )
        .slice(0, 5);
    },
    gotoPoint(coordinates) {
      this.$refs.map.leafletObject.setView(coordinates, 20);
    },
  },
};
</script>

<template>
  <div
    v-show="modal"
    class="fixed bottom-8 right-4 z-10 w-[calc(100vw-6rem)] max-w-96 rounded-lg bg-white p-4 shadow-lg"
  >
    <button
      class="absolute -right-2 -top-2 flex aspect-square items-center justify-center rounded-full bg-white px-1 shadow"
      @click="closeModal"
    >
      <v-icon name="fa-times" scale="0.8" />
    </button>
    <img
      :src="`/img${dataModal?.image}`"
      :alt="dataModal?.name"
      class="aspect-video w-full rounded bg-slate-300 object-cover"
    />
    <h5 class="mb-1 mt-4 font-bold uppercase text-yellow-600">
      {{ dataModal?.name }}
    </h5>
    <p class="text-sm">
      {{ dataModal?.description }}
    </p>
  </div>

  <div class="flex h-svh flex-row">
    <sidebar>
      <div class="relative">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari lokasi"
          size="1"
          class="peer h-11 w-full min-w-28 rounded-md border border-black/25 px-4 outline-none focus:border-yellow-600"
          @input="filterPoints"
          required
        />
        <ul
          class="absolute top-[calc(100%+0.25rem)] hidden w-full overflow-x-hidden text-ellipsis text-nowrap rounded-md border border-black/10 bg-white text-sm shadow-md peer-valid:block"
        >
          <li
            v-for="point in filteredPoints"
            :key="point.name"
            class="cursor-pointer overflow-x-hidden text-ellipsis border-t border-black/10 px-4 py-2 first:border-none hover:bg-gray-100"
            :title="point.name"
            @click="gotoPoint(point.coordinates.slice(0, 2).toReversed())"
          >
            {{ point.name }}
          </li>
        </ul>
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
          <checkbox
            icon="titik-rawan"
            label="Titik Rawan"
            id="titik-rawan-kaidundu"
            v-model="showTitikRawanKaidundu"
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
          <checkbox
            icon="titik-rawan"
            label="Titik Rawan"
            id="titik-rawan-mamungaa-timur"
            v-model="showTitikRawanMamungaaTimur"
          />
        </div>
      </div>
    </sidebar>

    <l-map
      class="isolate ms-3"
      :center="center"
      :use-global-leaflet="false"
      :zoom="13"
      :min-zoom="13"
      ref="map"
    >
      <l-control-layers position="topright" />

      <l-control
        position="topright"
        class="leaflet-control leaflet-control-layers"
      >
        <button class="h-11 w-11 text-gray-400" @click="gotoMyLocation">
          <v-icon name="md-locationsearching-twotone" scale="1.5" />
        </button>
      </l-control>

      <l-control
        position="topright"
        class="leaflet-control leaflet-control-layers"
      >
        <router-link to="/" class="flex h-11 w-11 items-center justify-center">
          <v-icon
            name="fa-home"
            class="bg- ms-[1px] text-gray-400"
            scale="1.5"
            style="vertical-align: middle"
          />
        </router-link>
      </l-control>

      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="Default"
        attribution="<a href='https://www.openstreetmap.org/copyright' target='_blank'>&copy; OpenStreetMap</a> | <a href='https://stadiamaps.com/' target='_blank'>&copy; Stadia Maps</a>"
      />

      <l-tile-layer
        url="https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg"
        layer-type="base"
        name="Citra Satelit"
        :visible="false"
        attribution="<a href='https://stadiamaps.com/' target='_blank'>&copy; Stadia Maps</a>"
      />

      <l-tile-layer
        url="https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png"
        layer-type="base"
        name="Medan"
        :visible="false"
        attribution="<a href='https://stadiamaps.com/' target='_blank'>&copy; Stadia Maps</a> | <a href='https://stamen.com' target='_blank'>© Stamen Design</a>"
      />

      <l-geo-json
        v-for="geoJSON in separateFeatures(administrasi)"
        :geojson="geoJSON"
        :optionsStyle="() => ({ color: geoJSON.features[0].properties.COLOR })"
      >
        <l-tooltip>{{ geoJSON.name }}</l-tooltip>
      </l-geo-json>

      <l-geo-json
        v-if="showJalurEvakuasiBukitHijau"
        :geojson="jalurEvakuasiBukitHijau"
        :optionsStyle="() => ({ color: '#000000' })"
        @click="showModal"
      />
      <l-geo-json
        v-if="showTitikKumpulBukitHijau"
        :geojson="titikKumpulBukitHijau"
        @click="showModal"
      />

      <l-geo-json
        v-if="showJalurEvakuasiKaidundu"
        :geojson="jalurEvakuasiKaidundu"
        :optionsStyle="() => ({ color: '#000000' })"
        @click="showModal"
      />
      <l-geo-json
        v-if="showTitikKumpulKaidundu"
        :geojson="titikKumpulKaidundu"
        @click="showModal"
      />
      <l-geo-json
        v-if="showTitikRawanKaidundu"
        :geojson="titikRawanKaidundu"
        @click="showModal"
      />

      <l-geo-json
        v-if="showJalurEvakuasiPatoa"
        :geojson="jalurEvakuasiPatoa"
        :optionsStyle="() => ({ color: '#000000' })"
        @click="showModal"
      />
      <l-geo-json
        v-if="showTitikKumpulPatoa"
        :geojson="titikKumpulPatoa"
        @click="showModal"
      />

      <l-geo-json
        v-if="showJalurEvakuasiMamungaaTimur"
        :geojson="jalurEvakuasiMamungaaTimur"
        :optionsStyle="() => ({ color: '#000000' })"
        @click="showModal"
      />
      <l-geo-json
        v-if="showTitikKumpulMamungaaTimur"
        :geojson="titikKumpulMamungaaTimur"
        @click="showModal"
      />
      <l-geo-json
        v-if="showTitikRawanMamungaaTimur"
        :geojson="titikRawanMamungaaTimur"
        @click="showModal"
      />

      <l-circle-marker v-if="currentLocation" :lat-lng="currentLocation">
        <l-tooltip>Anda di sini</l-tooltip>
      </l-circle-marker>
    </l-map>
  </div>
</template>
