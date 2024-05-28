<script setup>
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="">
    <div
      class="mx-auto flex min-h-screen max-w-screen-lg flex-col items-center justify-center gap-y-4 px-4 py-8"
    >
      <h1 className="text-center text-3xl font-bold uppercase">
        Kontak Darurat Kecamatan Bulawa
      </h1>
      <h2 className="my-2 text-center text-lg font-medium capitalize">
        Kontak darurat yang bisa dihubungi desa-desa yang berada di Kecamatan
        Bulawa
      </h2>
      <div class="w-full bg-slate-50">
        <Table class="font-medium">
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[100px] font-bold">No</TableHead>
              <TableHead class="font-bold">Desa</TableHead>
              <TableHead class="font-bold">Kontak</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell class="font-medium">01</TableCell>
              <TableCell>Bukit Hijau</TableCell>
              <TableCell>083193459090</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium">02</TableCell>
              <TableCell>Kaidundu</TableCell>
              <TableCell>082199876543</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium">03</TableCell>
              <TableCell>Patoa</TableCell>
              <TableCell>085243321123</TableCell>
            </TableRow>
            <TableRow>
              <TableCell class="font-medium">04</TableCell>
              <TableCell>Mamungaa Timur</TableCell>
              <TableCell>085367588898</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Button :as="RouterLink" to="/">Kembali </Button>
    </div>
  </section>
</template>
