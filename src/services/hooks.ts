import React from "react";
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { TUnionAction } from "./actions/interfaces";
import { RootState } from "./types/types";

// export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();
export const useDispatch = dispatchHook<ThunkDispatch<RootState, never, TUnionAction>>;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export const useForm = (inputValues: {[key: string]: string}) => {
  const [values, setValues] = React.useState(inputValues);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value});
  };
  return {values, handleChange, setValues};
}