import React, { useState, useEffect, useReducer } from 'react';
import './style.css';

import Button from '@mui/material/Button';

function reducer(state, action) {
  if (action.type === 'name_change') {
    return {
      ...state,
      name: action.payload,
    };
  }
  if (action.type === 'email_change') {
    return {
      ...state,
      email: action.payload,
    };
  }
  throw Error('Unknown action.');
}

const initialState = {
  name: '',
  email: '',
};

export default function App() {
  const [options, setOptins] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setOptins(true);
  }, []);

  const handleFormSave = (event) => {
    event.preventDefault();
    {
      !state.email ? alert('plz add email') : alert('save');
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {options ? 'Abhishek ' : <Button variant="contained">abhi</Button>}
        <Button onClick={() => setOptins(true)}>Change State</Button>
        <Button onClick={() => setOptins(false)}>Change State to False</Button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <form onSubmit={handleFormSave}>
          <input
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: 'name_change', payload: e.target.value })
            }
            placeholder="Your Name"
          />
          <input
            type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: 'email_change', payload: e.target.value })
            }
            placeholder={'Your Email'}
          />
          <Button type="submit">submit</Button>
        </form>
      </div>
    </>
  );
}
