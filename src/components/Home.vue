<template>
  <div class="HomeWrap">
    <div class="header">
      <img ref="image" src="../assets/rzqd.png" alt="签到" />
    </div>
    <div class="button">
      <!-- <div class="register" @click="test"> -->
        <div class="register" @click="register">
        <div class="icon">
          <img class="sign" src="../assets/sign.png" alt="" />
        </div>
        <div class="text">签到</div>
      </div>
      <div class="signOut" @click="signOut">
        <div class="icon">
          <img class="sign" src="../assets/signOut.png" alt="" />
        </div>
        <div class="text">签退</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const signOut = require('../assets/signOut.png')
    const sign = require('../assets/sign.png')
    return { data: signOut, sign }
  },
  methods: {
    // 签到的点击事件
    async register() {
      const {data:res} =await this.$axios.get('/get_ip')
      if (res.ip) {
        this.getCamera('1')
      } else {
        this.$Toast.fail('同学,请连接双体系WIFI进行签到')
      }
    },
    // 签退的点击事件
   async signOut() {
      const {data:res} =await this.$axios.get('/get_ip')
      if (res.ip) {
        this.getCamera('2')
      } else {
        this.$Toast.fail('同学,请连接双体系WIFI进行签退')
      }
    },
    // 调取设备摄像头
    getCamera(type) {
      let cmr = plus.camera.getCamera()
      cmr.captureImage(
        p => {
          plus.io.resolveLocalFileSystemURL(
            p,
            entry => {
              console.log(entry.toLocalURL(), entry.name)
              this.compressIm(entry.toLocalURL(), entry.name,type)
            },
            e => {
            }
          )
        },
        e => {},
        {
          filter: 'image'
        }
      )
    },
    compressIm(url, filename,type) {
      let name = '_doc/upload/' + filename
      plus.zip.compressImage(
        {
          src: url,
          dst: name,
          quality: 1,
          overwrite: true
        },
        zip => {
          let fileReader = new plus.io.FileReader()
          fileReader.readAsDataURL(zip.target)
          fileReader.onloadend =async e => {
            this.$Toast.loading({
             message: '加载中...',
              forbidClick: true,
            });
           const {data:res} =  await this.$axios.post('/search', { imgBase: e.target.result.toString(),type})
           if(res.status === '0'){
              this.$Toast.success(res.msg)
           }else {
             this.$Toast.fail(res.msg)
           }
          }
        }
      )
    },

  }
}
</script>

<style lang="less" scoped>
.img {
  position: absolute;
  left: 0;
  top: 50px;
  width: 50px;
  height: 50px;
}
.header img {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 50px;
}
.register,
.signOut {
  height: 100px;
  margin: 0 20px;
  background-color: rgb(120, 199, 255);
  margin-bottom: 70px;
  border-radius: 30px;
  display: flex;
  box-shadow: 0 0 15px #aaa;
}
.icon {
  width: 100px;
}
.text {
  width: 225px;
  text-align: left;
  margin-left: 40px;
  font: 30px/100px '微软雅黑';
  color: white;
}
.sign {
  width: 70px;
  height: 70px;
  margin: 15px auto;
  display: block;
}
/* #canvas{
  display: none;
} */
</style>
