import moment, { Moment } from 'moment';

export interface RepeatingDateState{
  id: number;
  date: string;
  checked: boolean;
}

export interface TimeSlotList{
  id: number;
  title: string;
}

export interface RemindState{
  id: number;
  remind:string;
  isOpen: boolean;
}

export interface ClockLog{
  id:number;
  time?:moment.Moment;
  isFinished: boolean;
  message?: string;
}

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
    activedName: string;
  };
  path:string;
  tagName: string;
}

export interface SettingState{
  checked: boolean;
  url: string;
}

export interface UserState{
  username: string|undefined;
  id: number |null;
  createdTime: string|undefined;
  url: string;
  isLogin: number;
  isSync: number;
}

export interface Card{
  src: string;
  content?: string;
}

// 单个习惯的信息
export interface HabitList{
  id:number;
  iconName: string;
  color:string;
  mode: string;
  isActive: boolean;
  // 习惯信息
  habitInfo:{
    habitName:string;                            //名字
    RepeatingDate:RepeatingDateState[]|never[]; //练习日期
    activeTimes:number;                         //练习时间
    timeSlotList:TimeSlotList[] | never[];     //
    remind:RemindState[] |never[];            //提醒时间
    inspire: string;                          //激励
  };
  //习惯日志
  habitLog:{
    totalHabitDays: number;              //总共练习天数
    currentConsecutiveDays: number;      //当前连续多少天
    mostConsecutiveDays:number;         //历史最长日期
    createdTime: string;                //创建日期
    totalDays: number;                 //总共天数
    date: ClockLog[]; 
  }
}


export interface State{
  activePage: PageInfo[];
  headerInfo:HeaderInfo;
  habitList: HabitList[];
  today:{
    active:string[]|never[]|number[];
    finishedDate:moment.Moment[]|never[];
    isReceived: boolean;
  };
  setting: SettingState;
  user?: UserState;
  card: Card;
}

const state:State = {
  activePage: [
    {
      id: 0,
      isActived: true,
      name: {
        defaultName: 'today-o',
        activedName: 'today',
      },
      path: '/',
      tagName: '日常',
    },
    {
      id: 1,
      isActived: false,
      name: {
        defaultName: 'habit-o',
        activedName: 'habit',
      },
      path: '/habit',
      tagName: '习惯',
    },
    {
      id: 2,
      isActived: false,
      name: {
        defaultName: 'setting-o',
        activedName: 'setting',
      },
      path: '/setting',
      tagName: '更多',
    },
  ],
  headerInfo:{
    left: 'letter',
    title: 'TODAY',
    right: "",
  },
  habitList: [
    {
      id: 1524822339790,
      iconName: 'taiyang',
      color: '#ffe884',
      mode: 'done',
      isActive: true,
      habitInfo: {
        // 习惯名称
        habitName: '背单词',
        // 重复练习的日期
        RepeatingDate: [
          { id: 0, date: '星期一', checked: true },
          { id: 1, date: '星期二', checked: true },
          { id: 2, date: '星期三', checked: true },
          { id: 3, date: '星期四', checked: true },
          { id: 4, date: '星期五', checked: true },
          { id: 5, date: '星期六', checked: true },
          { id: 6, date: '星期日', checked: true },
        ],
        // 练习的时间段
        activeTimes: 0,
        // 目前已存在的时间段
        timeSlotList: [
          {
            id: 0,
            title: '起床之后',
          },
          {
            id: 1,
            title: '晨间习惯',
          },
          {
            id: 2,
            title: '中午时分',
          },
          {
            id: 3,
            title: '午间习惯',
          },
          {
            id: 4,
            title: '晚间习惯',
          },
          {
            id: 5,
            title: '睡觉之前',
          },
          {
            id: 6,
            title: '任意时间',
          },
        ],
        // 提醒的时间
        remind: [{ id: 0, remind: '12:00', isOpen: false }],
        // 激励自己的话
        inspire: '坚持的路上没有捷径',
      },
      habitLog: {
        // 总共坚持练习了多少天
        totalHabitDays: 0,
        // 当前连续联系了多少天
        currentConsecutiveDays: 0,
        // 历史上最多连续练习多少天
        mostConsecutiveDays: 0,
        // 创建日期
        createdTime: '0',
        // 创建此习惯至今多少天
        totalDays: 0,
        // 坚持的日期
        date: [],
      },
    },
  ],
  today:{
    active:[0],
    finishedDate: [],
    isReceived: false,
  },
  card:{
    src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5xlxmMc1UjkLOsMSPPX9sKgNr3XuCNHCCCwI__iXCx2zftWo',
    content: '1',
  },
  setting: {
    checked: false,
    url:
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4216091012,4283409120&fm=27&gp=0.jpg',
  },
  user:{
    isLogin: -1,
    username: '',
    id: null,
    createdTime: '',
    isSync: -1,
    url:'https://is4-ssl.mzstatic.com/image/thumb/Purple71/v4/be/13/06/be1306d8-e343-2adb-2b04-9a6884300499/pr_source.jpg/1200x630bb.jpg',
  },
}

export default state;