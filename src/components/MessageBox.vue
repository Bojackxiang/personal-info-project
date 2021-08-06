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

        <div slot="footer" class="dialog-footer">
          <v-progress-linear
            v-if="submitting"
            :indeterminate="true"
          ></v-progress-linear>
          <el-button @click="messageCancel" v-if="!submitting"
            >Cancel</el-button
          >
          <el-button type="primary" @click="messageSubmit" v-if="!submitting"
            >Submit</el-button
          >
        </div>
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
      submitting: false,
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
      try {
        this.submitting = true;
        setTimeout(async () => {
          const { success, message } = await this.axios.post(
            "/create-message",
            this.messageForm
          );

          console.log({
            success, 
            message
          })

          if (!success) {
            console.log(message)
            // 如果有报错，展示错误信息，但是不会关闭窗口
            console.debug(message);
            this.$message.error(message);
            this.submitting = false;
            return;
          }
          this.resetForm();
          this.messageClick();
          this.submitting = false;
        }, 2000);
      } catch (error) {
        console.debug(error);
        this.$message.error("Something was wrong.. Please try again later");
      }
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
  .loading-wrapper {
    height: 100px;
    background-color: pink;
  }
  .alert-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
}
</style>