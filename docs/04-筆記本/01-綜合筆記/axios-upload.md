---
title: 上傳資料顯示進度
tags: [HTML, javascript, axios, input, drag]
---
:::note
Drag & Drop api 尚待了解
:::

## 功能與解析
在不使用其他專門套件下，為上傳檔案添加上傳進度顯示。  
解法可以使用 axios 套件內部的 `onUploadProgress` 來直接處理上傳進度。

## 以 vue3 實作
:::info
實作套用的 api 為 [httpbin.org](https://httpbin.org/)，可以接受 POST 請求但不會實際儲存檔案。
:::
```js
<script setup>
import axios from 'axios';
import { reactive } from 'vue';

const state = reactive({
  file: null,
  progress: 0,
})

const handleFileChange = (event) => {
  state.file = event.target.files[0];
}

const uploadFile = () => {
  if (!state.file) {
    console.log('no file')
    return
  }

  const formData = new FormData()
  formData.append('file', state.file)

  axios.post('https://httpbin.org/post', formData, {
    onUploadProgress: (progressEvent) => {
      state.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      console.log(state.progress)
    },
  })
  .then((response) => {
    console.log('success');
  })
  .catch((error) => {
    console.error(error);
  })
}
</script>

<template>
    <div>
      <input type="file" @change="handleFileChange" multiple/>
      <button @click="uploadFile">上傳檔案</button>
      <div>
        上傳進度: {{ state.progress }}%
      </div>
    </div>
</template>
```
建立幾個大容量檔案來實際測試上傳進度的顯示，下述就是建立一個叫 largefile 的 50 mb 檔案：
```bash
dd if=/dev/zero of=largefile bs=1M count=50
```

## 實作每個檔案都有獨立進度顯示
因為 axios 的 onUploadProgress 顯示的是整個`全部的上傳進度`，如果今天是要一次上傳多個檔案，但要每個檔案有獨立的進度顯示 (可能方便做進度條之類的) 會需要分開對每一個檔案做一次 POST。

實際上流程如下：  
1. 使用者一次傳入多個檔案。
2. 前端將接收到的資料 (含多個檔案) 拆成一份一份存入陣列之中，並賦予他們每個一個獨自的進度。
```js
<script setup>
import axios from 'axios';
import { reactive } from 'vue';

const state = reactive({
  files: [],
  uploading: false,
})

// 當選擇檔案發生變化時，觸發這個函式
const handleFileChange = (event) => {
  // 使用 Array.from 將 FileList 轉換為陣列，再將每個檔案包裝成包含進度的物件
  state.files = Array.from(event.target.files).map((file) => ({
    file,
    progress: 0,
  }))
}

// 當按下上傳按鈕時，觸發這個函式
const uploadFile = async (fileObj) => {
  // 創建 FormData 物件，用於將檔案資料包裝成表單格式
  const formData = new FormData()
  formData.append('file', fileObj.file)

  try {
    const response = await axios.post('https://httpbin.org/post', formData, {
      onUploadProgress: (progressEvent) => {
        fileObj.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      },
    })
  } catch (error) {
    console.error('檔案上傳失敗：', error)
  }
};

// 當按下上傳按鈕時觸發，開始上傳所有檔案
const uploadFiles = () => {
  // 設置上傳中的狀態
  state.uploading = true

  // 使用 Promise.all，並為每個檔案創建一個上傳請求，這樣它們可以同時進行
  const uploadPromises = state.files.map(uploadFile)

  Promise.all(uploadPromises)
  .then(() => {
    console.log('所有檔案上傳完成')
  })
  .catch((error) => {
    console.error('有檔案上傳失敗：', error)
  })
  .finally(() => {
    state.uploading = false
  })
}
</script>

<template>
  <div>
    <input type="file" multiple @change="handleFileChange" />
    <button @click="uploadFiles">上傳檔案</button>
    <div v-if="uploading">
      <div v-for="(file, index) in files" :key="index">
        {{ file.file.name }} 上傳進度: {{ file.progress }}%
      </div>
    </div>
  </div>
</template>
```

## 拖曳式上傳資料
拖曳式上傳不用使用到 HTML 的 `<input>`，而是要改用 HTML5 提供的 drag 跟 drop api。

```js
<script setup>
import axios from 'axios';
import { reactive } from 'vue';

const state = reactive({
    files: [],
    uploading: false,
})

const uploadFile = async (fileObj) => {
    const formData = new FormData()
    formData.append('file', fileObj.file)

    try {
    const response = await axios.post('https://httpbin.org/post', formData, {
        onUploadProgress: (progressEvent) => {
        fileObj.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        },
    })

    console.log(response.data);
    } catch (error) {
    console.error('檔案上傳失敗：', error);
    }
}

const uploadFiles = () => {
    state.uploading = true

    const uploadPromises = state.files.map(uploadFile)

    Promise.all(uploadPromises)
    .then(() => {
        console.log('所有檔案上傳完成')
    })
    .catch((error) => {
        console.error('有檔案上傳失敗：', error)
    })
    .finally(() => {
        state.uploading = false
    })
}

// drag
const handleDragEnter = (event) => {
    event.stopPropagation()
    event.preventDefault()
    state.isDragOver = true
};

const handleDragOver = (event) => {
    event.stopPropagation()
    event.preventDefault()
    state.isDragOver = true
    console.log('drag over')
};

const handleDragLeave = (event) => {
    event.stopPropagation()
    event.preventDefault()
    state.isDragOver = false
    console.log('drag leave')
};

const handleDrop = (event) => {
    event.stopPropagation()
    event.preventDefault()
    state.isDragOver = false

    const files = Array.from(event.dataTransfer.files).map((file) => ({
    file,
    progress: 0,
    }));

    // 將文件添加到 state.files 中
    state.files = files
}
</script>

<template>
    <div>
      <div
        @dragenter.prevent="handleDragEnter"
        @dragover.prevent="handleDragOver"
        @dragleave.prevent="handleDragLeave"
        @drop.prevent="handleDrop"
        class="drop-area"
        :class="{ 'drag-over': state.isDragOver }"
        >
        將檔案拖拉到這裡進行上傳
      </div>
      <p v-if="state.files.length > 0">
        {{ state.files.length > 1 ? '已選擇 ' + state.files.length + ' 個檔案' : '已選擇 1 個檔案' }}
      </p>
      <p v-else>
        未選擇任何檔案
      </p>
      <button @click="uploadFiles">上傳檔案</button>
      <div v-if="state.uploading">
        <div v-for="(file, index) in state.files" :key="index">
          {{ file.name }} 上傳進度: {{ file.progress }}%
        </div>
      </div>
    </div>
</template>

<style scoped>
.drop-area {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
}

.drag-over {
  border-color: #2196F3;
  background-color: #E3F2FD;
}
</style>
```


## 參考資料
1. [使用Axios中的onUploadProgress实现显示文件上传进度](https://blog.csdn.net/qq_41915137/article/details/132607010)