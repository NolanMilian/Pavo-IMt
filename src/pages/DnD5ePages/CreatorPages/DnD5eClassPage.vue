<script>
import {defineComponent} from 'vue'
import {useUserStore} from "stores/user-store";

export default defineComponent({
  name: "DnD5eClassPage",
  props: ['id'],
  data() {
    return {
      userStore: useUserStore(),
      activeCharacter: {},
      numberOptions: Array.from({ length: 20 }, (_, i) => ({ label: (i + 1).toString(), value: i + 1 })),

      classLevel: 1,
      className: '',
      subClassName: '',

      classData: {
        classLevelString: '',
        classString: '',
        TotalLevel: 1,
      },

    }
  },
  methods: {
    update(){
      if (this.className !== '' && this.classLevel !== 0)
        this.userStore.updateCharacterVariable(this.id, 'classData', this.classData)
    },

    createClass() {
      this.classData.classes = [];
      let classObj = {
        classLevel: this.classLevel,
        className: this.className,
        subClassName: this.subClassName,
      }
      this.classData.classLevelString = `${this.className} ${this.classLevel}`;
      this.classData.classString = `${this.className}/${this.subClassName}`;
      this.classData.totalLevel = this.classLevel
      this.classData.classes.push(classObj);
      this.update()
    },

  },
  updated() {


  },

  beforeUnmount() {
    this.createClass();

  },
  mounted() {
    // this.userStore.activateCharacter(this.id);
    this.activeCharacter = this.userStore.activeCharacter;
    this.classData = this.activeCharacter.classData;
    // console.log('Character ID: ', this.id);
  }
})
</script>

<template>
<!-- TODO: make a much better system for choosing classes -->
  <div class="flex flex-center q-gutter-md content-start items-start">
    <div class="characterClass column self-start">
      <span class="label text-h6">
        <strong>Character Class</strong>
      </span>
      <q-input standout debounce="500" v-model="className" style="width: 300px"/>
    </div>
    <div class="characterSubClass column self-start">
      <span class="label text-h6">
        <strong>Character Subclass</strong>
      </span>
      <q-input standout debounce="500" v-model="subClassName" style="width: 300px"/>
    </div>
    <div class="characterClassLevel column self-start">
      <span class="label text-h6">
        <strong>Character Class Level</strong>
      </span>
<!--      <q-input-->
<!--        standout-->
<!--        min="1"-->
<!--        max="20"-->
<!--        debounce="500"-->
<!--        v-model="classLevel"-->
<!--        type="number"-->
<!--        :rules="[val => val > 0 && val <= 20 || 'Number must be greater than 0, and less than 20']"-->
<!--        style="width: 300px"/>-->
      <q-select
        standout
        v-model="classLevel"
        :options="numberOptions"
        emit-value
        map-options
      />
    </div>
  </div>
</template>

<style scoped>

</style>
