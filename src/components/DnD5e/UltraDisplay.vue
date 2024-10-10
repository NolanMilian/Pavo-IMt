<script>
import {defineComponent} from 'vue'
import DisplayBox from "components/DnD5e/DisplayBox.vue";

export default defineComponent({
  name: "UltraDisplay",
  components: {DisplayBox},
  data() {
    return {
      primaryTab: 'actions',
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
      <div class="q-pa-md">
        <div class="q-gutter-y-md" style="max-width: 600px">
          <q-card>
            <q-tabs
              v-model="primaryTab"
              dense
              :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
              active-color="primary"
              indicator-color="primary"
              align="justify"
              narrow-indicator
            >
              <q-tab class="tab text-subtitle2" name="actions" label="ACTIONS" />
<!--              <q class="tab" -tab name="spells" label="SPELLS" />-->
              <q-tab class="tab" name="inventory" label="INVENTORY" />
              <q-tab class="tab" name="features&traits" label="FEATURES & TRAITS" />
              <q-tab class="tab" name="description" label="DESCRIPTION" />
              <q-tab class="tab" name="notes" label="NOTES" />
              <q-tab class="tab" name="extras" label="EXTRAS" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="primaryTab" animated>
              <q-tab-panel name="actions">
                <div class="text-h6">Mails</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="spells">
                <div class="text-h6">Alarms</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="inventory">
                <div class="text-h6">Movies</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="features&traits">
                <div class="text-h6">Movies</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="description">
                <div class="text-h6">Movies</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="notes">
                <div class="text-h6">Movies</div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-tab-panel>

              <q-tab-panel name="extras">
                <div class="text-h6">Movies</div>
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
  font-size: 10px;
}
</style>
