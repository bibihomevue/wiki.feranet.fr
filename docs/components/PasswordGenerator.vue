<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

const passwordLength = ref<number>(12);
const includeDigits = ref<boolean>(true);
const includeSymbols = ref<boolean>(false);
const password = ref<string>('');
const isPast = ref<boolean>(false);

const generatePassword = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';
  const symbols = '!@#$%^&*()_+-={}[]|\\:;<>,.?/';

  let pool = chars;
  if (includeDigits.value) pool += digits;
  if (includeSymbols.value) pool += symbols;

  let newPassword = '';
  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    newPassword += pool[randomIndex];
  }

  password.value = newPassword;
}

const plus = () => passwordLength.value++;
const minus = () => passwordLength.value--;

const resetPassword = () => {
  passwordLength.value = 12;
  includeDigits.value = true;
  includeSymbols.value = false;
}

const pastPassword = () => {
  navigator.clipboard.writeText(password.value);
  isPast.value = true;
  setTimeout(() => isPast.value = false, 1000);
}

watch(passwordLength, (value) => {
  if (value < 0) passwordLength.value = 0;
  if (value > 99999) passwordLength.value = 99999;
});

watch([passwordLength, includeDigits, includeSymbols], () => generatePassword());

onMounted(() => generatePassword());
</script>

<template>
  <div class="container">

    <table>
      <thead>
        <tr>
          <th>Options</th>
          <th class="text-center">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Length</td>
          <td class="number">
            <button @click="minus">➖</button>
            <input type="number" class="text-center" v-model="passwordLength" min="3" max="99999">
            <button @click="plus">➕</button>
          </td>
        </tr>
        <tr>
          <td>Digits</td>
          <td class="text-center"><input type="checkbox" v-model="includeDigits"></td>
        </tr>
        <tr>
          <td>Symbols</td>
          <td class="text-center"><input type="checkbox" v-model="includeSymbols"></td>
        </tr>
      </tbody>
    </table>

    <div>
      <button @click="generatePassword">Generate</button>
      <button @click="resetPassword">Reset</button>
      <button @click="pastPassword">Past <span v-if="isPast">👍</span></button>
      <hr>
      <h3>{{ password }}</h3>
    </div>

  </div>
</template>

<style scoped>
.text-center {
  text-align: center;
}

.number {
  display: flex;
  justify-content: space-between;
}

.container {
  display: flex;
  align-items: center;
  width: 100%;
}

table {
  width: 100%;
}

.container>div {
  width: 100%;
  max-height: 10rem;
  overflow-x: auto;
  overflow-wrap: anywhere;
}

h3 {
  margin: 0;
}

button:hover {
  color: var(--vp-c-brand-light);
}

button:nth-child(2) {
  margin: 0 0.5rem;
}

input[type="checkbox"] {
  accent-color: var(--vp-c-brand-dark);
}
</style>
