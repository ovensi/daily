import * as Axios from 'axios';

import config from '@/config';
import router  from '@/router'
import {removeInfo} from '@/utils';

const baseURL = config.url.basicUrl;
const axios = Axios.default.create({
  baseURL,
  timeout: 0,
  headers :{'X-Requested-With': 'XMLHttpRequest'},
  maxContentLength: 2000,
  transformResponse:[
    data=>{
      try{
        data = JSON.parse(data);
      }catch(e){
        data = {};
      }
      if(data.status === 403){
        removeInfo();
        router.push('/login');
      }
      return data;
    }
  ]
});

export const _post = (req:any)=>{
  return axios({method:'post',url:`/${req.url}`,data:req.data})
}