<script>
import {defineComponent} from 'vue'
import {useCharacterStore} from "stores/character-store";
import fifthEditionCharacterSheetConverter from "src/models/FifthEditionCharacterSheetConverter";
import {db, storage} from "boot/firebase";

export default defineComponent({
  name: "DnD5eDescriptionPage",
  props: ['id'],
  data() {
    return {
      characterStore: useCharacterStore(),
      activeCharacter: {},
      avatarDialog: false,
      userUpload: null,
      uploadingState: false,
      characterName: '',
      saveIcon: false,
      alignmentModel: 'Choose an Option',
      alignmentOptions: [
        'Chaotic Evil',
        'Chaotic Good',
        'Chaotic Neutral',
        'Lawful Evil',
        'Lawful Good',
        'Lawful Neutral',
        'Neutral Evil',
        'Neutral Good',
        'Neutral'
      ],
      faithModel: '',
      lifestyleModel: 'Choose an Option',
      lifestyleOptions: [
        'Wretched',
        'Squalid (1SP)',
        'Poor (2SP)',
        'Modest (1GP)',
        'Comfortable (2GP)',
        'Wealthy (4GP)',
        'Aristocratic (10GP minimum)'
      ],
      physicalCharacteristics: {
        hair: '',
        skin: '',
        eyes: '',
        height: '',
        weight: '',
        age: '',
        gender: '',
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
          // console.log('data: ',data);
        })
        .catch(error => console.error('error', error));
      return resultData;
    },
    returnBackgrounds() {
      this.fetchResults("https://www.dnd5eapi.co/api/backgrounds")
        .then(data => {
          this.races = data.results;
          this.stringOptions = this.races.map(r => r.name)
        });
    },
    returnRaceSubTypes(index) {
      this.fetchResults(`https://www.dnd5eapi.co/api/races/${index.toLowerCase()}/subraces`)
        .then(data => {
          //this.subRaces = data.subraces.map(s => s.name)
          this.subRaces = data.results.map(s => s.name)
        });
    },
    handleBlur() {
      this.returnRaceSubTypes(this.characterRace)
      if (this.subRaces.length === 0)
        this.update();
    },
    update() {
      if (this.characterName)
        this.characterStore.updateCharacterVariable(this.id, 'name', this.characterName);
      this.saveHandler();
    },
    saveHandler() {
      this.saveIcon = true;
      setTimeout(() => {
        this.saveIcon = false
      }, 500);
    },
    filterFn(val, update) {
      if (val === '') {
        update(() => {
          this.options = this.stringOptions
        })
        return
      }
      update(() => {
        const needle = val.toLowerCase()
        this.options = this.stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    },

    handleFileUpload(file) {
      this.uploadingState = true;

      this.characterStore.uploadCharacterAvatar(this.id, file);

      setTimeout(() => {this.uploadingState = false; this.importSuccessDialog = true;}, 500)
    },

    fileUploadError(error) {
      this.importError = error;
      this.importErrorDialog = true;
      this.cancelFileUpload();
    },

    cancelFileUpload() {
      this.userUpload = null;
      this.uploadingState = false;
    },

  },
  computed: {
    alignmentDesc() {
      const alignmentDesc = [
        'Chaotic evil (CE) creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons, red dragons, and orcs are chaotic evil.',
        'Chaotic good (CG) creatures act as their conscience directs, with little regard for what others expect. Copper dragons, many elves, and unicorns are chaotic good.',
        'Chaotic neutral (CN) creatures follow their whims, holding their personal freedom above all else. Many barbarians and rogues, and some bards, are chaotic neutral.',
        'Lawful evil (LE) creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order. Devils, blue dragons, and hobgoblins are lawful evil.',
        'Lawful good (LG) creatures can be counted on to do the right thing as expected by society. Gold dragons, paladins, and most dwarves are lawful good.',
        'Lawful neutral (LN) individuals act in accordance with law, tradition, or personal codes. Many monks and some wizards are lawful neutral.',
        'Neutral evil (NE) is the alignment of those who do whatever they can get away with, without compassion or qualms. Many drow, some cloud giants, and goblins are neutral evil.',
        'Neutral good (NG) folk do the best they can to help others according to their needs. Many celestials, some cloud giants, and most gnomes are neutral good.',
        'Neutral (N) is the alignment of those who prefer to steer clear of moral questions and don\'t take sides, doing what seems best at the time. Lizardfolk, most druids, and many humans are neutral.'
      ]
      return false
    }
  },
  mounted() {
    this.returnBackgrounds();
    this.activeCharacter = this.characterStore.activeCharacter;
    this.characterName = this.activeCharacter.name;
    // this.characterRace = this.activeCharacter.race;
  },

})
</script>

<template>
  <div class="flex flex-center">
    <div class="characterName column q-gutter-md">

<!--      Character Name and Avatar-->
      <div class="characterNameAndAvatar q-mx-auto q-mb-lg row q-gutter-md items-end">
        <div class="characterAvatar">
          <q-btn square dense flat @click="avatarDialog = true">
            <q-avatar square color="grey" text-color="white" size="88px">
              <img v-if="!!characterStore.activeCharacter.avatarURL" :src="characterStore.activeCharacter.avatarURL" alt="character avatar">
              <q-icon v-else name="add"/>
            </q-avatar>
          </q-btn>
        </div>
        <div class="characterName">
        <span class="label text-h6">
          <strong>Character Name</strong>
        </span>
          <q-input v-model="characterName" debounce="500" standout style="width: 300px" @blur="update">
            <template v-slot:append>
              <q-icon v-if="saveIcon" name="save"/>
            </template>
          </q-input>
        </div>
      </div>

<!--      Race Extras-->

<!--      Background-->
      <div class="">

      </div>

<!--Character Details-->
      <q-list bordered class="q-pt-sm q-px-sm">
        <div class="characterDetails">
          <q-expansion-item
            caption="Alignment - Faith - Lifestyle"
            caption-lines="1"
            class="details"
            expand-separator
            header-class="q-pt-none q-px-none"
            icon="perm_identity"
            label="Character Details"
          >
            <q-card>
              <q-card-section>
                <div class="alignment">
                  <div class="label">Alignment</div>
                  <q-select
                    v-model="alignmentModel"
                    :options="alignmentOptions"
                    class=""
                    outlined
                  />
                  {{ }}
                </div>
              </q-card-section>
              <q-card-section>
                <div class="faith">
                  <div class="label">Faith</div>
                  <q-input v-model="faithModel"
                           class=""
                           outlined
                  />
                </div>
              </q-card-section>
              <q-card-section>
                <div class="lifestyle">
                  <div class="label">Lifestyle</div>
                  <q-select
                    v-model="lifestyleModel"
                    :options="lifestyleOptions"
                    class=""
                    outlined
                  />
                  {{ }}
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </q-list>

<!--Physical Characteristics-->
      <q-list bordered class="q-pt-sm q-px-sm">
        <div class="PhysicalCharacteristics">
          <q-expansion-item
            caption="Hair - Skin - Eyes - Height - Weight - Age - Gender"
            caption-lines="1"
            class="details"
            expand-separator
            header-class="q-pt-none q-px-none"
            icon="perm_identity"
            label="Physical Characteristics"
          >
            <q-card>
              <q-card-section>
                <div class="hair">
                  <div class="label">Hair</div>
                  <q-input v-model="physicalCharacteristics.hair"
                           class=""
                           outlined
                  />
                </div>
              </q-card-section>
            </q-card>
            <q-card>
              <q-card-section>
                <div class="skin">
                  <div class="label">Skin</div>
                  <q-input v-model="physicalCharacteristics.skin"
                           class=""
                           outlined
                  />
                </div>
              </q-card-section>
            </q-card>
            <q-card>
              <q-card-section>
                <div class="eyes">
                  <div class="label">Eyes</div>
                  <q-input v-model="physicalCharacteristics.eyes"
                           class=""
                           outlined
                  />
                </div>
              </q-card-section>
            </q-card>
            <q-card>
              <q-card-section>
                <div class="height">
                  <div class="label">Height</div>
                  <q-input v-model="physicalCharacteristics.height"
                           class=""
                           outlined
                  />
                </div>
              </q-card-section>
            </q-card>
            <q-card>
              <q-card-section>
                <div class="weight">
                  <div class="label">Weight (lbs)</div>
                  <q-input v-model="physicalCharacteristics.weight"
                           class=""
                           outlined
                           type="number"
                  />
                </div>
              </q-card-section>
            </q-card>
            <q-card>
              <q-card-section>
                <div class="age">
                  <div class="label">Age (Years)</div>
                  <q-input v-model="physicalCharacteristics.age"
                           class=""
                           outlined
                           type="number"
                  />
                </div>
              </q-card-section>
            </q-card>
            <q-card>
              <q-card-section>
                <div class="gender">
                  <div class="label">Gender</div>
                  <q-input v-model="physicalCharacteristics.gender"
                           class=""
                           outlined
                  />
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </q-list>

<!--Personal Characteristics-->
      <q-list bordered class="q-pt-sm q-px-sm">
        <div class="personalCharacteristics">
          <q-expansion-item
            caption="Personality - Ideals - Bonds - Flaws"
            caption-lines="1"
            class="details"
            expand-separator
            header-class="q-pt-none q-px-none"
            icon="perm_identity"
            label="Personal Characteristics"
          >
            <q-card>
              <q-card-section>
                <div class="personality">
                  <div class="label">Personality</div>
                  <q-input v-model="personalityModel"
                           class=""
                           outlined
                  />
                </div>
              </q-card-section>
              <q-card-section>
                <div class="ideals">
                  <div class="label">Ideals</div>
                  <q-input v-model="idealsModel"
                           class=""
                           outlined
                  />
                </div>
              </q-card-section>
              <q-card-section>
                <div class="bonds">
                  <div class="label">Bonds</div>
                  <q-input v-model="bondsModel"
                           class=""
                           outlined
                  />
                </div>
              </q-card-section>
              <q-card-section>
                <div class="flaws">
                  <div class="label">Flaws</div>
                  <q-input v-model="flawsModel"
                           class=""
                           outlined
                  />
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </q-list>

<!--Notes-->
      <q-list bordered class="q-pt-sm q-px-sm">
        <div class="Notes">
          <q-expansion-item
            caption="Organizations - Allies - Enemies - Backstory - Other"
            caption-lines="1"
            class="details"
            expand-separator
            header-class="q-pt-none q-px-none"
            icon="perm_identity"
            label="Notes"
          >
            <q-card>
              <q-card-section>
                <div class="organizations">
                  <div class="label">Organizations</div>
                  <q-input v-model="organizationsModel"
                           class=""
                           outlined
                  />
                </div>
              </q-card-section>
              <q-card-section>
                <div class="allies">
                  <div class="label">Allies</div>
                  <q-input v-model="alliesModel"
                           class=""
                           outlined
                  />
                </div>
              </q-card-section>
              <q-card-section>
                <div class="enemies">
                  <div class="label">Enemies</div>
                  <q-input v-model="enemiesModel"
                           class=""
                           outlined
                  />
                </div>
              </q-card-section>
              <q-card-section>
                <div class="backstory">
                  <div class="label">Backstory</div>
                  <q-input v-model="backstoryModel"
                           class=""
                           outlined
                  />
                </div>
              </q-card-section>
              <q-card-section>
                <div class="other">
                  <div class="label">Other</div>
                  <q-input v-model="otherModel"
                           class=""
                           outlined
                  />
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </q-list>
    </div>
  </div>


<!--Avatar Upload Dialog-->
<!--  TODO: add remove photo button when there is a photo uploaded-->
  <q-dialog v-model="avatarDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">Choose Your Avatar</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-file v-model="userUpload" accept=".jpg" max-file-size="3145728" bottom-slots counter filled label="Character Avatar" max-files="1" :loading="uploadingState">
          <!--          <template v-slot:prepend>-->
          <!--            <q-icon name="cloud_upload" @click.stop.prevent />-->
          <!--          </template>-->
          <template v-if="uploadingState" v-slot:loading>
            <q-spinner-hourglass class="on-right"/>
          </template>
          <template v-else v-slot:append>
            <q-icon class="cursor-pointer" name="close" @click.stop.prevent="userUpload = null"/>
          </template>

<!--          <template v-slot:hint>-->
<!--            Only .JSON files are accepted-->
<!--          </template>-->
        </q-file>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn v-close-popup flat label="Cancel" @click="cancelFileUpload"/>
        <!--        <q-btn flat label="Upload Character" @click="uploadFile(userUpload)" />-->
        <q-btn :loading="uploadingState" color="primary" flat label="Upload Avatar" @click="handleFileUpload(userUpload)">
          <!--        Button-->
          <template v-slot:loading>
            <q-spinner-hourglass class="on-left"/>
            Uploading...
          </template>
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style scoped>
.descriptions {
  max-width: 500px;
  width: 100%;
}

.details {
  width: 500px;
}

.label {
  font-weight: bold;
  font-size: 15px;
}
</style>
