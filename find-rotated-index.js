function findRotatedIndex(array, target) {
    let rotationStart = findRotationStart(array)
   
     if (rotationStart > 0 && target >= array[0] && target <= array[rotationStart - 1]){
       return devideAndConcure(array, target, 0,  rotationStart-1)
     }else{
       return devideAndConcure(array, target, rotationStart, array.length -1)
     }
     
   }
   
   function devideAndConcure(arr, target, start, end ){
     if(start > end) return -1;
   
     let mid = Math.floor((start + end) / 2);
     if(arr[mid] === target)return mid
     if(arr[mid] < target){
       return devideAndConcure(arr, target, mid + 1, end)
     }else{
       return devideAndConcure(arr, target, start, mid - 1)
     }
   }
   
   
   function findRotationStart(arr, start = 0, end = arr.length - 1){
     if(start > end) return 0
   
     let mid = Math.floor((start + end) / 2);
     if( arr[mid] > arr[mid + 1]){
       return mid + 1
     }else if (arr[start] < arr[mid] ){
       return findRotationStart(arr, mid + 1, end)
     }else{
        return findRotationStart(arr, start, mid - 1)
     }
     return 0
   }

module.exports = findRotatedIndex