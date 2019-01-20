# vue.jsの練習

チュートリアルの写経です。

<https://jp.vuejs.org/v2/guide/index.html>

## ライブデモ(github pages)

### 練習１．

<https://takamitsu-iida.github.io/vuejs-practice/index.1.html>

### 練習２．

<https://takamitsu-iida.github.io/vuejs-practice/index.2.html>

## 省略記法

### v-bind

```html
<!-- 完全な構文 -->
<a v-bind:href="url"> ... </a>

<!-- 省略記法 -->
<a :href="url"> ... </a>
```

### v-on

```html
<!-- 完全な構文 -->
<a v-on:click="doSomething"> ... </a>

<!-- 省略記法 -->
<a @click="doSomething"> ... </a>
```

## 複雑なロジックには算出プロパティを利用すべき

算出プロパティの代わりに、同じような関数をメソッドとして定義することも可能です。
最終的には、2つのアプローチは完全に同じ結果になります。
しかしながら、算出プロパティは依存関係にもとづきキャッシュされるという違いがあります。
算出プロパティは、それが依存するものが更新されたときにだけ再評価されます。

飯田メモ： methodsではなくcomputedを使え、ということ。

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 算出 getter 関数
    reversedMessage: function () {
      // `this` は vm インスタンスを指します
      return this.message.split('').reverse().join('')
    }
  }
})
```

