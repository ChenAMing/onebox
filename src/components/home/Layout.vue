<template>
  <main id="home" class="grid absolute inset-0">
    <div id="logo" class="border-r border-b border-slate-300"></div>

    <div id="nav" class="border-r border-slate-300">
      <slot name="nav"></slot>
    </div>

    <div id="head" class="border-b border-slate-300">
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
  grid-template-columns: 1fr 5fr;
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
