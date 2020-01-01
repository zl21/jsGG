function myModule1 () {
  // 私有数据
  var name = '小明';
  var age = 20
  function showName () {
    console.log(name)
  }
  function getAge () {
    return age
  }
  var obj = {
    showName: showName,
    getAge: getAge
  }
  return obj
}