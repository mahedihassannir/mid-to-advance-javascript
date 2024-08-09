// const closures = [];

// function createClosures() {
//     for (let i = 0; i < 1000; i++) {
//         closures.push(function() {
//             console.log(i);
//         });
//     }
// }

// // Call the function
// createClosures();

// // Memory leak: closures array still holds references to the closures
// // Fix this issue by clearing the closures array



// const elements = [];

// function addElement() {
//     const div = document.createElement('div');
//     div.textContent = 'Element';
//     document.body.appendChild(div);
//     elements.push(div);
// }

// function removeAllElements() {
//     while (elements.length) {
//         const element = elements.pop();
//         document.body.removeChild(element);
//         // Memory leak: elements array still holds references
//     }
// }

// // Call the functions
// addElement();
// removeAllElements();

// // Fix this issue by properly clearing the array and removing references



// let intervalId;

// function startInterval() {
//     intervalId = setInterval(() => {
//         console.log('Interval running');
//     }, 1000);
// }

// function stopInterval() {
//     clearInterval(intervalId);
// }

// // Call the functions
// startInterval();
// // Forgot to call stopInterval() eventually






// function createCircularReferences() {
//     const obj1 = {};
//     const obj2 = {};

//     obj1.ref = obj2;
//     obj2.ref = obj1;

//     // Memory leak: Circular references between obj1 and obj2
// }

// // Call the function
// createCircularReferences();

// // Fix this issue by removing references to break the cycle




// const timers = [];

// function createTimers() {
//     for (let i = 0; i < 1000; i++) {
//         timers.push(setTimeout(() => {
//             console.log('Timer fired');
//         }, 1000));
//     }
// }

// // Call the function
// createTimers();

// // Memory leak: timers array still holds references to the timers
// // Fix this issue by clearing the timers or using setInterval with proper cleanup


