// 扩展create-react-app的webpack配置
const { override,  addLessLoader } = require('customize-cra');
module.exports = override(
    // less配置
    addLessLoader({
        javascriptEnabled: true
    })
);


