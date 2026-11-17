var twoSum = function(nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let complement = target - currentNum;

        if (map[complement] !== undefined) {
            return [map[complement], i];
        }

        map[currentNum] = i;
    }

    return [];
};
