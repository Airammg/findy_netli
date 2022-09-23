<template>
  <div class="slogan">
    We <NuxtLink class="look-link" to="/search">
      look up
    </NuxtLink> for you.
  </div>
</template>

<style scoped>
.slogan {
  font-size: 20px;
  color: #a4a4a4;
}

.look-link {
  /* position: fixed; */
  color: #af429a;
  text-decoration: none;
  animation-name: my-animation;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-iteration-count: infinite;

  /* animation-timing-function: linear; */

  /* animation: ; */
}

@keyframes my-animation {
  from {
    text-shadow: 0;
  }

  to {
    text-shadow: 0 0 5px #4b058c;
  }
}
</style>
