<template>
  <v-container>
    <v-container>
      <homework op="ลงทะเบียนรายวิชา" />
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field v-model="namestu" label="ชื่อ" solo></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field v-model="lastname" label="นามสกุล" solo></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field v-model="cs" label="คณะ" solo></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field v-model="cs2" label="สาขา" solo></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="idstu"
            label="รหัสนักศึกษา"
            solo
          ></v-text-field>
        </v-col>
      </v-row>

      <v-select
        v-model="subject"
        :items="items"
        label="ลงทะเบียนวิชา"
        solo
      ></v-select>

      <v-btn color="success" class="mr-4" @click="addTodo()"> เพิ่ม </v-btn>
    </v-container>
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
import homework from "../components/homework.vue";
export default {
  data() {
    return {
      subject: "",
      namestu: "",
      lastname: "",
      cs: "",
      cs2: "",
      idstu: "",
      items: ["cs313", "cs231", "cs232", "ct301"],
      selectedItem: 1,
      additems: [],
    };
  },
  components: {
    homework,
  },

  methods: {
    addTodo() {
      //console.log(this.subject + this.work);
      this.additems.push({
        text:
          this.subject +
          " " +
          this.namestu +
          " " +
          this.lastname +
          " " +
          this.idstu +
          " " +
          this.cs +
          " " +
          this.cs2,
      });
    },
    deleteTodo(index) {
      this.additems.splice(index, 1);
    },
  },
};
</script>

<style></style>
