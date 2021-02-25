<template>
  <div
    :class="{ 'sec-navbar': true, 'no-border': !showBorder }"
    style="height:44px;line-height:44px;"
  >
    <div class="sec-left">
      <span
        v-if="showLeft"
        @click="backToHistory"
        class="left iconfont icon-zuojiantou"
      >
        <span class="icon iconleft-arrow back-icon"></span>
      </span>
    </div>
    <div class="title">{{ title }}</div>
    <div @click="handleRight" class="sec-right" style="height:44px;">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
import { bridgeHistoryBack } from 'cyberworld-bridge';

export default {
  name: 'life-navbar',
  props: {
    title: {
      type: String,
      default: '',
    },
    backStep: {
      type: [Number, String],
      default: 1,
    },
    showBorder: {
      type: Boolean,
      default: false,
    },
    selfBack: {
      type: Boolean,
      default: false,
    },
    showLeft: {
      type: Boolean,
      default: true,
    },
    backArrowColor: {
      type: String,
      required: false,
      default: '#333',
    },
  },
  methods: {
    backToHistory() {
      // 如果要自定义返回，那么只触发clickBack，不会返回
      if (this.selfBack) {
        this.$emit('clickBack');
        return;
      }
      bridgeHistoryBack(this.backStep);
    },
    handleRight() {
      this.$emit('clickRight');
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.sec-navbar {
  background-color: #ffffff;
  position: relative;
  z-index: 1000;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  @include border-bottom(#e1e1e1);
  flex-shrink: 0;
  &.no-border {
    border-bottom: none;
    @include border-bottom(transparent);
  }
  .back-icon {
    font-size: 16px;
  }
  .title {
    flex: 2;
    flex-shrink: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
  }
  .sec-left,
  .sec-right {
    flex: 1;
    display: flex;
    align-items: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .left {
    display: flex;
    align-items: center;
    font-size: 26px;
    cursor: pointer;
  }
  .sec-right {
    min-width: 10px;
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
  }
}
</style>
