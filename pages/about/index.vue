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
      <div v-for="(faq, index) in faqs" :key="index" class="space-y-4 mb-8">
        <h2 class="text-subtitle mb-4">{{ faq.question }}</h2>
        <p
          v-for="(answer, answerIndex) in faq.answer"
          :key="answerIndex"
          class="text-caption"
        >
          {{ answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: 'Where did you get all of this data?',
          answer: [
            "There's a lot of different sources that we got the data for each states, if you're interested in a breakdown on where we get our data. Just let us know, if there's enough interest on this topic we can write a blog post detailing about our findings.",
          ],
        },
        {
          question: 'Why are there missing data in Seats and Persons?',
          answer: [
            'Whoadunit is currently run by a small team who are working full-time jobs and only working on this during our free time, and we rely on volunteers to help us find and add missing data.',
            "That's why we build an intuitive feature that anyone can easily suggest a change, just like how you're editing a Wikipedia article. Then, people on side can easily filter and approve the changes made.",
          ],
        },
        {
          question:
            "It's so cool what you guys are doing here, how can I help?",
          answer: [
            "If you see something wrong or missing from our data on Seats and Person, you can easily just edit the entry and we will have them sorted out! It means a lot, because there's mountains of data and there's bound to be something that will slipped through our hands.",
            "If you like what you're seeing here, share and spread the word. We built this website hoping that it will become something useful for people to use it to communicate with their representative in their community.",
            'If you would like to support this website and its future developments, take a look at our donate page where publish details about the operation cost running this website.',
            'It will definitely help us go a long way to keep this website running and keeping the data accessible to the Malaysian public.',
          ],
        },
        {
          question: 'What technology stack did you use?',
          answer: [
            'We are using NuxtJS and Tailwind CSS for the frontend and NodeJS hosted using Firebase Functions for the backend.',
            "If you're interested in contributing to the code base, or just want to take a peek behind the curtain. It's accessible on GitHub.",
            'Frontend - https://github.com/delacrixmorgan/whoadunit-www',
            'Backend - https://github.com/Kurotsu5761/whoadunit-backend',
          ],
        },
      ],
    }
  },
}
</script>
