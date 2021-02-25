<template>
  <section
    v-if="show"
    @touchmove.prevent
    class="sec-life-dialog van-fade-enter-active"
    @click="clickMask($event)"
    :style="{ 'z-index': zIndex }"
  >
    <div id="dialogId" class="area-life-dialog">
      <span @click="closeDialog" class="iconfont icon-guanbi">
        <span class="icon iconclose close-icon"></span>
      </span>
      <h3 v-if="title" class="life-dialog-title" v-text="title" />
      <div class="life-dialog-content">
        <template v-if="type === 'slot'">
          <slot></slot>
        </template>
        <template v-else>{{ content }}</template>
      </div>
      <div v-if="leftTxt || rightTxt" class="life-dialog-btns">
        <button v-if="leftTxt" @click="onClickLeft" v-text="leftTxt" />
        <button v-if="rightTxt" @click="onClickRight" v-text="rightTxt" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'life-dialog',
  model: {
    prop: 'show',
    event: 'toggleShow',
  },
  props: {
    zIndex: {
      type: [Number, String],
      default: 200,
    },
    show: {
      type: Boolean,
      default: false,
      required: true,
    },
    // normal：纯文本 slot： slot插槽
    type: {
      type: String,
      default: 'normal',
    },
    // 标题
    title: {
      type: String,
      default: '',
    },
    // 展示的文案内容
    content: {
      type: String,
      default: '测试文案，该字段为纯文本时生效',
    },
    // 左边按钮文案
    leftTxt: {
      type: String,
      default: '',
    },
    // 右边按钮文案
    rightTxt: {
      type: String,
      default: '',
    },
  },
  methods: {
    closeDialog() {
      this.$emit('toggleShow', false);
    },
    onClickLeft() {
      this.$emit('clickLeft');
      this.closeDialog();
    },
    onClickRight() {
      this.$emit('clickRight');
      this.closeDialog();
    },
    // 点击遮罩层，关闭弹框
    clickMask(event) {},
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

ul,
li {
  list-style: none;
}

input {
  border: none;
  outline: none;
}

input::-webkit-input-placeholder {
  color: #c6c6c6;
}

.sec-life-dialog {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  .area-life-dialog {
    position: absolute;
    top: 30%;
    left: 50%;
    width: 263px;
    transform: translateX(-132px);
    background-color: #ffffff;
    border-radius: 3px;
    position: relative;
    padding: 20px;
    overflow: hidden;
    .icon-guanbi {
      color: #999999;
      font-size: 14px;
      position: absolute;
      top: 8px;
      right: 4px;
      width: 20px;
      height: 20px;
      line-height: 18px;
      text-align: center;
      .close-icon {
        font-size: 14px;
      }
    }
    .life-dialog-title {
      font-weight: normal;
      font-style: normal;
      text-align: center;
      font-size: 18px;
      line-height: 23px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 10px;
      color: #333333;
    }
    .life-dialog-content {
      line-height: 25px;
      color: #999999;
      padding: 0 5px;
      font-size: 14px;
      min-height: 50px;
    }
    .life-dialog-btns {
      margin-top: 15px;
      height: 40px;
      overflow: hidden;
      display: flex;
      justify-content: space-around;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
        background-color: transparent;
        border: none;
        font-size: 14px;
        height: 40px;
        width: 100px;
        border-radius: 20px;
        &:first-child {
          color: #3e3a39;
          background-color: #ffffff;
          margin-right: 20px;
          position: relative;
          &:after {
            position: absolute;
            content: ' ';
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            border-radius: inherit;
            border: 1px solid #c6c6c6;
          }
        }
        &:last-child {
          color: #fff;
          background-color: #386dda;
        }
        &:only-child {
          width: 137px;
          margin-right: 0;
        }
      }
    }
  }
}
</style>
