// Generated by CoffeeScript 1.6.3
(function() {
  define(['jQuery', 'angular', 'bootstrap'], function($, angular) {
    var _msgEl, _msgWrapEl;
    _msgWrapEl = $('\
        <div class="row"><div class="col-md-4 col-md-offset-4 msg-el"></div></div>\
    ');
    _msgEl = _msgWrapEl.find('.msg-el');
    _msgWrapEl.css({
      zIndex: 1500
    });
    _msgEl.css({
      position: 'relative'
    });
    $(function() {
      return _msgWrapEl.prependTo('body');
    });
    return angular.module('admin.provider', []).factory('Msg', function() {
      var Msg;
      Msg = {};
      Msg.pushMsg = function(msg, type) {
        var el, time;
        if (type == null) {
          type = 'warning';
        }
        el = $("                    <div class=\"alert alert-" + type + "\">                        <button type=\"button\" data-dismiss=\"alert\" aria-hidden=\"true\" class=\"close\">&times;</button>                        " + msg + "                    </div>");
        el.css({
          position: 'absolute',
          width: '100%',
          zIndex: 1500
        });
        time = setTimeout(function() {
          return el.remove();
        }, 3000);
        el.appendTo(_msgEl);
      };
      Msg.alert = function(msg) {
        return Msg.pushMsg(msg);
      };
      Msg.success = function(msg) {
        return Msg.pushMsg(msg, 'success');
      };
      Msg.error = function(msg) {
        return Msg.pushMsg(msg, 'danger');
      };
      return this.$get = function() {
        return Msg;
      };
    });
  });

}).call(this);
