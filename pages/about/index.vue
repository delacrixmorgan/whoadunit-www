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
    <div class="py-8">
      <div class="rounded-lg h-64 overflow-hidden mb-4">
        <img
          alt="content"
          class="object-cover object-center h-full w-full"
          src="https://dummyimage.com/1200x500"
        />
      </div>
      <h1 class="text-header-1 mb-4">About</h1>
      <p class="text-body mb-2">
        Welcome to Whoadunit, it's a wordplay of "whodunnit". WHO-A-DUN-IT, is
        how we pronounce them. Since it's about finding your ADUN and MP in your
        district, we thought wouldn't it be great to bring some of that
        detective mystery fun into it.
      </p>
      <p class="text-body">It's fun to say it out loud as well. Try it!</p>
    </div>
    <hr />
    <div class="py-8">
      <p class="text-body">
        This website is built by <b>Morgan Koh</b> and <b>Tan Hsiang Weih</b>.
      </p>
      <p class="text-body">
        Follow us on Twitter
        <a
          class="text-indigo-500 hover:underline"
          href="https://twitter.com/whoadunnit"
          target="_blank"
          >@whoadunnit</a
        >
      </p>
    </div>
    <hr />
    <div class="py-8">
      <h1 class="text-header-2 mb-4">Pipeline</h1>
      <ul class="list-inside list-disc">
        <li>Walkthrough with Explanation (Not Coachmarks)</li>
        <li>States Report Card</li>
        <li>3rd Party API Integrations</li>
      </ul>
    </div>
    <hr />
    <div class="py-8">
      <h1 class="text-header-2 mb-8">FAQ</h1>
      <h2 class="text-subtitle mb-4">Where did you get all of this data?</h2>
      <p class="text-caption">
        There's a lot of different sources that we got the data for each states,
        if you're interested in a breakdown on where we get our data. Just let
        us know, if there's enough interest on this topic we can write a blog
        post detailing about our findings.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>
