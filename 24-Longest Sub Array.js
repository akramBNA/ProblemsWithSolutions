var longestSubarray = function(nums, k) {
    let left = 0;
    let sum = 0;
    let maxLength = 0;
    
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        
        while (sum > k) {
            sum -= nums[left];
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
        
    }

    return maxLength;
};