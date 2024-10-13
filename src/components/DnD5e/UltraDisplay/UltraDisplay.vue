<script>
import {defineComponent} from 'vue'
import DisplayBox from "components/DnD5e/DisplayBox.vue";
import ButtonGroup from "components/DnD5e/UltraDisplay/Buttons/ButtonGroup.vue";

export default defineComponent({
  name: "UltraDisplay",
  components: {ButtonGroup, DisplayBox},
  data() {
    return {
      primaryTab: 'actions',

      actionsGroup: 'all',
      actionsOptions: [
        {label: 'ALL', value: 'all'},
        {label: 'ATTACK', value: 'attack'},
        {label: 'ACTION', value: 'action'},
        {label: 'BONUS ACTION', value: 'bonus action'},
        {label: 'REACTION', value: 'reaction'},
        {label: 'OTHER', value: 'other'},
        {label: 'LIMITED USE', value: 'limited use'},
      ],

      featuresAndTraitsGroup: 'all',
      featuresAndTraitsOptions: [
        {label: 'ALL', value: 'all'},
        {label: 'CLASS FEATURES', value: 'class features'},
        {label: 'RACIAL TRAITS', value: 'racial traits'},
        {label: 'FEATS', value: 'feats'},
      ],

      descriptionGroup: 'all',
      descriptionOptions: [
        {label: 'ALL', value: 'all'},
        {label: 'BACKGROUND', value: 'background'},
        {label: 'CHARACTERISTICS', value: 'characteristics'},
        {label: 'APPEARANCE', value: 'appearance'},
      ],

      notesGroup: 'all',
      notesOptions: [
        {label: 'ALL', value: 'all'},
        {label: 'ORGANIZATIONS', value: 'organizations'},
        {label: 'ALLIES', value: 'allies'},
        {label: 'ENEMIES', value: 'enemies'},
        {label: 'BACKSTORY', value: 'backstory'},
        {label: 'OTHER', value: 'other'},
      ],
    }
  },
})
</script>

<template>
  <display-box
    box-width="641px"
    box-min-width="641px"
    box-max-width="641px"
    box-height="576px"
    box-min-height="576px"
    box-max-height="576px"
  >
    <div class="ultraDisplay">
      <div class="">
        <div class="q-gutter-y-md">
          <q-card>
            <q-tabs
              v-model="primaryTab"
              dense
              :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
              active-color="red-14"
              indicator-color="red-14"
              align="justify"
              narrow-indicator
            >
              <q-tab class="tab q-px-xs" name="actions" label="ACTIONS" />
              <q-tab class="tab q-px-xs" name="spells" label="SPELLS" />
              <q-tab class="tab q-px-xs" name="inventory" label="INVENTORY" />
              <q-tab class="tab q-px-xs" name="features&traits" label="FEATURES & TRAITS" />
              <q-tab class="tab q-px-xs" name="description" label="DESCRIPTION" />
              <q-tab class="tab q-px-xs" name="notes" label="NOTES" />
              <q-tab class="tab q-px-xs" name="extras" label="EXTRAS" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="primaryTab" animated>
              <q-tab-panel name="actions">
                <button-group
                  v-model="actionsGroup"
                  :options="actionsOptions"
                />
                <div></div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="spells">
                <div class="text-h6">SPELLS</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="inventory">
                <div class="text-h6">INVENTORY</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="features&traits">
                <button-group
                  v-model="featuresAndTraitsGroup"
                  :options="featuresAndTraitsOptions"
                />
                <div></div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="description">
                <button-group
                  v-model="descriptionGroup"
                  :options="descriptionOptions"
                />
                <div></div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="notes">
                <button-group
                  v-model="notesGroup"
                  :options="notesOptions"
                />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="extras">
                <div class="text-h6">EXTRAS</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </div>
    </div>
  </display-box>
</template>

<style scoped>
.tab {
  font-family: $stat-DnD5e-font-family;
  font-size: 8px;
  //padding-left: 4px;
  //padding-right: 4px;
}
q-tab {
  font-size: 8px;
}
</style>
