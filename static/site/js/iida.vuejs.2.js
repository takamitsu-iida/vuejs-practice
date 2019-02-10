/* global Vue, iida */
/* eslint no-unused-vars: 0 */

(function() {

  // iida.の下にvue.jsを走らせる関数を作成する
  iida.vuejs = function() {

    var app = new Vue({
      el: '#app',
      data: {
        name: ''
      },
      computed: {
        showAlert: function() {
          return this.name.length > 4 ? true : false;
        }
      }
    });


    var items = [
      { isActive: true, age: 40, name: { first: 'Dickerson', last: 'Macdonald' } },
      { isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' } },
      {
        isActive: false,
        age: 9,
        name: { first: 'Mini', last: 'Navarro' },
        _rowVariant: 'success'
      },
      { isActive: false, age: 89, name: { first: 'Geneva', last: 'Wilson' } },
      { isActive: true, age: 38, name: { first: 'Jami', last: 'Carney' } },
      { isActive: false, age: 27, name: { first: 'Essie', last: 'Dunlap' } },
      { isActive: true, age: 40, name: { first: 'Thor', last: 'Macdonald' } },
      {
        isActive: true,
        age: 87,
        name: { first: 'Larsen', last: 'Shaw' },
        _cellVariants: { age: 'danger', isActive: 'warning' }
      },
      { isActive: false, age: 26, name: { first: 'Mitzi', last: 'Navarro' } },
      { isActive: false, age: 22, name: { first: 'Genevieve', last: 'Wilson' } },
      { isActive: true, age: 38, name: { first: 'John', last: 'Carney' } },
      { isActive: false, age: 29, name: { first: 'Dick', last: 'Dunlap' } }
    ];

    var table_app = new Vue(
      {
        el: '#table_app',
        data: {
          items: items,
          fields: [
            { key: 'name', label: 'Person Full name', sortable: true, sortDirection: 'desc' },
            { key: 'age', label: 'Person age', sortable: true, 'class': 'text-center' },
            { key: 'isActive', label: 'is Active' },
            { key: 'actions', label: 'Actions' }
          ],
          currentPage: 1,
          perPage: 5,
          totalRows: items.length,
          pageOptions: [ 5, 10, 15 ],
          sortBy: null,
          sortDesc: false,
          sortDirection: 'asc',
          filter: null,
          modalInfo: { title: '', content: '' }
        },
        computed: {
        },
        methods: {
          info: function (item, index, button) {
            this.modalInfo.title = 'Row index: ${index}';
            this.modalInfo.content = JSON.stringify(item, null, 2);
            this.$root.$emit('bv::show::modal', 'modalInfo', button);
          },
          resetModal: function () {
            this.modalInfo.title = '';
            this.modalInfo.content = '';
          },
          onFiltered: function (filteredItems) {
          // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
          }
        }
      });

  };
  //
})();
