<svelte:head>
  <title>Sveltekit & Unocss template</title>
</svelte:head>

<div class="transition-400 flex h-full select-none text-center">
  <div class="m-auto">
    <div class="fw-100 animate-count-infinite duration-1s animate-bounce text-5xl">
      unocss & sveltekit
    </div>

    <div class="op-30 fw-300 max-w-40ch mb-2 text-lg">
      The fastest way to build svelte apps with the Instant on-demand Atomic CSS engine
    </div>

    <!-- svelte-ignore a11y-missing-content -->
    <div class="m-2 flex h-max items-center justify-center gap-2 text-2xl">
      <a
        class="i-logos-unocss hover:brightness-300% text-inherit"
        href="https://uno.antfu.me/"
        target="_blank"
      />
      <!-- demarcation start -->
      <div class="text-2rem op-30">+</div>
      <!-- demarcation end -->
      <a
        class="i-carbon-logo-svelte op-30 hover:op-80 text-inherit"
        href="https://kit.svelte.dev"
        target="_blank"
      />
    </div>
  </div>
</div>

<div class="op-30 fw-300 absolute bottom-5 right-0 left-0 text-center">
  on-demand · instant · fully customizable
</div>
