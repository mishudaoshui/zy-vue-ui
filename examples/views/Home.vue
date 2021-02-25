<template>
  <div class="home">
    <life-navbar title="测试" />
    <div @click="toDialog" class="btn">弹窗</div>
    <life-dialog v-model="show" title="温馨提示" type="slot" z-index="10000">
      <div>hello</div>
    </life-dialog>
  </div>
</template>

<script>
import { lifeNavbar, lifeDialog } from '../../lib/cyberworld-ui.umd';
export default {
  name: 'Home',
  components: { lifeNavbar, lifeDialog },
  data() {
    return {
      show: false,
    };
  },
  created() {
    console.log(this);
  },
  methods: {
    toDialog() {
      this.show = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 50px;
  height: 28px;
  line-height: 28px;
  padding: 3px 10px;
  border: 1px solid #e1e1e1;
  cursor: not-allow;
}
</style>
