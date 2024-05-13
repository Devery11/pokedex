import {ThunkAction, UnknownAction} from '@reduxjs/toolkit';
import {RootState} from '@reduxjs/toolkit/query';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState<any, any, any>,
  unknown,
  UnknownAction
>;
