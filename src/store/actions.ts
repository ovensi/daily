import {ActionTree} from 'vuex';
import axios from 'axios';

import {sync} from '@/api/sync'
import {login} from '@/api/user'

import config from '@/config';

const actions:ActionTree<any,any> = {

  async sync({state,commit},data){
    const res: Ajax.AjaxResponse = await sync(data)
      .then( res=>res.data)
      .catch((e:string)=>console.error(e));
    if(res){
      commit('sync',1)
    }   
  },

  async login({state,commit},data){
    const res:Ajax.AjaxResponse = await login(data)
      .then(res=>res.data)
      .catch((e:string)=>console.error(e));
    if(res){
      commit('loginSuccess',res);
    }
  }
}

export default actions;