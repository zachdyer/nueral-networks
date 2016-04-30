var synaptic = require('synaptic');
this.network = new synaptic.Architect.Perceptron(40, 25, 3);

var A = new synaptic.Neuron();
var B = new synaptic.Neuron();

A.project(B); // A now projects a connection to B

var learningRate = 0.3;

// Train nueron B 10 times at a learning rate of 0.3
for(var i = 0; i < 10; i++)
{
    // when A activates 1
    A.activate(1);

    // train B to activate 0
    console.log(B.activate());
    B.propagate(learningRate, 0);
}
