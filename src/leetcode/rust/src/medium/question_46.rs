#[allow(unused)]
pub fn permute(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut res: Vec<Vec<i32>> = vec![];
    backtrack(&nums, &mut vec![], &mut res);
    res
}

#[allow(unused)]
fn backtrack(nums: &Vec<i32>, track: &mut Vec<i32>, res: &mut Vec<Vec<i32>>) {
    if track.len() == nums.len() {
        res.push(track.to_vec());
        return;
    }

    for num in nums {
        if !track.contains(num) {
            track.push(*num);
            backtrack(nums, track, res);
            track.pop();
        }
    }
}