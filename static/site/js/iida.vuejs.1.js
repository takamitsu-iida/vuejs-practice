/* global Vue, iida */
/* eslint no-unused-vars: 0 */

(function() {

  // iida.の下にvue.jsを走らせる関数を作成する
  iida.vuejs = function() {

    var app1 = new Vue(
      {
        el: '#app',
        data: {
          message: 'Hello Vue.js!'
        }
      }
    );

    var app2 = new Vue(
      {
        el: '#app-2',
        data: {
          message: 'You loaded this page on ' + new Date().toLocaleString()
        }
      }
    );


    var app3 = new Vue({
      el: '#app-3',
      data: {
        seen: true
      }
    });

    var app4 = new Vue({
      el: '#app-4',
      data: {
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
      }
    });

    var app5 = new Vue({
      el: '#app-5',
      data: {
        message: 'Hello Vue.js!'
      },
      // <button v-on:click="reverseMessage">
      methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('');
        }
      }
    });


    Vue.component('todo-item', {
      props: ['todo'],
      template: '<li>{{ todo.text }}</li>'
    });
    // <todo-item v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id"></todo-item>
    var app7 = new Vue({
      el: '#app-7',
      data: {
        groceryList: [
          { id: 0, text: 'Vegetables' },
          { id: 1, text: 'Cheese' },
          { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
      }
    });


    // 算出プロパティvs監視プロパティ
    var sansyutsuObj = new Vue({
      el: '#sansyutsuObj',
      data: {
        firstName: 'Foo',
        lastName: 'Bar'
      },
      computed: {
        fullName: {
          // getter
          get: function () {
            return this.firstName + ' ' + this.lastName;
          }
        }
      }
    });

    // 算出プロパティvs監視プロパティ
    var styleObj = new Vue({
      el: '#styleObj',
      data: {
        styleObject: {
          color: 'red',
          fontSize: '13px'
        }
      }
    });







  };
  //
})();
