<template>
  <v-app>
    <v-app-bar app color="success" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://upload.wikimedia.org/wikipedia/th/thumb/b/b7/MJU_LOGO.svg/1200px-MJU_LOGO.svg.png"
          transition="scale-transition"
          width="50"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="/" text>
        <span class="mr-2">หน้าแรก</span>
      </v-btn>
      <v-btn href="/todo" text>
        <span class="mr-2">ลงทะเบียนรายวิชา</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
