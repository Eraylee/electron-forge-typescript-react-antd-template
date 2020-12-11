import React from "react";
import ReactDOM from "react-dom";
import { Button } from 'antd'
import "./index.less";

ReactDOM.render(<Button>hellow react</Button>, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
