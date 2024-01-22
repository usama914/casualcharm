<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <router-link to="/">
        <v-icon icon="mdi-circle-slice-6" />
        Caual Charm
      </router-link>
    </v-app-bar-title>
    <div class="ms-auto mr-3">
      <v-btn variant="outlined">
        Login
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>
//
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>