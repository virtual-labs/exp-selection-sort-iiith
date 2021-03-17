### How can we sort an array?

In Selection Sort, we take the simplest, most intuitive approach to sort an array. Choose the smallest number, place it in the first position. Then choose the next smallest number out of the remaining elements, and place it in the second position and so on till the end!
### Intuition Behind the Algorithm
<img src="images/selection_concept.png"/>
### Selection Sort Concept

Now that we have understood the basic intuition behind this algorithm, let's see how we can perform it in a systematic way :

We will perform N-1 iterations on the array (N is the number of elements in the array). In iteration i (1≤i≤N-1):

   - We will traverse the array from the i<sup>th</sup> index to the end and find the smallest number among these elements. Note that if there are two smallest elements of the same value, we choose the one with the lower index.
   - We will swap this smallest element with the i<sup>th</sup> element.
   - Hence at the end of the i<sup>th</sup> iteration, we have found the i<sup>th</sup> smallest number, and placed it at the ith position in the array!

In the (N-1)<sup>th</sup> iteration, we will place the (N-1)<sup>th</sup> smallest element, which is the 2nd largest element in the array, at the second last position. This will leave us with one element which would already be at its correct place.This completes our sorting!
Selection Sort Algorithm

### Selection Sort Algorithm
<img src="images/selection_algorithm.png"/>

### Consolidated Algorithm for Selection Sort

Given an array of N elements, run N-1 iterations.
In iteration i (1≤i≤N-1):

  -  Find the smallest element with the least index, such that **index≤i≤N-1**.
  -  Swap the smallest element found with element at index **i**.


