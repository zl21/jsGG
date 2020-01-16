(function myModule1 (window) {
  // 私有数据
  var name = '小明';
  var age = 20
  function showName () {
    console.log(name)
  }
  function getAge () {
    return age
  }
  window.myModule2 = {
    showName: showName,
    getAge: getAge
  }
})(window)