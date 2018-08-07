/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      people: [
        {
          name: "John Adams",
          bio: "2nd President of the United States.  Many people didn't like him.",
          bioVisible: true
        },
        {
          name: "Thomas Jefferson",
          bio: "3rd President of the United States.  Nemesis is John Adams.",
          bioVisible: true
        },
        {
          name: "Alex Hammy",
          bio: "Musical named after him.",
          bioVisible: true
        }
      ],
      newPerson: {
        name: "",
        bio: "",
        bioVisible: true
      }
    };
  },
  created: function() {},
  methods: {
    addPerson: function() {
      console.log("add person");
      this.people.push(this.newPerson);
      console.log("person has been added");
      this.newPerson = {
        name: "",
        bio: ""
      };
    },
    countPeople: function() {
      return this.people.length;
    },
    removePerson: function(inputPerson) {
      var index = this.people.indexOf(inputPerson);
      this.people.splice(index, 1);
    }
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});