<template>
  <div class="page">
    <v-container>
      <v-row justify="space-between">
        <slot name="header">
          <v-col justify="center">
          <div>
            Uups, there`s no header now!
          </div>
          </v-col>
        </slot>
        <slot name="content">
          <v-col justify="center">
            <div>
              Uups, there`s no content now!
            </div>
          </v-col>
        </slot>
        <slot name="futer">
          <v-col justify="center">
            <div>
              Uups, there`s no futer now!
            </div>
          </v-col>
        </slot>
      </v-row>
    </v-container>
  </div>
</template>


<script>

  export default {
    name: 'NamedSlots',
  };
</script>
