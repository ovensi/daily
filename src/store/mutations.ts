import moment from 'moment'

import {State,HabitList} from './state';
import config from '@/config';
import _ from '@/utils'

export default {
  // 切换活动图标状态
  getActivePage(state:State,id:number){
    state.activePage.map(item=>{
      if(item.id !== id){
        item.isActived = false
      }else{
        item.isActived = true
      }
    })
  },
  // 切换header上图标
  changeHeaderState(state:State,id:number){
    const {headerInfo} = state;
    switch(id){
      case 0:
        headerInfo.left = 'letter';
        headerInfo.right = '', //filter
        headerInfo.title = 'TODAY';
        break;
      case 1:
        headerInfo.left = 'file';
        headerInfo.right = 'new',
        headerInfo.title = '我的习惯';
        break;
      case 2:
        headerInfo.left = '';
        headerInfo.right = '', //skin
        headerInfo.title = '设置';
        break;
    }
  },

  // 创建习惯
  createHabit(state: State, habit: HabitList) {
    state.habitList.push(habit);
  },
  // 删除未定义好的习惯
  RemoveHabit(state: State) {
    state.habitList.pop();
  },

  // 切换当前状态是否完成
  changeFinished(state: State,playoad:{id:number;daysId:number}){
    const list = state.habitList;
    const habit = _.find(list,playoad.id);
    // save date
    const dateList = habit!.habitLog.date;
    const len = dateList.length;

    const date = dateList.find(item=> item.id === playoad.daysId);
    date!.isFinished = !date!.isFinished;

    // 当当前信息被切换成"已完成"
    if (date!.isFinished) {
      // 当当前打卡信息属于当天的时候
      if (dateList[len - 1].id === playoad.daysId) {
        habit!.habitLog.currentConsecutiveDays++;
      } else {
        habit!.habitLog.currentConsecutiveDays = _.getCurrentMaxDays(dateList);
      }
      habit!.habitLog.totalHabitDays++;
    } else {
      // 当当前打卡信息属于当天的时候
      if (dateList[len-1].id === playoad.daysId) {
        habit!.habitLog.currentConsecutiveDays--;
      } else {
        habit!.habitLog.currentConsecutiveDays = _.getCurrentMaxDays(dateList);
      }
      habit!.habitLog.totalHabitDays--;
      date!.message = '';
    }
    habit!.habitLog.mostConsecutiveDays = _.getMaxDays(dateList);
  },
  
  // 获取需要当天执行的习惯
  changeCollapse(state: State, activeNames: number[] | never[]) {
    const today = state.today;
    today.active = activeNames;
  },
  // 未添加当日任务的习惯列表进行更新
  updateHabits(state: State, updateList: number[]) {
    const today = moment();
    const newId = _.getDaysId();
    const list = state.habitList;
    for (let index = 0; index < updateList.length; index++) {
      const id = updateList[index];
      const habit = _.find(list, id);

      habit!.habitLog.date.push({
        id: newId,
        time: today,
        isFinished: false,
        message: '',
      });
    }
  },

    // 储存打卡日志
    saveLog(
      state: State,
      payload: { id: number; daysId: number; message: string },
    ) {
      const list = state.habitList;
      const habit = _.find(list, payload.id);
      const day = habit!.habitLog.date.find(item => item.id === payload.daysId);
      day!.message = payload.message;
    },

    // 切换习惯当前状态
    changeModel(state:State,payload:{id:number,value:string}){
      const list = state.habitList;
      const habit = _.find(list,payload.id)
      habit!.isActive = true;
      habit!.mode = payload.value;
    },

    // 将此习惯归档
    deleteHabit(state: State, id:number){
      const list = state.habitList;
      const habit = _.find(list,id);
      habit!.isActive = false;
    },

    // 是否开启整点报时
    changeHourly(state: State,checked: boolean){
      state.setting.checked = checked;
    },

    // 退出登录
    logoutSuccess(state:State){
      state.user!.id = null;
      state.user!.username = '';
      state.user!.url = 'https://is4-ssl.mzstatic.com/image/thumb/Purple71/v4/be/13/06/be1306d8-e343-2adb-2b04-9a6884300499/pr_source.jpg/1200x630bb.jpg';
      state.user!.isLogin = -1;
     },

    //是否同步成功
    sync(state:State,isSync: number){
      state.user!.isSync = isSync;
    }
}