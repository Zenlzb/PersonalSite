<template>
  <div>
    <header>
      <div class="p-2 pr-10 pt-5 justify-end flex-row flex">
        <div
          class="rounded hover:bg-slate-300 hover:dark:bg-slate-600 hover:cursor-pointer p-1"
          @click="toggleDark"
        >
          <transition
            enter-from-class="opacity-0"
            leave-to-class="opacity-0"
            enter-active-class="transition duration-100"
            leave-active-class="transition duration-100"
            mode="out-in"
          >
            <div v-if="$colorMode.value == 'dark'">
              <Icon
                name="material-symbols:light-mode"
                size="32"
                color="white"
              />
            </div>
            <div v-else>
              <Icon
                name="material-symbols:dark-mode"
                size="32"
                color="#0e0f30"
              />
            </div>
          </transition>
        </div>
      </div>
    </header>
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    log(msg) {
      console.log(msg);
    },
    toggleDark() {
      if (this.$colorMode.preference === "system") {
        if (this.$colorMode.value === "dark") {
          this.$colorMode.preference = "light";
        } else {
          this.$colorMode.preference = "dark";
        }
      } else if (this.$colorMode.preference === "dark") {
        this.$colorMode.preference = "light";
      } else if (this.$colorMode.preference === "light") {
        this.$colorMode.preference = "dark";
      }
    },
  },
};
</script>
