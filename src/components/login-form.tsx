import { CircularProgress, TextField } from "material-ui";
import Button from "material-ui/Button";
import * as React from "react";
import { connect } from "react-redux";
import {
  firebaseSignIn,
  firebaseSignOut
} from "../modules/firebase/firebase-actions";
import { IApplicationState } from "../modules/store/store-types";
import { loginFormChange } from "../modules/login-form/login-form-actions";
import { ILoginFormProps } from "../modules/login-form/login-form-types";

const LoginFormComponent: React.SFC<ILoginFormProps> = (
  props: ILoginFormProps
): React.ReactElement<ILoginFormProps> => {
  const { email, password, dispatch } = props;

  const login = () => dispatch(firebaseSignIn(email, password));
  const _onChange: React.ChangeEventHandler<HTMLInputElement> = event =>
    dispatch(loginFormChange({ [event.target.id]: event.target.value }));
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "column"
  };

  return (
    <div style={style}>
      <TextField
        id="email"
        label="email"
        type="email"
        value={email}
        onChange={_onChange}
      />
      <TextField
        id="password"
        label="password"
        type="password"
        value={password}
        onChange={_onChange}
      />

      <Button onClick={login}>Login</Button>
    </div>
  );
};

const mapStateToProps = (state: IApplicationState) => ({
  ...state.loginForm,
  inProgress: state.firebase.inProgress,
  connected: state.firebase.connected,
  user: state.firebase.user
});

export const LoginForm = connect(mapStateToProps)(LoginFormComponent);
