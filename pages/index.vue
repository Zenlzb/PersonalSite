<template>
  <div class="container mx-auto flex flex-col align-middle animate-fadeDown">
    <div class="flex flex-wrap justify-center">
      <div class="px-4">
        <img
          src="https://i.imgur.com/iaVoxEQ.png"
          alt="..."
          class="shadow-xl rounded-full max-w-full h-auto align-middle border-white border-4"
        />
      </div>
    </div>
    <h1 class="text-dark-blue dark:text-white text-center text-3xl mt-8">
      Hi! I'm Zen
    </h1>
    <h1>Color mode: {{ $colorMode.value }}</h1>
    <h1>Color preference: {{ $colorMode.preference }}</h1>
  </div>
</template>
