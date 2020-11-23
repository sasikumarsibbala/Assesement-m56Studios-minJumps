 var arr=[];

arr= [100,-23,-23,404,100,23,23,23,3,404] ;
function main(arr) {
  let map = new Map();
  
  for(let i=0;i<arr.length;i++)
  {
      if(!map.has(arr[i])){
          map.set(arr[i], []); 
      }
      map.get(arr[i]).push(i);
  }
  let mySet = new Set();
  mySet.add(0);
  let A = [0];
  let count = 0;
  while(!mySet.has(arr.length-1)){
      count++;
      let newArray = [];
      for(let P of A){
          for(let item of Options(arr, P, mySet, map)){
              newArray.push(item);
              mySet.add(item);
              if(item == arr.length-1){
                  break;
              }
          }
          if(mySet.has(arr.length-1)){
              break;
          }
      }
      A = newArray;
  }
  return count;
};
function Options(arr, P, mySet, map){
  let result = [];
  if(P > 0 && arr[P-1] != arr[P] && !mySet.has(P-1)){
      result.push(P-1);
  }
  if(P < arr.length-1 && arr[P+1] != arr[P] && !mySet.has(P+1)){
      result.push(P+1);
  }
  if(map.has(arr[P])){
      for(let i of map.get(arr[P])){
          if(i != P && !mySet.has(i)){
              result.push(i);
          }
      }
      map.delete(arr[P]);
  }
  return result;
}
console.log(main(arr));
document.writeln(main(arr));