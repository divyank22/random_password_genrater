<script setup>
import { usePasswordGenerator } from '../Composables/randompasswordgenrater.js';

const {
  lengths,
  includesymbol,
  includenumber,
  includelowercase,
  includeuppercase,
  password,
  copied,
  createPassword,
  copyPassword,
} = usePasswordGenerator();
</script>

<template>
  <div class="container">
    <div class="password-generator">
      <h2>Password Generator</h2>
      <div class="password">
        <p id="passwordBox">{{ password }}</p>
        <i class="far fa-clipboard " v-show="!copied" @click="copyPassword"><svg xmlns="http://www.w3.org/2000/svg"
            width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
            <path
              d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
            <path
              d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
          </svg></i>
        <span v-show="copied" class="copied-message"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
            <path
              d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
            <path
              d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
          </svg></span>
      </div>
      <div>
        <label for="length">Length</label>
        <input type="number" v-model="lengths" id="length" min="6" max="20">
      </div>
      <div>
        <label for="symbol">Include Symbol</label>
        <input type="checkbox" id="symbol" v-model="includesymbol">
      </div>
      <div>
        <label for="number">Include Number</label>
        <input type="checkbox" id="number" v-model="includenumber">
      </div>
      <div>
        <label for="lowerCase">Include Lowercase</label>
        <input type="checkbox" id="lowerCase" v-model="includelowercase">
      </div>
      <div>
        <label for="upperCase">Include Uppercase</label>
        <input type="checkbox" id="upperCase" v-model="includeuppercase">
      </div>
      <button @click="createPassword">Get Random Password</button>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.password-generator {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 10px;
}

.password {
  display: flex;
  align-items: center;
  gap: 10px;
}

.copied-message {
  color: green;
  font-size: 0.9em;
}

button {
  border: 1px solid #000;
  padding: 5px;
  border-radius: 5px;
}

#passwordBox {
  border: 1px solid #000;
  padding: 5px;
  border-radius: 5px;
}
</style>