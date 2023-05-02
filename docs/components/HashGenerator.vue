<script setup lang="ts">
import { ref } from 'vue';
import md5 from 'crypto-js/md5';
import sha1 from 'crypto-js/sha1';
import sha256 from 'crypto-js/sha256';

const hash = ref('');
const reset = () => hash.value = '';

const items = [
  { name: 'MD5', hash: md5 },
  { name: 'SHA1', hash: sha1 },
  { name: 'SHA256', hash: sha256 },
];
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Algorithm</th>
        <th>
          <div>
            <input v-model="hash" placeholder="Enter text here ...">
            <button @click="reset" v-show="hash !== ''">❌</button>
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ hash ? item.hash(hash) : '' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
th:nth-child(2) {
  width: 100%;
}

th>div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

th>div>input {
  width: 100%;
  margin-right: 1rem;
}
</style>