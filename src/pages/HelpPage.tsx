import React from "react";

export const HelpPage = (): JSX.Element => {
  return (
    <div className="page">
      <p className="eyebrow">Help</p>
      <h1>帮助中心</h1>
      <div className="info-grid">
        <article className="info-card">
          <h2>路由</h2>
          <p>使用 `BrowserRouter` 和 `Routes` 管理页面切换。</p>
        </article>
        <article className="info-card">
          <h2>开发</h2>
          <p>启动后默认访问 `http://localhost:8090/`。</p>
        </article>
        <article className="info-card">
          <h2>扩展</h2>
          <p>后面可以继续加列表页、详情页和表单页。</p>
        </article>
      </div>
    </div>
  );
};
