import {ActionTree} from 'vuex';
import axios from 'axios';

import {sync} from '@/api/sync'

import config from '@/config';

const actions:ActionTree<any,any> = {

  async sync({state,commit},data){
    const res: Ajax.AjaxResponse = await sync(data)
      .then( res=>res.data)
      .catch((e:string)=>console.error(e));
    if(res){
      commit('sync',1)
    }   
  }
}

export default actions;