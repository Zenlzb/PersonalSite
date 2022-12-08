<template>
  <figure
    class="container mx-auto flex animate-fadeDown flex-wrap justify-center"
  >
    <img
      src="../public/picture.png"
      alt="..."
      class="shadow-xl rounded-full max-w-full h-auto align-middle border-white border-4"
    />
  </figure>
  <section
    class="container mx-auto flex flex-col align-middle animate-fadeDown max-w-xl"
  >
    <h2 class="main-txt-color text-center text-3xl mt-8 font-Nunito">
      Hi! I'm Zen
    </h2>
    <p class="main-txt-color text-center text-lg mt-8 font-Nunito">
      I'm currently a Year 3 undergraduate
      <a class="bold-txt-color">Computer Science Major</a>
      at the National University of Singapore. I'm learning as much as I can
      about Software Engineering, Web Development and related fields. Feel free
      to contact me!
    </p>
  </section>
  <section
    class="container mx-auto flex flex-row justify-center animate-fadeDown mt-8 gap-4"
  >
    <div v-for="social of socials">
      <a :href="social.link">
        <button
          class="rounded hover:bg-slate-300 hover:dark:bg-slate-600 hover:cursor-pointer p-1"
        >
          <Icon
            :name="social.icon"
            size="32"
            :color="$colorMode.preference === 'dark' ? 'white' : '#0e0f30'"
          />
        </button>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          icon: "radix-icons:linkedin-logo",
          link: "https://www.linkedin.com/in/zen-been-lee-46353a221/",
        },
        { icon: "radix-icons:github-logo", link: "https://github.com/Zenlzb" },
        { icon: "ic:round-email", link: "mailto:leezenbeen@u.nus.edu" },
      ],
    };
  },
};
</script>
