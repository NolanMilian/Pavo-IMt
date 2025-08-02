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
      numberOptions: Array.from({length: 20}, (_, i) => ({label: (i + 1).toString(), value: i + 1})),

      classes: [],
      subClasses: [],


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
          console.log('data: ', data)
          this.classes = data.results.map(c => c.name);
          console.log('classes: ', this.classes)
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
      if (this.subClasses === 0)
        this.update();
    },
    update() {
      this.createClass();
      this.userStore.updateCharacterVariable(this.id, 'classData', this.classData);
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
  mounted() {
    this.returnClasses();
    this.activeCharacter = this.userStore.activeCharacter;
    this.classData = this.activeCharacter.classData;
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
        @blur="update"
      />
    </div>
    <div class="characterClassLevel column self-start">
      <span class="label text-h6">
        <strong>Character Class Level</strong>
      </span>
      <q-select
        v-model="classLevel"
        :options="numberOptions"
        emit-value
        map-options
        standout
      />
    </div>
  </div>
</template>

<style scoped>

</style>
