import React from 'react';
import { connect } from 'react-redux';

const CounterContainer = (props) => {

  const { counter, dispatch } = props;

  return(
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch({ type: 'ADD'})}>Add One</button>
      <button onClick={() => dispatch({ type: 'ADDTEN'})}>Add Ten</button>
      <button onClick={() => dispatch({ type: 'RESET'})}>Reset</button>
      <button onClick={() => dispatch({ type: 'REMOVE'})}>Remove One</button>
      <button onClick={() => dispatch({ type: 'REMOVETEN'})}>Remove Ten</button>
    </div>
  )
};

const mapStateToProps = state => ({
  counter: state
});

export default connect(mapStateToProps)(CounterContainer);