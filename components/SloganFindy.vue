<template>
  <div class="slogan">
    We <NuxtLink class="look-link" to="/search">
      look
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
  color: #a8b030;
  text-decoration: none;
  animation-name: my-animation;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-iteration-count: infinite;

  /* animation-timing-function: linear; */

  /* animation: ; */
}

@keyframes my-animation {
  from {
    box-shadow: 0 3px 300px -200px rgb(168 176 48 / 100%);
  }

  to {
    box-shadow: 0 0 0 2px rgb(168 176 48 / 100%);
  }
}
</style>
