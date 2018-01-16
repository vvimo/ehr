<template>
  <palette-item :routes="permission_routers"></palette-item>
</template>

<script>
import { mapGetters } from 'vuex'
import PaletteItem from './PaletteItem'

export default {
  components: {
    PaletteItem
  },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse () {
      return !this.sidebar.opened
    }
  },
  methods: {}
}
</script>
