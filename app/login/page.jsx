import React from "react";
import styles from "../ui/login/loginForm/loginForm.module.css";
import LoginForm from "app/ui/login/loginForm/loginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
