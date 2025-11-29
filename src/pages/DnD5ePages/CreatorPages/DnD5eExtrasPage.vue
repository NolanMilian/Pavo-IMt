<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "DnD5eExtrasPage",
  props: [''],
  data(){
    return{
      joinDialog: false,
    }
  },
})
</script>

<template>
  <div class="flex flex-center">
    <div class="column text-center">
      <div class="text-h4 text-bold q-pb-md">Playing with Friends?</div>
      <div class="text-h6 q-pb-sm">Campaign Settings</div>
      <div class="row justify-around">
        <q-btn class="bg-primary text-white" @click="joinDialog = true">Join</q-btn>
        <q-btn class="bg-primary text-white" >Create</q-btn>
      </div>
    </div>
  </div>

  <q-dialog v-model="joinDialog" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Join an Existing Campaign</div>
        <div class="text-subtitle1">Enter the campaign ID below</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
        filled
        autofocus
        standout
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Join Campaign" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
