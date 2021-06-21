<template>
  <div>
    <input
      v-model.trim="searchQuery"
      class="
        w-full
        focus:outline-none
        focus:ring
        focus:border-blue-300
        text-sm text-black
        placeholder-gray-500
        border border-gray-200
        rounded-md
        py-3
        pl-5
      "
      type="text"
      placeholder="Name"
      @input="updateSearchQuery"
    />
    <p>Name</p>

    <p>State</p>

    <p>Type</p>

    <p>Code</p>

    <p>Assign Person</p>

    <button
      class="
        bg-blue-500
        hover:bg-blue-600
        flex-shrink-0
        text-white
        border-0
        py-2
        px-8
        focus:outline-none
        rounded
        text-lg
        mt-10
        sm:mt-0
      "
    >
      <a href="#">Add</a>
    </button>
  </div>
</template>
