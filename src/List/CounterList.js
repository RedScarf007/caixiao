import React from 'react';
import { connect } from 'react-redux';
import Counter from './Counter.js';

function CounterList(prpos) {
    const { counterList } = prpos
    return (<div className="CounterList">{counterList.map((value, i) => <Counter value={value} index={i} key={i} />)}</div>)
}

const mapStateToProps = (state) => ({ 'counterList': state.App.counterList })

export default connect(mapStateToProps, null)(CounterList)
