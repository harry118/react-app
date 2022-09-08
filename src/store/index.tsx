import { createContext, useReducer, useContext } from 'react';
import cloneDeep from 'lodash/cloneDeep';

const defaultCommonData = {
  name: 'winshare',
  version: '1.0.0',
};
export type CommonDataType = typeof defaultCommonData;

export const CommonContext = createContext<any>({});
export const UPDATE_COMMON = 'UPDATE_COMMON';
const reducer = (state: any, action: any) => {
  if (action.type === 'UPDATE_COMMON') {
    state = cloneDeep(action.payload);
  }
  return state;
};
export const CommonProvider = ({ children }: any) => {
  const [common, dispatchCommon] = useReducer(reducer, defaultCommonData);
  return (
    <CommonContext.Provider value={{ common, dispatchCommon }}>
      {children}
    </CommonContext.Provider>
  );
};
export const useCommon = () => {
  const context = useContext(CommonContext);
  return context;
};
