<template>
  <v-container>
    <homework op="Assignment" />
    <v-select
      v-model="subject"
      :items="items"
      label="กรุณาเลือกงาน"
      solo
    ></v-select>
    <v-text-field v-model="work" label="รายการ" solo></v-text-field>
    <v-btn color="success" class="mr-4" @click="addTodo()"> เพิ่ม </v-btn>
    <v-container>
      <v-list dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in additems" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="error"
              @click="deleteTodo(i)"
            >
              <v-icon dark> mdi-minus </v-icon>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-container>
  </v-container>
</template>

<script>
import homework from '../components/homework.vue';
export default {
  data() {
    return {
      subject: "",
      work: "",
      items: ["WEd", "SA", "ML", "Buzz"],
      selectedItem: 1,
      additems: [],
    };
  },
  components:{
    homework,
  },

  methods: {
    addTodo() {
      //console.log(this.subject + this.work);
      this.additems.push({ text: this.subject + "" + this.work });
    },
    deleteTodo(index) {
      this.additems.splice(index, 1);
    },
  },
};
</script>

<style></style>
