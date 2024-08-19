// directions: 
//   3
// 2 # 0 
//   1

export function dirIndex(dx, dy) {
    if (dx != 0) {
        if (dx > 0) {
            return 0;
        } else {
            return 2;
        }
    } else {
        if (dy > 0) {
            return 1;
        } else {
            return 3;
        }
    }
}

export function dirTwoPoints (p1, p2) {
    return dirIndex(p2[0] - p1[0], p2[1] - p1[1]);
}
export const directions = [[1,0], [0,1], [-1,0], [0, -1]];
