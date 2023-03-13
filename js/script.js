  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello World!',
        image: "img/hello-world.jpg"
      }
    }
  }).mount('#app')
