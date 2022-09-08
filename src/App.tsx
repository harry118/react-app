import React, { useContext } from 'react';
import { useCommon, CommonContext } from '@winshare/common-store';
// import { useCommon, CommonContext } from './store';
import Demo from '@winshare/demo';

import './App.css';

const App: React.FC = () => {
  const { common, dispatchCommon } = useCommon();
  // const { common, dispatchCommon } = useContext<any>(CommonContext);
  console.log('common', common);
  return (
    <div className='App'>
      <span>
        -----------------这里是写入组件的context------------------
      </span>
      <p>name:{common?.name}</p>
      <p>version:{common?.version}</p>
      <button
        onClick={() =>
          dispatchCommon({
            type: 'UPDATE_COMMON',
            payload: {
              name: '33333',
              version: '0.3.0',
            },
          })
        }
      >
        changeData
      </button>

      <fieldset>
        <span>
          -----------------这里是引入的@winshare/demo包------------------
        </span>
        <Demo />
      </fieldset>
    </div>
  );
};

export default App;
