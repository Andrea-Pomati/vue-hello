  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello World!',
        image: "img/hello-world.jpg",
        titleClass: "h1style",
        imgClass: "imgstyle"
      }
    }
  }).mount('#app')
