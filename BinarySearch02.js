let array = [];
while(array.length < 20) {
  let ran = Math.floor(Math.random()*60);
  if(array.includes(ran)) { continue; }
  array.push(Math.floor(ran));
}
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-');
array.sort((a,b) => { return a - b;});
array.forEach((el,ind) => { console.log(`arr[${ind}] = ${el}`) });
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-');

const find = Math.floor((Math.random()*60));
let res = binarySearch(array, 0,array.length,find);
console.log(`looking for: ${find} found it at index: ${res}`);

function binarySearch(arr, l, r, i) {
    let mid = Math.floor(l + (r - l) / 2);
  	console.log(`left-${l} right-${r} mid${mid}`);

    if(r > 1 && l < r) {
        if (arr[mid] === i) {
            console.log(`match ${arr[mid]} === ${i}`);
            return mid;
        }

        if (arr[mid] > i) {
            return binarySearch(arr, l, mid - 1, i); 
        } 

        return binarySearch(arr,mid + 1, r, i);
    }

    console.log(' Not found ');
    return -1;
}

/* Java implementation of recursive Binary Search 
class BinarySearch { 
    
    int arr[] = { 2, 3, 4, 10, 40 }; 
    int n = arr.length; 
    int x = 10; 
    int result = binarySearch(arr, 0, n - 1, x); 

    // Returns index of x if it is present in arr[l..r], else return -1 

    int binarySearch(int arr[], int l, int r, int x) 
    { 
        if (r >= l) { 
            int mid = l + (r - l) / 2; 
  
            // If the element is present at the 
            // middle itself 
            if (arr[mid] == x) 
                return mid; 
  
            // If element is smaller than mid, then 
            // it can only be present in left subarray 
            if (arr[mid] > x) 
                return binarySearch(arr, l, mid - 1, x); 
  
            // Else the element can only be present 
            // in right subarray 
            return binarySearch(arr, mid + 1, r, x); 
        } 
  
        // We reach here when element is not present 
        // in array 
        return -1; 
    } 
   
 
 */