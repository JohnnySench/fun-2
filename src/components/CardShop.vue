<script>
export default {
  name: 'CardShop',
  data() {
    return {}
  },
  props: {
    cardInfo: {
      type: Array,
      required: true,
    }
  },
  methods: {
    openDialog(card) {
      const cardInfo = {
        cardId: card.id,
        cardUrl: card.url,
        cardTitle: card.title
      }
      this.$emit('openDialog', cardInfo)
    }
  }
}
</script>

<template>
  <div class="photo-container">
    <v-card
        width="250px"
        height="250px"
        v-for="(card, index) in cardInfo"
        :key="card.id"
        @click="openDialog(card)"
    >
      <v-card-title
          v-text="card.title"
      />
      <v-card-text>
        <v-img
            :src="card.url"
        />
      </v-card-text>
    </v-card>
  </div>

</template>

<style scoped>
.photo-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}
</style>