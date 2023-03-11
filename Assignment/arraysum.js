
      let arr = [10, 11, 12, 13, 12, 11, 10];

      console.log("Array elements are :-  " + arr);

      let n = arr.length;

      console.log("\n  Sum of array elements =  " + arraySum(arr, n));

      console.log("\n  Sum of even elements of array =  " + evenSum(arr, n));
      console.log("\n  Sum of odd elements of array =  " + oddSum(arr, n));

      function arraySum(arr, n) {
        let sum = 0;
        for (let i = 0; i < n; i++) {
          sum = sum + arr[i];
        }
        return sum;
      }
      function evenSum(arr, n) {
        let even = 0;
        for (let i = 0; i < n; i++) {
          if (arr[i] % 2 == 0) {
            even = even + arr[i];
          }
        }
        return even;
      }
      function oddSum(arr, n) {
        let odd = 0;
        for (let i = 0; i < n; i++) {
          if (arr[i] % 2 != 0) {
            odd = odd + arr[i];
          }
        }
        return odd;
      }
    