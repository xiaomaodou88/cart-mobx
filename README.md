## 开始
### 初始化

```bash
# 1.
npx create-react-app cart-mobx
# 2.
cd cart-mobx
# 3. 
yarn add -D react-app-rewired customize-cra @babel/plugin-proposal-decorators


```
 在项目根目录下创建 config-overrides.js 并写入以下内容

 ```js
  const { override, addDecoratorsLegacy } = require('customize-cra')

  module.exports = override(
    addDecoratorsLegacy()
  );
 ```

 修改 package.json文件中 scripts 脚本

 ```json
 /* package.json */
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom",
    "eject": "react-scripts eject"
  },
 ```

 启动
 ```bash
yarn start
```