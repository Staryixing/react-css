import React from 'react';
import { Message } from 'message';

// import styles from './detail.css'
export default class Detail extends React.Component {
  constructor(props){
    super(props)

  }
  componentDidMount(){
    // 类属性
    function classof(o){
      if(o === null) return "Null";
      if(o === undefined) return "Undefined";
      // console.log("222", Object.prototype.toString.call(o));
      // console.log(o.toString(), '222')
      return Object.prototype.toString.call(o).slice(8, -1);
    }
    classof([1,2,3])
    // 检测数组
    var isArray = Function.isArray || function(o){
      return typeof o === "object" && Object.prototype.toString.call(o) === "[object Array]"
    }
    // 数组的join方法
    Array.join = Array.join || function(a, sep){
      return Array.prototype.join.call(a, sep)
    }
    // 数组slice
    Array.slice = Array.slice || function(a, from, to){
      return Array.prototype.slice.call(a, from, to)
    } 
    // 数组 map
    Array.map = Array.map || function(a, f, thisArg){
      return Array.prototype.map(a, f, thisArg);
    }
        
    // 用来检测类数组对象
    function isArrayLike(o){
      if(
        o && o === "object" && isFinite(o.length) && 
        o.length >= 0 && Math.floor(o.length) &&  o.length < (4294967296)
      ) return true;
      else return false
    }
    var a = { "0": "a", "1": "b", "2": "c", length: 3 };
    // console.log(Array.prototype.join.call(a, "+")); 
    // console.log(Array.prototype.slice.call(a, 0));
    // console.log('数组', isArray())
    // console.log("类数组", isArrayLike({1:1,2:2}));

    // 每次调用函数都会返回一个唯一的整数
    // 初始化函数对象的计数器属性
    // 由于函数声明被提前了，因此这里是可以在函数声明之前给它的成员赋值
    // uniqueInteger.counter = 0;
    var uniqueInteger = (function (){
      var counter = 0;
      return function(){
        return counter++
      }
    })()
    // console.log(uniqueInteger()); 1
    // console.log(uniqueInteger()); 2
    // console.log(uniqueInteger()); 3
    function factorial(n){
      if(isFinite(n)&&n>0&&n==Math.round(n)){
        if(!(n in factorial)) factorial[n] = n*factorial(n-1);
        return factorial[n]
      }
      else return NaN
    }
    factorial[1] = 1;
    //  特定场景下返回带补丁的extend()版本
    var extend = (function(){
      // 在修复前，首先检测是否存在bug
      for (var p in { toString: null }) {
        // 如果代码执行到这里，那么for/in循环会正确工作并返回一个简单版本的extend()函数
        // console.log("444", arguments);
        return function extend(o) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var prop in source)
            o[prop] = source[prop];
          }
          return o;
        };
      }
      // 如果代码执行到这里，说明for/in循环不会枚举测试对象的toString属性
      // 因此返回另一个版本的extend函数，这个函数显式测试Object.prototype的不可枚举属性
      return function patched_extend(o) {
        // console.log('esg',arguments)
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          // 复制所有的可枚举属性
          for (var prop in souce) o[prop] = source[prop];
          // 检查特殊属性
          for (var j = 0; j < protoprops.length; j++) {
            prop = protoprops[j];
            if (souce.hasOwnProperty(prop))
              o[prop] = source[prop];
          }
        }
        return o;
      };
      var protoprops = [
        "toString",
        "valueOf",
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnmerable",
        "toLocaleString"
      ];
    })()
    // 闭包
    let scope = "global scope";
    function checkscope(){
      var scope = "local scope";
      function f(){ return scope }
      return f
    }

    console.log("scope", checkscope()());
    function counter(){
      var n=0;
      return {
        count:function(){ return n++ },
        reset: function(){n=0}
      }
    }
    var c = counter(), d = counter()
    // console.log('c', c.count())
    // console.log('c', c.count())
    // console.log('d', d.count())
    // c.reset()
    // console.log("c", c.count());

    function counter(n){
      return {
        // 属性getter方法返回并给私有计数器var递增1
        get count(){return n++;},
        // 属性set不允许n递减
        set count(m){
          if(m>n) n = m;
          else throw Error("conut can only be set to a larger value")
        }
      }
    }
    var c = counter(100)
    console.log("c", c.count); 
    console.log("c", c.count); 
    c.count = 200
    c.count
    c.count = 202

    function addPrivateProperty(o, name, predicate){
      console.log('arguments', arguments.length)
      var value;
      o["get" + name] = function(){return value}
      o["set" + name] = function(v){
        if (predicate && !predicate(v)) {
          throw Error("set"+ name+ ": invalid value" + v)
        }else value = v
      }
    }
    var o = {}
    addPrivateProperty(o,"Name", function(x) {return typeof x == "string"})
    addPrivateProperty(o,"Sex", function(x) {return typeof x == "string"})
    // o.setName("Frank")
    // o.setSex("female")
    // console.log(o.getName())
    // console.log(o, 'o')
    

    // call apply bind
      // bind的实现方式
    function bind(f,o){
      if(f.bind) return f.bind(o)
      else return function(){
        return f.apply(o, arguments)
      }
    } 
    if(!Function.prototype.bind){
      Function.prototype.bind = function(o /*, args */){
        var self = this, boundArgs = arguments;
        return function(){
          var agrs = [],i;
          for(i=1; i<boundArgs.length; i++ ) agrs.push(boundArgs[i]);
          for (i = 0; i < arguments.length; i++) agrs.push(arguments[i]);
          return self.apply(o, args)
        }
      }
    }
    var x = 4;
    function f(y){return this.x + y}
    var o = {x: 1}
    var g = f.bind(o)
    console.log(g(2), '111')

    

  }
  successHandle(){
    Message.success('新增成功')
  }
  render (){
    return (
      <div>
        详情
        <div>
          物业管理
          <div onClick={this.successHandle}>点击</div>
        </div>
      </div>
    )
  }
}
