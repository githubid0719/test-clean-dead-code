import React from "react";
import { Link } from "react-router-dom";

export const HomePage = (): JSX.Element => {
  return (
    <div className="page">
      <p className="eyebrow">Home</p>
      <h1>欢迎来到首页</h1>
      <p className="copy">
        这是一个带路由的 React 17 + TypeScript 项目，下面放了几个示例页面。
      </p>
      <div className="actions">
        <Link className="primary-button" to="/about">
          去关于页
        </Link>
        <Link className="secondary-button" to="/help">
          去帮助页
        </Link>
      </div>
    </div>
  );
};
