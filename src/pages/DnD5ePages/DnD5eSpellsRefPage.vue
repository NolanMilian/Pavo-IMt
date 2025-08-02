<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "DnD5eSpellsRefPage",
  data() {
    return {
      classValue: '',
      classes: [
        'bard',
        'cleric',
        'druid',
        'paladin',
        'ranger',
        'sorcerer',
        'warlock',
        'wizard',
      ],
      schoolValue: [],
      schools: [
        'conjuration',
        'necromancy',
        'evocation',
        'abjuration',
        'transmutation',
        'divination',
        'enchantment',
        'illusion'
      ],
      spellLevelValue: null,
      spellLevels: Array.from({length: 10}, (_, i) => ({label: (i).toString(), value: i})),
      spells: [],
      spell: {},
      spellDialog: false,
      spellRefinementDialog: true,
      errorDialog: false,
      searchErrorReport: '',
    }
  },
  methods: {
    async fetchResults(url, requestOptions) {
      try {
        const response = await fetch(url, requestOptions);
        return await response.json();
      } catch (error) {
        console.error('error', error);
        throw error; // Rethrow the error to handle it in the calling code
      }
    },
    async returnSpells() {
      try {
        const data = await this.fetchResults("https://www.dnd5eapi.co/api/spells");
        this.spells = data.results;
        console.log('spells: ', this.spells);
      } catch (error) {
        console.warn('Error in returnSpells: ', error)
      }
    },
    async returnClassSpells(characterClass, spellLevel) {
      try {
        const data = await this.fetchResults(`https://www.dnd5eapi.co/api/classes/${characterClass}/levels/${spellLevel}/spells`);
        this.spells = data.results;
        console.log('spells by class: ', this.spells);
      } catch (error) {
        console.warn('Error in returnClassSpells: ', error)
      }
    },
    async returnSchoolSpells(schoolOfMagic, spellLevel) {
      const level = spellLevel;
      console.log('level', level);
      const schools = schoolOfMagic;
      console.log('school', schools);
      const params = new URLSearchParams();
      if (level) {
        params.append('level', level)
      }
      if (schools.length > 0) {
        schools.forEach(school => params.append('school', school));
      }
      try {
        const data = await this.fetchResults(`https://www.dnd5eapi.co/api/spells?${params}`);
        console.log('params', params)
        this.spells = data.results;
        console.log('spells by school: ', this.spells);
      } catch (error) {
        console.warn('Error in returnSchoolSpells: ', error)
      }
    },
    async returnSpell(index) {
      try {
        this.spell = await this.fetchResults(`https://www.dnd5eapi.co/api/spells/${index}`);
        console.log('spell: ', this.spell);
        return this;
      } catch (error) {
        console.error('Error in returnSpell: ', error)
      }
    },
    async clickHandler(spellIndex) {
      try {
        await this.returnSpell(spellIndex);
        this.spellDialog = true;
      } catch (error) {
        console.error('Error in click handler: ', error)
      }
    },
    async searchHandler() {
      if (this.classValue && this.schoolValue?.length > 0) {
        this.errorHandler();
      } else if (this.classValue && this.spellLevelValue) {
        await this.returnClassSpells(this.classValue, this.spellLevelValue.value);
        this.spellRefinementDialog = false;
      } else if (this.schoolValue && this.spellLevelValue) {
        await this.returnSchoolSpells(this.schoolValue, this.spellLevelValue.value);
        this.spellRefinementDialog = false;
      } else {
        await this.returnSchoolSpells(this.schoolValue);
      }
    },
    errorHandler() {
      this.searchErrorReport = 'You cannot select Character Class and School of Magic'
      this.errorDialog = true;
    },
    reset() {
      this.schoolValue.length = 0;
      this.classValue = '';
      this.spellLevelValue = null;
      this.searchHandler();
    },
  },
  mounted() {
    this.returnSpells();
  },
  computed: {
    spellLevelFormatted() {
      switch (this.spell.level) {
        case 1:
          return '1st';
        case 2:
          return '2nd';
        case 3:
          return '3rd';
        default:
          return this.spell.level + 'th'
      }
    },
    spellSchoolAndLevel() {
      if (this.spell && this.spell.school) {
        return this.spell.level !== 0
          ? `${this.spellLevelFormatted}-level ${this.spell.school.name.toLowerCase()}`
          : `${this.spell.school.name} cantrip`;
      } else {
        return '';
      }
    },
    classesFormatted() {
      return this.spell.classes.map(n => n.name).join(', ');
    }
  },
})
</script>

