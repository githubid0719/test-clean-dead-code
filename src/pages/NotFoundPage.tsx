import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = (): JSX.Element => {
  return (
    <div className="page">
      <p className="eyebrow">404</p>
      <h1>页面不存在</h1>
      <p className="copy">你访问的路径没有匹配到对应页面。</p>
      <Link className="primary-button" to="/">
        返回首页
      </Link>
    </div>
  );
};
