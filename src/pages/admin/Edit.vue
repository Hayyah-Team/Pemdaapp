<template>
  <q-page padding>
    <q-card flat >
      <q-card-section class="q-gutter-md">
        <div class="text-h5">Edit Berita</div>
        <q-form
          @reset="onReset"
          @submit="onSubmit"
          class="q-mt-lg"
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
      </q-card-section>
    </q-card>
  </q-page>
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
  created () {
    this.getData()
  },
  methods: {
    getData () {
      console.log(this.$route.params.id)
      this.$axios.get('data/data/' + this.$route.params.id)
        .then(res => {
          console.log(res)
          this.form = res.data
        })
    },
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
      this.$axios.post('data/data/' + this.$route.params.id, formData)
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
    }
  }
}
</script>
