import {_post} from './index';

export const login= (data:any)=>{
  const req = {
    data,
    url: 'admin/user_login',
  };
  return _post(req); 
}