/**
 * @author xialeistduio<1065890063@qq.com>
 * @date 16-12-20
 */
'use strict';
var fetch = require('node-fetch');
var Promise = require('bluebird');
var qs = require('querystring');
module.exports = {
  apiKey: null,
  /**
   * 设置apiKey
   * @param apiKey
   */
  setApiKey: function(apiKey) {
    this.apiKey = apiKey;
  },
  /**
   * 匹配
   * @param string
   * @param param1 分词最低概率
   * @param param2 是否显示概率
   */
  match: function(string, param1, param2) {
    if (this.apiKey === null) {
      return Promise.reject(new Error('请配置apiKey'));
    }
    param1 = param1 === undefined ? 0 : param1;
    param2 = param2 === undefined ? 0 : param2;

    var params = {
      source: string,
      param1: param1,
      param2: param2
    };
    return fetch('http://apis.baidu.com/apistore/pullword/words?' + qs.stringify(params), {
      headers: {
        apiKey: this.apiKey
      }
    }).then(function(resp) {
      return resp.text().then(function(resp) {
        var results;
        results = resp.split('\r\n');
        results = results.map(function(item) {
          if (!param2) {
            return item;
          }
          var temp = item.split(':');
          if (!temp[0]) {
            return null;
          }
          return {
            keyword: temp[0],
            weight: parseFloat(temp[1])
          };
        });
        return results.filter(function(item) {
          return !!item;
        });
      });
    });
  }
};