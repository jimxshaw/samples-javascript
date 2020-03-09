<template>
  <div id="app">
    
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Return rental",
          completed: true      
        },
        {
          id: 2,
          title: "Do laundry",
          completed: false
        },
        {
          title: "Eat dinner",
          completed: false
        }
      ]
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
