/**
 * @author xialeistduio<1065890063@qq.com>
 * @date 16-12-20
 */
'use strict';
var should = require('should');
var segmenation = require('../index');

segmenation.setApiKey('');

describe('test', function() {
  this.timeout(30000);
  it('match', function(done) {
    segmenation.match('今天天气不错', 0, 1).then(function(data) {
      should(data).be.a.Array();
      done();
    }).catch(done);
  });
});