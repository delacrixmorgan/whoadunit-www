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
        <div class="sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <a
              href="#"
              class="
                w-full
                flex
                items-center
                justify-center
                px-8
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-md
                text-white
                bg-indigo-600
                hover:bg-indigo-700
                md:text-lg
                md:py-4
                md:px-10
              "
            >
              Get Started
            </a>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <a
              href="https://pengundi.spr.gov.my/"
              target="_blank"
              class="
                w-full
                flex
                items-center
                justify-center
                px-8
                py-3
                border border-transparent
                text-base
                font-medium
                rounded-md
                text-indigo-700
                bg-indigo-100
                hover:bg-indigo-200
                md:py-4
                md:text-lg
                md:px-10
              "
            >
              Check PRU Registration
            </a>
          </div>
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
