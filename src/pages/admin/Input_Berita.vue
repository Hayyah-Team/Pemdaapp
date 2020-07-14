<template>
  <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
    <div class="q-pa-md">
      <q-select filled v-model="tag" :options="options" label="Tag"/>
      <br>

      <q-input
        filled
        v-model="judul"
        label="Judul"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-editor
        filled
        autogrow
        v-model="isi"
        min-height="5rem" />
      <br>

      <q-file color="teal" filled v-model="image" label="Image">
        <template v-slot:prepend>
          <q-icon name="filter" />
        </template>
      </q-file>
      <br>

      <q-file color="teal" filled v-model="file" label="File">
        <template v-slot:prepend>
          <q-icon name="cloud_upload" />
        </template>
      </q-file>
      <br>

    </div>
      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
</template>

<script>
export default {
  data () {
    return {
      tag: null,
      judul: null,
      isi: '',
      options: [
        'Risalah rapat persidangan',
        'Propemperda',
        'Raperda naskah akademik',
        'Rancangan Perda pembahasan',
        'Produk hukum DPRD',
        'Kegiatan hukum',
        'Berita Dewan'
      ],
      image: null,
      file: null
    }
  },

  methods: {
    onReset () {
      this.tag = null
      this.judul = null
      this.isi = null
    },
    onSubmit () {
      this.$axios.post('berita/input', {
        tag: this.tag,
        judul: this.judul,
        isi: this.isi
      }).then(res => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan,
            position: 'top'
          })
          this.$router.push({ name: 'data' })
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan,
            position: 'top'
          })
        }
      })
    }
  }
}
</script>
