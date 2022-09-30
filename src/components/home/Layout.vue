<template>
  <main id="home" class="grid absolute inset-0">
    <div id="logo" class="border-r border-b border-slate-300">
      <slot name="logo"></slot>
    </div>

    <div id="nav" class="sm:border-r border-t border-slate-300">
      <slot name="nav"></slot>
    </div>

    <div
      id="head"
      class="border-b border-slate-300 flex flex-row flex-nowrap items-center justify-end"
    >
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
