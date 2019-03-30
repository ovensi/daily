import {_post} from './index';

export const sync= (data:any)=>{
  console.log(data);
  const req = {
    data,
    url: 'sync'
  }
  return _post(req)
}