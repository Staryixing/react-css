const Utils = {
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
  }
}
export default Utils