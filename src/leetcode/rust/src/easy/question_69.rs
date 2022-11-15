#[allow(unused)]
pub fn my_sqrt(x: i32) -> i32 {
    if x < 2 {
        return x;
    }

    let half_x = (x / 2) as i64;
    for i in 1..=half_x {
        if i * i <= x as i64 && (i + 1) * (i + 1) > x as i64 {
            return i as i32;
        }
    }

    panic!("")
}
