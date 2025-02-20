function getMaxSubSum(nums){
    let max = nums[0];
    tempSum = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(nums[i]  > tempSum + nums[i]){
            tempSum = nums[i];
        }
        else tempSum += nums[i];

        if (tempSum > max) max = tempSum;
    }
    return max;

}

alert(getMaxSubSum([-1, 2, 3, -9]) == 5 );
alert(getMaxSubSum([2, -1, 2, 3, -9]) == 6)
alert(getMaxSubSum([-1, 2, 3, -9, 11]) == 11);
alert(getMaxSubSum([-2, -1, 1, 2]) == 3)
alert(getMaxSubSum([100, -9, 2, -3, 5]) == 100)
alert(getMaxSubSum([1, 2, 3]) == 6 );