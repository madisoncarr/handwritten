const brain = require('brain.js');
const mnist = require('mnist');

const net = new brain.NeuralNetwork({
  activation: 'sigmoid',
  hiddenLayers: [150],
  iterations: 20000,
  learningRate: 0.05,
});

// const sixTesting = mnist[0].set(1, 950);

// const oneTesting = mnist[1].set(1, 950);
// // sixTesting.forEach(testingObj => {
// //   testingObj.output = 1;
// // });

// const trainingData = [...sixTesting, ...oneTesting];

const set = mnist.set(200, 200);
const trainingSet = set.training;
const testSet = set.test;

// const trainingData = [
//   { input: [0, 0], output: [0] },
//   { input: [0, 1], output: [1] },
//   { input: [1, 0], output: [1] },
//   { input: [1, 1], output: [0] },
// ];

net.train(trainingSet);

// console.log('testing for 6: ', net.run(mnist[0].get(1)));
// console.log('answer for 6: ', mnist[0].set(0, 1)[0].output);
// console.log('testing for 6: ', net.run(mnist[0].get(2)));
// console.log('answer for 6: ', mnist[0].set(0, 1)[0].output);
// console.log('testing for 1: ', net.run(mnist[1].get(1)));
// console.log('answer for 1: ', mnist[1].set(0, 1)[0].output);
// console.log('testing for 1: ', net.run(mnist[1].get(2)));
// console.log('answer for 1: ', mnist[1].set(0, 1)[0].output);

const toNumber = arr => {
  let maxIndex = arr.indexOf(Math.max(...arr));
  return maxIndex;
};

for (let i = 0; i < 30; i++) {
  console.log(
    `testing for ${toNumber(testSet[i].output)}: `,
    toNumber(net.run(testSet[i].input))
  );
}

// console.log(mnist[1].length); //1127
// console.log(mnist[0].length); //1001

// const digit = mnist[1].get();
// var context = document.getElementById('myCanvas').getContext('2d');

// mnist.draw(digit, context); // draws a '1' mnist digit in the canvas

// console.log('Got to the end here');
