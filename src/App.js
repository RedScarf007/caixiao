import React from 'react';
import { connect } from 'react-redux';
import * as actions from './Actions.js';
import CounterList from './List/CounterList.js';
import { saveStorage } from './storage.js';
import './style.less';


function App(props) {
  const { allIncrease, addCounter, counterList } = props

  return (
    <div className="App">
      <div className="btn-wrapper">
        <button className="btn" onClick={allIncrease}>+</button>
        <button className="btn" onClick={addCounter}>新增</button>
      </div>
      <div className="btn-wrapper">
        <button className="btn" onClick={() => saveStorage(counterList)}>保存到localStorage</button>
      </div>
      <CounterList />
    </div>
  );
}

const mapStateToProps = (state) => ({ 'counterList': state.App.counterList })
const mapDispatchToProps = (dispatch) => ({
  'addCounter': () => dispatch(actions.addCounter()),
  'allIncrease': () => dispatch(actions.allIncrease())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)