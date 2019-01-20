/* global Vue, iida */

(function() {

  // iida.の下にvue.jsを走らせる関数を作成する
  iida.vuejs = function() {

    new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue.js!'
      }
    });

  };
  //
})();
