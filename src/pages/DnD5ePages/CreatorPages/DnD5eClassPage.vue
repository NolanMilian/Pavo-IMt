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
      saveIcon: false,
      numberOptions: Array.from({length: 20}, (_, i) => ({label: (i + 1).toString(), value: i + 1})),

      classes: [],
      subClasses: [],


      classLevel: '--',
      className: '',
      subClassName: '',

      classData: {
        classLevel: 0,
        className: '',
        subClassName: '',
        classLevelString: '',
        classString: '',
        totalLevel: 0,
      },

    }
  },
  methods: {
    async fetchResults(url, requestOptions) {
      let resultData;
      await fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
          resultData = data;
        })
        .catch(error => console.error('Error in fetch request: ', error))
      return resultData;
    },
    returnClasses() {
      this.fetchResults("https://www.dnd5eapi.co/api/classes")
        .then(data => {
          // console.log('data: ', data)
          this.classes = data.results.map(c => c.name);
          // console.log('classes: ', this.classes)
        })
    },
    returnSubClasses(index) {
      this.fetchResults(`https://www.dnd5eapi.co/api/classes/${index.toLowerCase()}/subclasses`)
        .then(data => {
          this.subClasses = data.results.map(s => s.name)
        })
    },
    handleBlur() {
      this.returnSubClasses(this.className)
    },
    saveHandler(){
      this.saveIcon = true;
      setTimeout(() => {this.saveIcon = false},500);
    },
    updateClasses() {
      // this.createClass();
      this.userStore.updateCharacterVariable(this.id, 'classData', this.classData);
      this.saveHandler();
    },

    createClass() {
      // this.classData.classes = [];
      // let classObj = {
      //   classLevel: this.classLevel.value,
      //   className: this.className,
      //   subClassName: this.subClassName,
      // }
      // console.log('classObj', classObj)
      this.classData.classLevel = this.classLevel.value;
      this.classData.className = this.className;
      this.classData.subClassName = this.subClassName;
      this.classData.totalLevel = this.classLevel.value;
      this.classData.classLevelString = `${this.className} ${this.classLevel.value}`;
      this.classData.classString = `${this.className}/${this.subClassName}`;
      // this.classData.classes.push(classObj);
      this.updateClasses()
    },

  },
  mounted() {
    this.returnClasses();
    this.activeCharacter = this.userStore.activeCharacter;
    this.classData = this.activeCharacter.classData;
    if (this.classData) {
      this.className = this.classData.className;
      this.subClassName = this.classData.subClassName;
      this.classLevel = this.classData.classLevel;
    }

  }
})
</script>

<template>
  <div class="flex flex-center q-gutter-md content-start items-start">
    <div class="characterClass column self-start">
      <span class="label text-h6">
        <strong>Character Class</strong>
      </span>
      <q-select
        v-model="className"
        :options="classes"
        behavior="menu"
        label="Class"
        standout
        style="width: 250px"
        @blur="handleBlur"
      />
    </div>
    <div
      class="characterSubClass column self-start">
      <span class="label text-h6">
        <strong>Character Subclass</strong>
      </span>
      <q-select
        v-model="subClassName"
        :options="subClasses"
        behavior="menu"
        label="subclass"
        standout
        style="width: 250px"
      />
    </div>
    <div class="characterClassLevel column self-start">
      <span class="label text-h6">
        <strong>Character Class Level</strong>
      </span>
      <q-select
        v-model="classLevel"
        :options="numberOptions"
        map-options
        standout
        @blur="createClass"
      />
      <q-icon v-if="saveIcon" class="q-pt-md" name="save" size="24px"/>
    </div>
  </div>
</template>

<style scoped>

</style>
