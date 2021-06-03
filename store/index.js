import Vuex from 'vuex'

import seats from '@/store/modules/seats.js'
import persons from '@/store/modules/persons.js'

export default () => {
  return new Vuex.Store({
    modules: {
      seats,
      persons,
    },
  })
}
