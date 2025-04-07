
import {
  DashboardOutlined,
  UserOutlined,
  LogoutOutlined,
  LoginOutlined
} from "@ant-design/icons";
import { Avatar, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, selectUser } from "../../features/auth/authSlice";
import { Paths } from "../../paths";
import style from "./index.module.css";
import { CustomButton } from "../custom-button";

export const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate(Paths.login);
  };

  return (
    <header className={style.header}>
      <div className={style.logo}>
        <DashboardOutlined className={style.logoIcon} />
        <Typography.Text className={style.logoText}>FITNESS PRO</Typography.Text>
      </div>

      {user ? (
        <div className={style.userMenu}>
          <Avatar 
            src={user.avatar} 
            icon={<UserOutlined />} 
            className={style.userAvatar}
          />
          <Typography.Text>{user.name}</Typography.Text>
          <CustomButton
            type="secondary"
            shape="round"
            onClick={onLogoutClick}
            icon={<LogoutOutlined />}
          >
            Выйти
          </CustomButton>
        </div>
      ) : (
        <Space>
          <Link to={Paths.register}>
            <CustomButton
              type="secondary"
              shape="round"
              icon={<UserOutlined />}
            >
              Регистрация
            </CustomButton>
          </Link>
          <Link to={Paths.login}>
            <CustomButton
              type="primary"
              shape="round"
              icon={<LoginOutlined />}
            >
              Вход
            </CustomButton>
          </Link>
        </Space>
      )}
    </header>
  );
};
