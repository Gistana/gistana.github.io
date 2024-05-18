<template>
  <section id="layanan" class="mt-16 flex flex-col gap-8 sm:gap-16">
    <h3 class="text-center text-3xl font-bold">Layanan</h3>

    <div
      class="container flex flex-col gap-x-20 gap-y-20 md:w-10/12 lg:w-auto lg:flex-row"
    >
      <img
        class="hidden flex-1 object-contain md:block lg:w-1/2"
        src="/img/layanan.png"
        alt="Layanan"
      />
      <div class="flex flex-1 flex-col gap-6 md:mx-8 lg:mx-0">
        <div
          class="shadow-default flex flex-col gap-2 rounded-lg border border-black/25 px-8 py-4"
        >
          <h4 class="flex items-center gap-2 text-lg font-bold">
            Peta Interaktif
            <v-icon name="fa-map" scale="1.2" class="text-yellow-600" />
          </h4>
          <p class="text-base">
            Peta interaktif yang dilengkapi dengan informasi terkini tentang
            jalur evakuasi dan titik kumpul yang strategis,tercepat dan teraman.
          </p>
        </div>
        <div
          class="shadow-default flex flex-col gap-2 rounded-lg border border-black/25 px-8 py-4"
        >
          <h4 class="flex items-center gap-2 text-lg font-bold">
            Kontak Darurat
            <v-icon name="fa-id-card-alt" scale="1.2" class="text-yellow-600" />
          </h4>
          <p class="text-base">
            Kontak Darurat penting yang bekerjasama dengan lembaga
            penanggulangan bencana dan tim penyelamat lokal untuk keselamatan.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
