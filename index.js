const brain = require('brain.js');
const mnist = require('mnist');

const net = new brain.NeuralNetwork({
  activation: 'sigmoid',
  hiddenLayers: [150],
  iterations: 20000,
  learningRate: 0.1,
});

const set = mnist.set(800, 200);
const trainingSet = set.training;
const testSet = set.test;

net.train(trainingSet);

const toNumber = arr => {
  let maxIndex = arr.indexOf(Math.max(...arr));
  return maxIndex;
};

let rightAnswer = 0;

for (let i = 0; i < 50; i++) {
  if (toNumber(testSet[i].output) === toNumber(net.run(testSet[i].input))) {
    rightAnswer += 1;
  }
  console.error(
    `testing for ${toNumber(testSet[i].output)}: `,
    toNumber(net.run(testSet[i].input))
  );
}

console.error(`accuracy: ${(rightAnswer * 100) / 50}%`);

// const digit = mnist[1].get();
// const context = document.getElementById('myCanvas').getContext('2d');

// mnist.draw(digit, context); // draws a '1' mnist digit in the canvas

console.log(JSON.stringify(net.toJSON()));
