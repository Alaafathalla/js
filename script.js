function findSimilar(arr1,arr2) {
    const similarElements =[];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i]==arr2[j]) {

            similarElements.push(arr1[i]);
            
        }
    
      }
        
    }
    return similarElements;
}

var arr1=[1,2,3,2,3];
var arr2=[4,3,2,5,1];
const similarElements = findSimilar(arr1, arr2);
console.log(similarElements);




