(function() {

  window.wu = {
    version: '0.0.0'
  };

  // 遍历数据
  wu.each = function(ref, fn) {
    ref.on('child_added', function(snap){
      var item = snap.val();
      var id = snap.key();
      fn && fn(item, id);
    });
  };


  wu.remove = function(ref, id, opts) {

  };

})(window);