/*new Vue( {
    el: '#app',
    data: {
      newItem: '',
      items: [],
    },
    computed: {
      reversedItems() {
        return this.items.slice( 0 ).reverse();
      },
    },
    methods: {
      addItem: function () {
        this.items.push( {
          id: this.items.length + 1,
          name: this.newItem,
          info: this.description,
          time: this.due_date
          completed: false,
        } );
        this.newItem = '';
      },
      toggleCompleted: function ( item ) {
        item.completed = !item.completed;
      },
      removeItem: function ( item ) {
        this.items = this.items.filter( ( newItem ) => newItem.name !== item.name );
      },
    },
  } );*/