<template>
  <main id="home" class="grid absolute inset-0">
    <div id="nav" class="border-r border">
      <slot name="nav"></slot>
    </div>

    <div id="head" class="">
      <slot name="head"></slot>
    </div>

    <div id="body" class="">
      <slot name="body"></slot>
    </div>
  </main>
</template>

<style>
#home {
  grid-template-areas:
    'head head'
    'nav  body';
  grid-template-rows: 45px 1fr;
  grid-template-columns: 200px 1fr;
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
</style>
