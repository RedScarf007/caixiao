import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../Actions.js';

function Counter(props) {
    const { value, index, counterIncrease, deleteCounter } = props
    return (
        <div className="Counter">
            <div className="value">{value}</div>
            <button className="btn" onClick={() => counterIncrease(index)}>+</button>
            <button className="btn" onClick={() => deleteCounter(index)}>删除</button>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => ({
    'counterIncrease': (index) => dispatch(actions.counterIncrease(index)),
    'deleteCounter': (index) => dispatch(actions.deleteCounter(index))
})

export default connect(null, mapDispatchToProps)(Counter)