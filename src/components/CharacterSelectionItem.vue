<script>
import {defineComponent} from 'vue'
import DisplayBox from "components/DnD5e/BaseComponents/DisplayBox.vue";
import DnD5eCharacter from "src/models/DnD5eCharacter";

export default defineComponent({
  name: "CharacterSelectionItem",
  components: {DisplayBox},
  props: ['characterObj'],
  data() {
    return{
      character: new DnD5eCharacter(),
    }
  },
  methods: {
    viewCharacter() {},
    editCharacter() {},
    deleteCharacter() {},
  },
  created() {
    console.log('character', this.character);
  }
})
</script>

<template>
  <display-box
    box-width="375px"
    box-max-width="375px"
    box-min-width="375px"
    box-height="150px"
    box-max-height="150px"
    box-min-height="150px"
    border-rad="0"
    border-color="black"
    bg-color="darkgray"
  >
    <div class="box">

      <div class="q-px-md">
        <div class="text-left text-bold text-h6">{{ characterObj.name }}</div>
        <div class="row">
          <div class="col text-subtitle1">Level 13 | High Elf | Wizard School of Evocation</div>
        </div>
      </div>
      <div class="q-mt-md">
        <q-btn-group
          spread
          square
          class="btnGroup"
        >
          <q-btn label="VIEW" />
          <q-btn label="EDIT" />
          <q-btn label="DELETE" text-color="negative"/>
        </q-btn-group>
      </div>
    </div>
  </display-box>
</template>

<style scoped>
.btnGroup {
  background-color: lightgray;
}
</style>
