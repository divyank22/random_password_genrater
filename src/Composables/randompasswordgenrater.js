import { ref } from 'vue';

export function usePasswordGenerator() {
  const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
  };

  const getKey = [
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
  ];

  const lengths = ref(12);
  const includesymbol = ref(true);
  const includenumber = ref(true);
  const includelowercase = ref(true);
  const includeuppercase = ref(true);
  const password = ref('');
  const copied = ref(false);

  const createPassword = () => {
    if (!includesymbol.value && !includenumber.value && !includelowercase.value && !includeuppercase.value) {
      alert("Please check at least one box!");
      return;
    }

    let generatedPassword = '';
    const selectedKeys = [];

    if (includeuppercase.value) selectedKeys.push(getKey[0]);
    if (includelowercase.value) selectedKeys.push(getKey[1]);
    if (includenumber.value) selectedKeys.push(getKey[2]);
    if (includesymbol.value) selectedKeys.push(getKey[3]);

    while (generatedPassword.length < lengths.value) {
      let keyToAdd = selectedKeys[Math.floor(Math.random() * selectedKeys.length)];
      generatedPassword += keyToAdd();
    }

    password.value = generatedPassword;
  };

  const copyPassword = async () => {
    if (password.value !="") {
        
    try {
      await navigator.clipboard.writeText(password.value);
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  else {
    alert("please generate password")
  }
  }
  return {
    lengths,
    includesymbol,
    includenumber,
    includelowercase,
    includeuppercase,
    password,
    copied,
    createPassword,
    copyPassword,
  };
}
