<template>
  <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
    <div class="q-pa-md">
      <q-select filled v-model="form.tag" :options="options" label="Tag"/>
      <br>

      <q-input
        filled
        v-model="form.judul"
        label="Judul"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-editor
        filled
        autogrow
        v-model="form.isi"
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
      form: {
        tag: null,
        judul: null,
        isi: ''
      },
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
      const formData = new FormData()
      formData.append('image', this.image)
      formData.append('file', this.file)
      formData.append('data', JSON.stringify(this.form))
      this.$axios.post('data/data', formData)
        .then(res => {
          console.log(res)
          if (res.data.sukses) {
            this.$q.notify({
              type: 'positive',
              message: res.data.message,
              position: 'top'
            })
            this.$router.push({ name: 'data' })
          } else {
            this.$q.notify({
              type: 'negative',
              message: res.data.message,
              position: 'top'
            })
          }
        })
      // this.$axios.post('data/data', {
      //   tag: this.tag,
      //   judul: this.judul,
      //   isi: this.isi
      // }).then(res => {
      //   if (res.data.sukses) {
      //     this.$q.notify({
      //       type: 'positive',
      //       message: res.data.pesan,
      //       position: 'top'
      //     })
      //     this.$router.push({ name: 'data' })
      //   } else {
      //     this.$q.notify({
      //       type: 'negative',
      //       message: res.data.pesan,
      //       position: 'top'
      //     })
      //   }
      // })
    }
  }
}
</script>
