import moment from 'moment';



export interface HeaderInfo{
  left?: string;
  title: string;
  right?: string;
}


export interface PageInfo{
  id: number;
  isActived: boolean;
  name:{
    defaultName:string;
    activeName: string;
  };
  path:string;
  tagName: string;
}


export interface State{
  activePage: PageInfo[];
  headerInfo:HeaderInfo;
}

const state:State = {
  activePage: [
    {
      id:0,
      isActived: true,
      name:{
        defaultName: 'today-0',
        activeName: 'today',
      },
      path: '/',
      tagName: '日常'
    }
  ],
  headerInfo:{
    left: 'letter',
    title: 'TODAY',
    right: "",
  }
}

export default state;