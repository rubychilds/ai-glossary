# Classification

A supervised learning task that predicts which category or class an input belongs to.

Classification is a fundamental task in supervised learning, where the objective is to predict a discrete label or category for a given input. The model is trained on a labeled dataset — meaning each training example is paired with a known class — and learns to generalize the mapping between inputs and their corresponding class labels. The goal is to build a model that can accurately predict the class of new, unseen data points.

## How Classification Works
At its core, classification involves estimating a function 𝑓:𝑋 → 𝑌 where:

* 𝑋: X is the input space (e.g., text, images, tabular data)
* 𝑌: Y is a finite set of class labels (e.g. spam/not spam, cat/dog/horse)

During training, the model learns decision boundaries in the input feature space that separate data points of different classes. After training, new inputs can be classified by identifying which side of the learned boundaries they fall on.

## Types of Classification
### Binary Classification
In binary classification, there are only two possible classes. This is often True/False, Yes/No, Red/Blue, or similar.

Example: A good example of Binary classification is an email spam detection where the email provider will determine if an email should be placed as spam, or not spam. An email provide will look at a variety of attributes for that email, such as sender domain and language and attachements used in the email.

When measuring the accuracy of a binary classification system, the simplest way is to count the errors. This means there are four outcomes: true positive and true negative, means the algorithm has correctly assigned the category, and then false positive and false negative, to mean that the data has been placed in the wrong class. 

### Multiclass Classification:
In multiclass classification, there are more than two mutually exclusive classes, and the model must assign exactly one class to each input.

The model is trained to distinguish between all the classes based on features in the data. During prediction, it chooses the most likely class for each input.

If you have:
* Input space: 𝑋
* Label space: Y = {1, 2,...,𝐾 } where 𝐾 > 2

The model learns a function $𝑓:𝑋 → 𝑌$ predicting one class from $𝐾$ options.

Often implemented using:
* Softmax output layer in neural networks
* One-vs-Rest (OvR) strategy with logistic regression or SVMs
* Decision trees and random forests, which naturally support multiclass problems

### Multilabel Classification
Multilabel classification is a supervised learning task where each input can be assigned to zero, one, or multiple labels simultaneously — unlike binary or multiclass classification, where the prediction is restricted to one class per instance.

Example
Let’s say you’re building a model to tag news articles.

Input: A news article
Output Tags: (Politics, Economy, Health)
Prediction: Politics and Economy

So, the model predicts a set of relevant labels, not just one.

#### How
The model predicts a vector of binary outputs — one for each label.

Suppose there are 5 labels:
$𝑌 = {𝑦1, 𝑦2, 𝑦3, 𝑦4, 𝑦5}$
Then for an input 𝑥, the model predicts a vector: $[ 1, 0, 0, 1, 1]$, meaning labels 1, 4, and 5 are active.

Each label is treated as a separate binary classification problem, often implemented using:

* Sigmoid activation on the output layer
* Binary cross-entropy loss for each label

