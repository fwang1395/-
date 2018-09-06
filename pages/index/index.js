
var helloData = {
  name:'王建勋'
}
var count = 0

Page({
  data:helloData,
  changeName:function(e) {
    count = count + 1
    if (count%2==0){
      this.setData({
        name:'悠悠'
      })
    }
    else{
    this.setData({
      name:'王飞'
    })}
  }
})