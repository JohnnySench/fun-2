<script>
export default {
  name: "CardDialog",
  data() {
    return {
      localVisible: false
    }
  }
}
</script>

<template>
  <v-dialog
      width="auto"
  >
    <v-card>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="this.$emit('closeDialog',false)">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>

</style>