<template>
  <main id="home" class="absolute inset-0 grid">
    <div id="logo" class="">
      <slot name="logo"></slot>
    </div>

    <div id="nav" class="">
      <slot name="nav"></slot>
    </div>

    <div
      id="head"
      class="flex flex-row flex-nowrap items-center justify-end">
      <slot name="head"></slot>
    </div>

    <div id="body" class="relative px-2 pt-2">
      <slot name="body"></slot>
    </div>
  </main>
</template>

<style>
#home {
  grid-template-areas:
    'logo head'
    'nav  body';
  grid-template-rows: 45px 1fr;
  grid-template-columns: minmax(160px, 1fr) 5fr;
}

#nav {
  grid-area: nav;
}

#head {
  grid-area: head;
}

#body {
  grid-area: body;
}

@media (max-width: 640px) {
  #home {
    grid-template-areas:
      'head'
      'body'
      'nav';
    grid-template-rows: 45px 1fr 45px;
    grid-template-columns: 1fr;
  }
}
</style>
