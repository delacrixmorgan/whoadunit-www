<template>
  <div
    class="
      container
      mx-auto
      px-5
      py-2
      flex-col
      md:flex-row md:flex-nowrap
      items-center
    "
  >
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-gray-900">
            Hey there
          </h1>
          <p class="leading-relaxed mt-4">
            You have arrived at the sign in page. It's actually only for
            internal use.<br /><br />But, if you want help out with our efforts
            at Whoadunit. Please check out our volunteer page.
          </p>
        </div>
        <div
          class="
            lg:w-2/6
            md:w-1/2
            bg-gray-100
            rounded-lg
            p-8
            flex flex-col
            md:ml-auto
            w-full
            mt-10
            md:mt-0
          "
        >
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Welcome Back
          </h2>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600"
              >Email</label
            >
            <input
              id="email"
              v-model.trim="email"
              type="email"
              name="email"
              class="
                w-full
                bg-white
                rounded
                border border-gray-300
                focus:border-indigo-500
                focus:ring-2 focus:ring-indigo-200
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
            />
          </div>
          <div class="relative mb-4">
            <label for="password" class="leading-7 text-sm text-gray-600"
              >Password</label
            >
            <input
              id="password"
              v-model.trim="password"
              type="password"
              name="password"
              class="
                w-full
                bg-white
                rounded
                border border-gray-300
                focus:border-indigo-500
                focus:ring-2 focus:ring-indigo-200
                text-base
                outline-none
                text-gray-700
                py-1
                px-3
                leading-8
                transition-colors
                duration-200
                ease-in-out
              "
              @keydown.enter="onSubmit"
            />
          </div>
          <button
            class="
              text-white
              bg-indigo-500
              border-0
              py-2
              px-8
              focus:outline-none
              hover:bg-indigo-600
              rounded
              text-lg
            "
            @click="onSubmit"
          >
            Login
          </button>
          <p class="text-xs text-gray-500 mt-3 hover:text-indigo-500">
            <a href="mailto:hello@whoadunit.com">Forgot your password?</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      alert(this.email + ', ' + this.password)
      // this.$store.dispatch('auth/loginUser', {
      //   email: this.email,
      //   password: this.password,
      // })
    },
  },
}
</script>
