import { ADD_COUNTER, ALL_INCREASE, COUNTER_INCREASE, DELETE_COUNTER } from './ActionType.js'

export const addCounter = () => ({ type: ADD_COUNTER })
export const allIncrease = () => ({ type: ALL_INCREASE })
export const counterIncrease = (index) => ({ type: COUNTER_INCREASE, index: index })
export const deleteCounter = (index) => ({ type: DELETE_COUNTER, index: index })