/**
 * mixins
 */

export default {
  methods: {
    goTo (url: string) {
      uni.navigateTo({
        url: url
      })
    }
  }
} 