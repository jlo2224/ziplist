function zipList(l1, l2){
  ll = [];
  for (let i = 0; i < l1.length; i++){
    ll.push(l1[i]);
    ll.push(l2[i]);
  }
  return ll;
}

function zipListTheSimpleWay(l1, l2){
  return _.flatten(_.zip(l1, l2));
}

const arr1 = ['a', 'b', 'c'];
const arr2 = [1,2,3];
console.log(zipList(arr1, arr2));
console.log(zipListTheSimpleWay(arr1, arr2));