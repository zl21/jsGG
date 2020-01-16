// 收取主线程发给分线程的消息,方法自动的调用
onmessage = function (msg) {
  console.log('主线程过来的:', msg)
  console.log(msg.data)
  // // 在分线程把内容转小写
   var result = msg.data.toLowerCase();
  // // 分线程把内容传给主线程
   postMessage(result);
}