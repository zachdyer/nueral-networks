var synaptic = require('synaptic');
this.network = new synaptic.Architect.Perceptron(40, 25, 3);

var A = new synaptic.Neuron();
var B = new synaptic.Neuron();
var C = new synaptic.Neuron();
A.project(B); // A now projects a connection to B
B.project(C);

var learningRate = 0.3;

for(var i = 0; i < 10; i++)
{
    // when A activates 1
    A.activate(1);

    // train B to activate 0
    console.log(B.activate());
    B.propagate(learningRate, 0);
}

// test it
/*
console.log("A.activate(1)");
console.log(A.activate(1));
console.log("B.activate()");
console.log(B.activate()); // 0.006540565760853365
*/

//console.log(A);
