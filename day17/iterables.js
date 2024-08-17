const nums = [1, 2, 3]

console.dir(nums);

const numIterator = nums[Symbol.iterator]()
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());


for (let n of nums) {
    console.log(n);
    // how it work workflow behind the seen of the code

    // array is inerablem because under the array prototype there is a iterator function and the iterator function provide next function and the iterator function get the value of array base on the value it excute

    // const numIterator = nums[Symbol.iterator]()

    // when and how much you call this function it provide the next value



    // summary
    /*
    
    array provide symbol.iterator and this function call next
    */



}