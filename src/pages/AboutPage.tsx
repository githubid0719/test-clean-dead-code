import React from "react";

export const AboutPage = (): JSX.Element => {
  return (
    <div className="page">
      <p className="eyebrow">About</p>
      <h1>关于这个项目</h1>
      <p className="copy">
        这个页面展示了基础路由结构、导航和简单的页面布局，适合后续继续扩展业务页面。
      </p>
      <ul className="feature-list">
        <li>React 17</li>
        <li>TypeScript 4.3.5</li>
        <li>Webpack 4.46.0</li>
        <li>React Router DOM 6.28.0</li>
      </ul>
    </div>
  );
};
