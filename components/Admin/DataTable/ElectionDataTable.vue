<template>
  <div>
    <table class="table-auto w-full shadow">
      <thead>
        <tr class="bg-gray-50">
          <th
            v-for="header in headers"
            :key="header"
            scope="col"
            class="
              px-6
              py-3
              text-left text-xs
              font-medium
              text-gray-500
              uppercase
              tracking-wider
            "
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr
          v-for="election in items"
          :key="election.id"
          class="hover:bg-gray-200"
        >
          <td class="px-6 py-4">{{ election.year }}</td>
          <td class="px-6 py-4">
            <div class="flex flex-row space-x-2">
              <button
                class="
                  bg-green-500
                  hover:bg-green-600
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
                <a :href="getEditActionLink(election)">Edit</a>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      require: false,
      default: null,
    },
  },
  data() {
    return {
      headers: ['Year', 'Actions'],
    }
  },
  methods: {
    getEditActionLink(item) {
      return '/admin/elections/' + item.id
    },
  },
}
</script>
