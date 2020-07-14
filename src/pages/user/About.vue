<template>
  <q-page>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" flat bordered>
        <q-item>
          <q-item-section>
            <q-item-label class="text-center">JDIH SekWan </q-item-label>
            <q-item-label class="text-center" caption >
              Lampung
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-card-section horizontal>
          <q-card-section>
            {{ data }}
          </q-card-section>
        </q-card-section>
      </q-card>
      <q-card class="my-card" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>AlHayyah Crew </q-item-label>
            <q-item-label caption>
              Mahasiswa UBL FIK , Angkatan 18
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-card-actions>
          <q-btn flat round icon="email" />
          <q-btn flat>
            crewalhayyah@gmail.com
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      data: 'Aplikasi JDIH SekWan Adalah Aplikasi yang di gunakan untuk mencari data perundang - undangan '
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 550px
</style>
