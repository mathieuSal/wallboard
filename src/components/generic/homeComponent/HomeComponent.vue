<template>
  <div class="backHome">
    <router-link to="/">
      <p>home</p>
    </router-link>
    <div id="clock">
    </div>
  </div>
</template>

<script>

const checkTime = (i) => i < 10 ? '0' + i : i

export default {
  data () {
    return {}
  },
  mounted () {
    document.addEventListener('keydown', this.backHome)
    setInterval(this.getTime, 500)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.backHome)
  },
  methods: {
    backHome (event) {
      if (event.ctrlKey && event.keyCode === 72) {
        this.$router.push('/').catch(() => {})
      }
    },
    getTime () {
      const clockDiv = document.querySelector('#clock')
      const date = new Date()
      const hours = checkTime(date.getHours())
      const minutes = checkTime(date.getMinutes())
      const seconds = checkTime(date.getSeconds())

      clockDiv.innerHTML = `${hours}:${minutes}:${seconds}`
    }
  }
}
</script>

<style scoped>
.backHome {
  /* background: #f5f5f5; */
  border: 1px solid #dedede;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  color: #4d4d4d;
  display: inline-grid;
  font: 17px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 300;
  height: 90px;
  justify-content: center;
  left: 1rem;
  line-height: 1.4em;
  position: absolute;
  top: 1rem;
  width: 100px;
}
</style>
