<template>
  <q-page>
    <div align="center">
      <q-btn icon="search" rounded to="/cariuser" class="q-pa-sm" label="Cari Dokument" unelevated ></q-btn>
    </div>
    <!--Isi Home-->
    <q-separator style="height: 2px" class="bg-blue"/>
    <br>
    <!--Daftar Berita-->
    <div class="row">
      <div class="col">
        <q-card
          class="my-card"
          flat
          bordered
          v-for="now in now"
          :key="now.idData"
          :to="now.to"
          exact>
          <q-card-section horizontal>
            <q-card-section class="col q-pt-xs">
              <div class="text-overline">{{ now.jenis }}</div>
              <div class="text-h5 q-mt-sm q-mb-xs">{{ now.judul }}</div>
            </q-card-section>
          </q-card-section>
          <q-separator />
          <q-card-actions align="right">
            <q-btn flat type="a" :href="now.urlDownload" color="negative">
              download
            </q-btn>
            <q-btn flat @click="openDetail(now)" color="green">
              see
            </q-btn>
          </q-card-actions>
          <q-separator />
        </q-card>
        <!-- pemisah -->
        <!-- <q-card
          class="my-card"
          flat
          bordered
          exact>
          <q-card-section horizontal>
            <q-card-section class="col q-pt-xs">
              <div class="text-overline">JDIH PEMERINTAHAN KOTA BANDUNG</div>
              <div class="text-h5 q-mt-sm q-mb-xs">TIM ASISTENSI E-BUDGETING RENCANA KERJA SATUAN KERJA PERANGKAT DAERAH TINGKAT KOTA BANDUNG TAHUN ANGGARAN 2017</div>
            </q-card-section>
          </q-card-section>
          <q-separator />
            <q-card-actions align="right">
              <q-btn flat type="a" href="https://jdihn.go.id/files/160/Kepwal%20050_Kep.697-Bappeda_2016%20TIM%20RKPD%202016%20untuk%20TA%202017.pdf" color="negative">
                download
              </q-btn>
              <q-btn flat @click="dialog = true" color="green">
                see
              </q-btn>
            </q-card-actions>
          <q-separator />
          Dialog
          <q-dialog v-model="dialog" position="bottom">
            <q-card style="width: 500px">
              <q-card-section>
                <div class="text-h6">Detail Dokumen</div>
                <div class="text-caption">JDIH PEMERINTAHAN KOTA BANDUNG</div>
              </q-card-section>
              <q-card-section style="max-height: 50vh;" class="scroll">
                TIM ASISTENSI E-BUDGETING RENCANA KERJA SATUAN KERJA PERANGKAT DAERAH TINGKAT KOTA BANDUNG TAHUN ANGGARAN 2017
                <q-form class="q-mt-md">
                  <q-separator />
                  <div>Nomor Peraturan : 050/Kep.697-Bappeda/2016</div>
                  <div>Jenis / Bentuk Peraturan : Keputusan Walikota</div>
                  <div>Tanggal Penetapan : 19 Juni 2019</div>
                  <div>Tanggal Perundangan : 19 Juni 2019</div>
                </q-form>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn flat label="batal" @click="close()" />
                <q-btn color="primary" type="a" href="https://jdihn.go.id/files/160/Kepwal%20050_Kep.697-Bappeda_2016%20TIM%20RKPD%202016%20untuk%20TA%202017.pdf" label="Download"/>
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-card> -->
      </div>
    </div>
    <!-- Dialog -->
    <q-dialog v-model="dialog" position="bottom">
      <q-card style="width: 500px">
        <q-card-section>
          <div class="text-h6">Detail Dokumen</div>
          <div class="text-caption">{{ activeData.jenis }}</div>
        </q-card-section>
        <q-card-section style="max-height: 50vh;" class="scroll">
          {{ activeData.judul }}
          <q-form class="q-mt-md">
            <q-separator />
            <div>Nomor Peraturan : {{ activeData.noPeraturan }}</div>
            <div>Jenis / Bentuk Peraturan : {{ activeData.jenis }}</div>
            <div>Tanggal Penetapan : {{ activeData.tanggal_pengundangan }}</div>
            <div>Tanggal Perundangan : {{ activeData.tanggal_pengundangan }}</div>
          </q-form>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="batal" @click="close()" />
          <q-btn color="primary" type="a" :href=" activeData.urlDownload " label="Download"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      tag: null,
      judul: null,
      isi: null,
      slide: 1,
      activeData: [],
      now: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('getData')
        .then(res => {
          console.log(res)
          this.now = res.data
        })
    },
    close () {
      this.dialog = false
    },
    openDetail (now) {
      this.activeData = now
      console.log(now)
      this.dialog = true
    }
  }
}
</script>
<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
