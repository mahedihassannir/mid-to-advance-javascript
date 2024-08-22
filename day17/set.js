// SETS
// const arr = [1, 2, 3, 4, 5, 5, 41, 2, 3]
// const set = new Set(arr)

// console.log(set.add(12));
// console.log(set);
// console.log(set.has(12));

// MAP 
const maps = new Map([["a", 1], ["b", 2], ["c", 3]]);

maps.set("d",4)
maps.delete("a")
maps.set("a",1)

console.log(maps.has("d"));
for(let [key,value] of maps){
    console.log(key,value);
}