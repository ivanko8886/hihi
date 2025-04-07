import React from "react";
import styles from "../../styles/buttons.module.css";
import { Form } from "antd";

type Props = {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type?: "primary" | "secondary" | "danger" | "success";
  loading?: boolean;
  shape?: "round" | "default";
  icon?: React.ReactNode;
  className?: string;
};

export const CustomButton = ({
  children,
  type = "primary",
  loading,
  htmlType = 'button',
  onClick,
  shape = "default",
  icon,
  className = ""
}: Props) => {
  const buttonClasses = [
    styles.button,
    styles[type],
    shape === "round" ? styles.headerButton : "",
    icon ? styles.withIcon : "",
    loading ? styles.loading : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <Form.Item>
      <button
        className={buttonClasses}
        type={htmlType}
        onClick={onClick}
        disabled={loading}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </button>
    </Form.Item>
  );
};
