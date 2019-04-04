<template>
  <div class="log">
    <!-- 导航 -->
    <section>
      <van-nav-bar @click-left="onClickLeft">
        <icon name="left-arrow" slot="left"></icon>
        <h3 v-if="title" slot="title">{{title}}</h3>
      </van-nav-bar>
    </section>

    <!-- 导航 -->
    <section>
      <ul>
        <li> 1.0,后台受限</li>
        <li></li>
      </ul>
    </section>

  </div>
</template>


<script lang="ts">
import {Component,Vue} from 'vue-property-decorator';
import {NavBar} from 'vant';

@Component({
  components:{
    [NavBar.name]: NavBar,
  }
})

export default class UpdateLog extends Vue{
  private message?: string;
  private title!: string;

  public data(){
    return {
      message:'',
      title: this.$route.name,
    }
  }

  private onClickLeft(){
    this.$router.go(-1);
  }
}
</script>


<style lang="scss" scoped>
@import '../../style/mixin';
.van-nav-bar {
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    @include iconSize(1.4rem);
  }
}
</style>
