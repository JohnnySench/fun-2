<script>
import {mapGetters, mapActions} from "vuex";
import CardShop from "../components/CardShop.vue";
import CardDialog from "../components/CardDialog.vue";

export default {
  name: "MainPage",
  data() {
    return {
      dialogVisible: false,
      dialogData: {},
    }
  },
  components: {CardDialog, CardShop},
  computed: {
    ...mapGetters([
      'getPhotoInfo'
    ])
  },
  methods: {
    ...mapActions([
      'initPhotoInfo'
    ]),
    closeDialog(value) {
      this.dialogVisible = value;
    },
    openDialog(data) {
      this.dialogVisible = true

    }
  },
  async mounted() {
    await this.initPhotoInfo();
  }
}
</script>

<template>
  <h1>Это главная страница с фотографиями</h1>
  <CardShop @openDialog="openDialog" :card-info="getPhotoInfo"/>
  <CardDialog
      v-model="dialogVisible"
      @closeDialog="closeDialog"
  />
</template>

<style scoped>

</style>