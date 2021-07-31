<template>
  <div>
    <el-button
      class="message-click-btn"
      type="text"
      @click="(event) => togglerDialog(event)"
    >
      <div class="message-btn-wrapper">
        <img src="/img/message.png" alt="" class="message-icon" />
        <span class="message-text"> Click me to leave a message </span>
      </div>
    </el-button>

    <el-dialog title="Message" :visible.sync="dialogFormVisible">
      hello
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "message-box",
  data() {
    return {
      dialogFormVisible: false,
    };
  },
  methods: {
    togglerDialog(evt) {
      this.dialogFormVisible = !this.dialogFormVisible;
      let target = evt.target;
      if (target.nodeName == "SPAN") {
        target = evt.target.parentNode;
      }
      target.blur();
    },
  },
};
</script>

<style lang="scss" scoped>
.message-click-btn {
  color: white;
  align-items: center;
  line-height: 20px;
  .message-btn-wrapper {
    display: flex;
    align-items: center;
    .message-text {
      display: inline-block;
      margin-left: 1rem;
    }
    .message-icon {
      height: 2rem;
      width: 2rem;
    }
  }
}
.message-click-btn:hover {
  color: white;
}
.message-click-btn:focus {
  color: white;
}
</style>