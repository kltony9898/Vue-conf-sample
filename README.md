<h1 align="center">Vue Conf Form Components</h1>

<p align="center">
 vue conf 表單元件
</p>

## 🚀 Features

- 🎪 **Support for Vue 3**
- 🦾 **Simple and user-friendly UI components**
- 🔋 **Develop the integration of UnoCSS (optional)**
- 🔩 **Compatible with cjs, es, and iife versions**

### 📦 Installation

```
npm install vue-conf-form-components -S
```

### 🕶 Style

```javascript
import "vue-conf-form-components/dist/index.css";
```

## ⚡ Components

<details>
  <summary>clear checkbox</summary>

```javascript
import { FCheckboxClear } from "vue-conf-form-components";

const value = ref([]);
const data = ["option1", "option2", "option3", "option4", "option5"];
```

```html
<f-checkbox-clear
  :data="data"
  :cur-value="value"
  @update="(val) => value = val "
></f-checkbox-clear>
```

</details>

<br/>

<details>
  <summary>check id</summary>

```javascript
import { FIdInput } from "vue-conf-form-components";

const idNo = ref("");
```

```html
<f-id-input v-model="idNo"></f-id-input>
```

</details>

<br/>

<details>
  <summary>enter add tag</summary>


```javascript
import { FormTagsInput } from "vue-conf-form-components";
const tags = ref(['aaaa','bbbb']);
```

```html
<form-tags-input :tags="tags"/>
```

</details>

<br/>

<details>
  <summary>email check</summary>


```javascript
import { FormEmailInputNew } from "vue-conf-form-components";

const message = ref("");
```

```html
<form-email-input-new v-model="message" :options="options" />
```

</details>

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT
