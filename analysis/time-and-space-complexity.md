### Running Time of Selection Sort

Lets assume that we are sorting **N** elements of a given array using Selection Sort.

   - To complete one iteration, we traverse a part of the array (from index i to the end) exactly once (while keeping track of the smallest element encountered so far). Since the longest length we ever traverse in any given iteration is N (in the first iteration when i=1 -> from first to last element), time complexity of completing one iteration is O(N).
   - In Selection Sort, we run N iterations, each of which takes O(N) time. Hence overall time complexity becomes O(N*N).
   - Note that even if array is fully sorted initially, Selection Sort will take O(N<sup>2</sup>) time to complete, just as it will take for a reverse sorted or randomly sorted array.

### Space Complexity of Selection Sort

While swapping two elements, we need some extra space to store temporary values. Other than that, the sorting can be done in-place. Hence space complexity is **O(1) or constant space**.



