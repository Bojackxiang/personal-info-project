<template>
  <div>
    <div>
      <el-dialog
        title="Leave me a message"
        :visible.sync="dialogDisplay"
        :width="dialogWidth"
        label-width="100px"
      >
        <el-form :model="messageForm" :rules="messageFormRules">
          <el-form-item label="Your name" prop="name">
            <el-input v-model="messageForm.name"></el-input>
          </el-form-item>
          <el-form-item label="Phone Number" prop="phone">
            <el-input v-model="messageForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="Email Address" prop="email">
            <el-input v-model="messageForm.email"></el-input>
          </el-form-item>
          <el-form-item label="Message" prop="message">
            <el-input type="textarea" v-model="messageForm.message"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="messageCancel">Cancel</el-button>
          <el-button
            type="primary"
            @click="messageSubmit"
            >Submit</el-button
          >
        </span>
      </el-dialog>
    </div>
    <div class="message-btn-wrapper">
      <v-btn
        class="message-box-btn"
        outlined
        large
        fab
        color="primary"
        @click="messageClick"
      >
        <v-icon>mdi-message-text</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogDisplay: false,
      dialogWidth: "800px",
      messageForm: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
      messageFormRules: {
        name: [
          { required: true, message: "Your name is require", trigger: "blur" },
        ],
        message: [
          {
            required: true,
            message: "Please let me know more about your information",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    this.setDialogWidth();
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.setDialogWidth();
      })();
    };
  },
  methods: {
    // 点击了message box
    messageClick() {
      this.dialogDisplay = !this.dialogDisplay;
    },
    // 提交 message
    async messageSubmit() {
      this.resetForm();
      this.messageClick();
    },
    // 点击取消message
    messageCancel() {
      this.resetForm();
      this.messageClick();
    },
    // 设置dialog的宽度
    setDialogWidth() {
      var val = document.body.clientWidth;
      const def = 800; // 默认宽度
      if (val < def) {
        this.dialogWidth = "90%";
      } else {
        this.dialogWidth = def + "px";
      }
    },
    // resetform
    resetForm() {
      this.messageForm = {
        name: "",
        phone: "",
        email: "",
        message: "",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.message-btn-wrapper {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  .message-box-btn {
    height: 5rem;
    width: 5rem;
    .message-box-icon {
      width: 2rem;
      height: 2rem;
    }
  }
  .message-box-btn:focused {
    background-color: whote;
  }
}
</style>