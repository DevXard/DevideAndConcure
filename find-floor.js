function findFloor(arr, target, start = 0, end = arr.length - 1) {
    if(start >  end) return -1;
    if(target > arr[end]) return arr[end]
  
    let mid = Math.floor((start + end) / 2);
  
    if(arr[mid] === target) return arr[mid]
  
    if(mid > 0 && target >  arr[mid - 1] && target < arr[mid]){
      return arr[mid - 1];
    }
  
    if(target < arr[mid]){
      return findFloor(arr, target , start , mid - 1);
    }else{
      return findFloor(arr, target , mid + 1 , end);
    }
  }

module.exports = findFloor