<template>
  <div class="searchRefinement q-ml-lg q-mt-lg">
    <q-btn class="bg-primary text-white" icon="filter_list" label="Search Refinement"
           @click="spellRefinementDialog = true"/>
    <span class="bg-warning text-white text-h6 q-ml-lg">
      Spells Loaded: {{ spells.length }}
    </span>
    <div class="reset">
      <q-btn class="reset q-mt-md" label="Reset Spells" @click="reset"></q-btn>
    </div>
  </div>

  <div class="spellsRef q-mx-auto items-center" style="width: 1440px">
    <div class="q-gutter-sm row">
      <div v-for="data in spells" :key="data.index" class="text-center">
        <q-btn :label="data.name" class="bg-primary text-white" @click="clickHandler(data.index)"/>
      </div>
    </div>
  </div>

  <!--Spell Refinement Dialog-->
  <q-dialog v-model="spellRefinementDialog" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Search Refinement</div>
      </q-card-section>

      <q-card-section class="q-pt-none q-col-gutter-md justify-center items-center content-center">
        <div class="justify-center q-gutter-md content-center column">
          <span
            class="text-subtitle1">Refine search by either <em>Character Class</em> or <em>School of Magic</em></span>
          <q-select
            v-model="classValue"
            :options="classes"
            behavior="default"
            clearable
            label="Character Class"
            standout
          />
          <q-select
            v-model="schoolValue"
            :options="schools"
            behavior="default"
            clearable
            label="School of Magic"
            multiple
            standout
            use-chips
          />
          <q-separator class="q-mt-lg" inset/>
          <q-select
            v-model="spellLevelValue"
            :options="spellLevels"
            behavior="default"
            clearable
            label="Spell Level (not required)"
            standout
          />

        </div>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn v-close-popup flat label="Cancel"/>
        <q-btn flat label="Reset" @click="reset"/>
        <q-btn flat label="Refine Search" @click="searchHandler"/>
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!--  Spell Refinement Error Dialog-->
  <q-dialog v-model="errorDialog" persistent transition-hide="scale" transition-show="scale">
    <q-card class="bg-negative text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h5">Error</div>
      </q-card-section>

      <q-card-section class="q-pt-none text-bold text-h6">
        {{ searchErrorReport }}
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn v-close-popup flat label="OK"/>
      </q-card-actions>
    </q-card>
  </q-dialog>

  <!--  Spell Dialog-->
  <q-dialog v-model="spellDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6 q-pr-md">{{ spell.name }}</div>
        <span class="schoolAndLevel q-pr-xs">{{ spellSchoolAndLevel }}</span>
        <span class="ritual">{{ spell.ritual ? '(ritual)' : '' }}</span>
        <div class="castingTime"><span
          class="text-bold castingTimeLabel label">Casting Time: </span>{{ spell.casting_time }}
        </div>
        <div class="range"><span class="text-bold rangeLabel label">Range: </span>{{ spell.range }}</div>
        <div class="components q-gutter-xs q-my-none">
          <span class="text-bold componentsLabel label">Components: </span>
          <span v-for="component in spell.components" :key="component" class="component">{{ component }}</span>
          <span class="material">({{ spell.material }})</span>
        </div>
        <div class="duration"><span class="durationLabel label text-bold">Duration: </span>{{ spell.duration }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="descLabel label text-bold">Description:</div>
        <div v-for="desc in spell.desc" :key="desc" class="desc q-pl-md">{{ desc }}</div>
        <div v-if="spell.higher_level.length" class="higher_levelGroup">
          <div class="higher_levelLabel label text-bold">High level description</div>
          <div v-for="higher in spell.higher_level" :key="higher" class="higher_level q-pl-md">{{ higher }}</div>
        </div>
        <div class="classesLabel label text-bold">Classes:</div>
        <div class="classes q-pl-md">{{ classesFormatted }}</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn v-close-popup color="primary" flat label="OK"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
