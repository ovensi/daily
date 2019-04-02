<template>
  <div class="login">
    <section>
      <van-nav-bar @click-left="onClickLeft">
        <icon name="left-arrow" slot="left"></icon>
        <h3 v-if="title" slot="title">{{title}}</h3>
      </van-nav-bar>
    </section>

    <main>
      <section>
        <van-cell-group>
          <van-field v-model="username" label="用户名" right-icon="clear" placeholder="请输入用户名" required @click-right-icon="username = ' '"></van-field>
          <van-field v-model="password" type='password' label="密码"  placeholder="请输入密码" required ></van-field>
        </van-cell-group>
      </section>
      <van-button @click="handleLogin" size="small" type="ptimary">登录</van-button>
      <van-loading v-if="user.isLogin===0" type='spinner' color='black'></van-loading>
    </main>
  </div>
</template>


<script lang="ts">
import {Component,Vue,Watch} from 'vue-property-decorator';
import {NavBar,Field,CellGroup,Button,Toast,Loading} from 'vant';
import {Mutation,State,Action} from 'vuex-class';
import { UserState } from '@/store/state';

@Component({
  components:{
    [NavBar.name]: NavBar,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Loading.name]: Loading,
  }
})

export default class Login extends Vue{
  @Action public login!:(data:{username:string,password:string})=>void;
  @Mutation private loginLoading!: ()=>void;
  @State private user!: UserState;

  private message?:string;
  private title!: string;
  private username!: string;
  private password!: string;

  public data(){
    return {
      username: '',
      password: '',
      title: this.$route.name,
    }
  }

  @Watch('user', { immediate: true, deep: true })
  private onUserChanged(val:UserState,oldVal:UserState){

    if(val.isLogin === 1){
      this.$router.go(-1);
    }
  }


  private handleLogin(){
    const {username,password} = this
    if(!username || !password){
      Toast('请输入完整的用户名和密码');
    }else{
      this.loginLoading();
      this.login({username,password});
    }
  }

  private mounted(){
    console.log('login');
    
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

main {
  section {
    margin-bottom: 3rem;
  }
  height: calc(50vh - 6rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
