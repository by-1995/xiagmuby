<template>
  <div>
    <header>
      <h2 style="padding-left:45px;" class="title">
        {{routeTitle}}
      </h2>
    </header>
  </div>
</template>

<script>
export default {
  name: 'RightHeader',
  computed: {
    routeTitle () {
      return this.$route.meta.title
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~../../assets/styles/mixin.scss';
  header {
    .title {
      // padding: 20px;
      font-weight: 600;
      font-size: 18px;
      @include one-px-border();
    }
    // padding-bottom: 20px;
    height: 50px;
    line-height: 50px;
  }
  h2{
  color: #4C4A65;
  }
</style>