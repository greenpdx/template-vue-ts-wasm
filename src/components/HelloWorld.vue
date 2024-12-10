<script setup lang="ts">
import { ref } from 'vue'
import { wasm } from '../main.ts'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <p class="read-the-docs">Click on the WASM-pack, Rust, wasm-bindgen and Vue logos to learn more</p>
  <div class="card">
    <button type="button" @click="count = wasm.increment(count)">count is {{ count }}</button>
    <p style="text-align: left;">
      In HTML<br>
      <span style="margin-right: 2em;">SCRIPT</span>   const count = ref(0)<br>
      TEMPLATE &ltbutton type="button" @click="count = wasm.increment(count)"&gtcount is &#123;&#123; count &#125;&#125;&lt/button&gt<br><br>
      In Rust and wasm-bindgen ** all numbers are f64
    </p>

      <pre style="text-align: left;">
#[wasm_bindgen]
pub fn increment(num: JsValue) -&gt Result&ltf64, JsError&gt  {
  match num.as_f64() {
    Some(n) => {
      console::log_1(&num);
      Ok(n + 1.0)
    },
    None => Err(JsError::new("Invalid Parameter"))
  }
}
</pre>
  </div>
<div>
  <p>
    Use the debugger console to see the Rust/WASM console::log
  </p>
</div>>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
