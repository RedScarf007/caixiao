import { ADD_COUNTER, ALL_INCREASE, COUNTER_INCREASE, DELETE_COUNTER } from './ActionType.js';

export default function Reducers(state = { 'counterList': [] }, action) {
    const list = state.counterList.slice(0)

    switch (action.type) {
        // 添加计数器
        case ADD_COUNTER: {
            list.push(0) // 默认值0
            return { ...state, 'counterList': list }
        }
        // 所有计数器加1
        case ALL_INCREASE: return { ...state, 'counterList': list.map(counter => counter + 1) }
        // 计数器加1
        case COUNTER_INCREASE: {
            list[action.index] = list[action.index] + 1
            return { ...state, 'counterList': list }
        }
        // 删除计数器
        case DELETE_COUNTER: {
            list.splice(action.index, 1)
            return { ...state, 'counterList': list }
        }
        default: return state
    }
}