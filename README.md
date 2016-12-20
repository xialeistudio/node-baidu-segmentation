# baidu-segmentation
基于百度apistore的中文分词系统

## 使用

```bash
npm install baidu-segmantation
```
## 方法
+ setApiKey(apiKey) 设置ApiKey
+ match(string,param1,param2)
  + string 待分词字符串
  + param1 分词出现最低概率
  + param2 是否显示概率
  
## 测试

```bash
npm run test
```