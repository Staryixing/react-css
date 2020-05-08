class Utils {

  // 数组对象
  isArrayLike(o){
    console.log(typeof o)
    console.log('length',o.length, isFinite(o))
    if(
      o && typeof o === 'object' && isFinite(o) && 
      o.length >= 0 &&
      o.length === Math.floor(o.length)&&
      o.length < 4294967296
    ) return true
    else return false
  };

  // 数字数组排序
  numSort(arr){
    function compare(num1, num2){
      return num1 - num2
    }
    arr.sort(compare)
    return arr;
  };

  // 解析来自url的查询串中的name=value参数对
  urlArgs(){
    var args = {};
    var query = location.search.substring(1); // 查询字符串，并删除？
    var pairs = query.split("&"); // 按&转为数组
    for(let i=0; i<pairs.length; i++ ){
      var pos = pairs[i].indexOf('=') // 找到=的位置
      if(pos == -1) continue;
      var name = pairs[i].substring(0, pos);
      var value = pairs[i].substring(pos + 1);
      value = decodeURIComponent(value);
      args[name] = value
    }
    return args;
  }
  

}

export default new Utils()
