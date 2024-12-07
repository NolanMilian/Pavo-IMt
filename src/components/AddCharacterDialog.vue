<script>
import {defineComponent} from 'vue'
import Character from "src/models/Character";

export default defineComponent({
  name: "AddCharacterDialog",
  props: [''],
  methods: {},
  data(){
    return{
      newCharacter: new Character(),
      step: 1,
    }
  },
})
</script>

<template>
  <q-dialog>
    <q-card>
      <q-toolbar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
        </q-avatar>

        <q-toolbar-title><span class="text-weight-bold">Quasar</span> Framework</q-toolbar-title>

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

<!--      <q-card-section>-->
<!--        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.-->
<!--      </q-card-section>-->
      <div class="q-pa-md">
        <q-stepper
          v-model="step"
          ref="stepper"
          color="primary"
          animated
        >
          <q-step
            :name="1"
            title="Select campaign settings"
            icon="settings"
            :done="step > 1"
          >
            For each ad campaign that you create, you can control how much you're willing to
            spend on clicks and conversions, which networks and geographical locations you want
            your ads to show on, and more.
          </q-step>

          <q-step
            :name="2"
            title="Create an ad group"
            caption="Optional"
            icon="create_new_folder"
            :done="step > 2"
          >
            An ad group contains one or more ads which target a shared set of keywords.
          </q-step>

          <q-step
            :name="3"
            title="Ad template"
            icon="assignment"
            disable
          >
            This step won't show up because it is disabled.
          </q-step>

          <q-step
            :name="4"
            title="Create an ad"
            icon="add_comment"
          >
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with
            your ads, find out how to tell if they're running and how to resolve approval issues.
          </q-step>

          <template v-slot:navigation>
            <q-stepper-navigation>
              <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" />
              <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
            </q-stepper-navigation>
          </template>
        </q-stepper>
      </div>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
