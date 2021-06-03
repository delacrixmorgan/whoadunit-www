<template>
  <section class="text-gray-600 body-font">
    <div
      class="
        container
        mx-auto
        flex
        px-5
        py-24
        md:flex-row
        flex-col
        items-center
      "
    >
      <div
        class="
          lg:flex-grow
          md:w-1/2
          lg:pr-24
          md:pr-16
          flex flex-col
          md:items-start
          md:text-left
          mb-16
          md:mb-0
          items-center
          text-center
        "
      >
        <h1
          class="
            text-4xl
            tracking-tight
            font-extrabold
            text-gray-900
            sm:text-5xl
            md:text-6xl
            mb-4
          "
        >
          <span class="block xl:inline">Reach out to your</span>
          {{ ' ' }}
          <span class="block text-indigo-600 xl:inline">ADUN and MP</span>
        </h1>
        <p class="mb-8 leading-relaxed">
          Yes, there is a difference between ADUN and MP. Here's an article from
          Cilisos that explains it all, also inspired me to build this website.
        </p>
        <div class="flex justify-center">
          <button
            class="
              inline-flex
              text-white
              bg-indigo-500
              border-0
              py-2
              px-6
              focus:outline-none
              hover:bg-indigo-600
              rounded
              text-lg
            "
          >
            Get Started
          </button>
          <button
            class="
              ml-4
              inline-flex
              text-gray-700
              bg-gray-100
              border-0
              py-2
              px-6
              focus:outline-none
              hover:bg-gray-200
              rounded
              text-lg
            "
          >
            Check PRU Registration
          </button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
      </div>
    </div>
  </section>
</template>
