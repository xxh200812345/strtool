var exampleR = new Vue({
  el: '#exampleR',
  data: {

  },
  computed: {
    // 计算属性的 getter
    randomArray: function () {
      let size = 10;
      let array = [];
      array.push(this.randomNum(0))
      for (let i = 1; i < size; i++) {
        array.push(this.randomNum(array[array.length - 1]))
      }
      return array
    },
  },
  methods: {
    randomNum: function (startNum) {
      return startNum + Math.floor(Math.random() * 100) + 1;
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    rawHtml: '<span style="color: red">This should be red.</span>',
    key: "href",
    url: "http://www.123.com",

  },
  methods: {
    doSomething: function () {
      alert("aaa");
      return false;
    }
  }
});

var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello',
    firstName: "Foo",
    lastName: "Bar",
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    },
    now: function () {
      return Date.now()

    },
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
});
