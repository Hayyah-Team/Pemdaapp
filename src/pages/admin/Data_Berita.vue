<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        title="Data Berita"
        :data="data"
        :columns="columns"
        row-key="name"
        >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="Tag" :props="props">
              {{ props.row.tag }}
            </q-td>
            <q-td key="Judul" :props="props">
              {{ props.row.judul }}
            </q-td>
            <q-td key="gambar" :props="props">
              <q-img
                :src="`${$baseImageURL}/${props.row.image}`"
                spinner-color="white"
              />
            </q-td>
            <q-td key="file" :props="props">
              {{ props.row.file }}
            </q-td>
            <q-td key="Aksi" :props="props">
              <div class="row">
                <div class="col">
                  <q-btn label="edit" :to="{ name: 'formedit', params: { id: props.row.id } }" color="warning" icon="edit" unelevated></q-btn>
                </div>
                <div class="col">
                  <q-btn label="hapus" @click="confirm(props.row.id)" color="negative" icon="delete" unelevated></q-btn>
                </div>
              </div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
      to="/input"
      round
      color="primary"
      size="12px"
      icon="add"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        {
          name: 'Tag',
          required: true,
          label: 'Tag',
          align: 'left',
          field: 'Tag',
          sortable: true
        },
        { name: 'Judul', align: 'center', label: 'Judul', field: 'Judul', sortable: true },
        { name: 'gambar', align: 'left', label: 'Gambar', field: 'image' },
        { name: 'file', align: 'left', label: 'File', field: 'file' },
        { name: 'Aksi', label: 'Aksi', field: 'Aksi', align: 'center' }
      ],

      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('data/data')
        .then(res => {
          console.log(res)
          if (res.data.sukses) {
            this.data = res.data.data
          } else {
            this.$q.notify({
              type: 'negative',
              message: res.data.pesan
            })
          }
        })
    },
    confirm (id) {
      this.$q.dialog({
        title: 'Konfirmasi',
        message: 'Apakah Anda Yakin Menghapus Berita',
        cancel: true,
        persistent: true
      }).onOk(() => {
        console.log('>>>> OK' + id)
        this.$axios.delete('data/data/' + id)
          .then(res => {
            if (res.data.sukses) {
              this.$q.notify({
                type: 'positive',
                message: res.data.pesan,
                position: 'top'
              })
              this.getData()
            } else {
              this.$q.notify({
                type: 'negative',
                message: res.data.pesan,
                position: 'top'
              })
            }
          })
      })
    }
  }
}
</script>
