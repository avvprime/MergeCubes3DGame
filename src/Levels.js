const LEVELS = {
    1: {
        time: 30,
        move: 5,
        grid: [[1, 1]]
    },
    2: {
        time: 30,
        move: 5,
        grid: [[1, 0, 1]]
    },
    3: {
        time: 30,
        move: 5,
        grid: [
            [1, 1],
            [1, 1]
        ]
    },
    4: {
        time: 30,
        move: 2,
        grid: [
            [1, 1],
            [1, 9]
        ]
    },
    5: {
        time: 30,
        move: 2,
        grid: [
            [1, 9],
            [1, 9],
            [1, 9]
        ]
    },
    6: {
        time: 30,
        move: 4,
        grid: [
            [1, 1],
            [1, 1],
            [1, 1]
        ]
    },
    7: {
        time: 30,
        move: 4,
        grid: [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ]
    },
    8: {
        time: 30,
        move: 8,
        grid: [
            [1, 1, 1],
            [1, 9, 1],
            [1, 1, 1]
        ]
    },
    9: {
        time: 30,
        move: 5,
        grid: [
            [1, 9, 1, 9],
            [0, 1, 0, 1]
        ]
    },
    10: {
        time: 30,
        move: 4,
        grid: [
            [1, 9, 9],
            [1, 9, 9],
            [1, 0, 1]
        ]
    },
    11: {
        time: 30,
        move: 4,
        grid: [
            [1, 9, 1],
            [0, 9, 0],
            [0, 0, 0]
        ]
    },
    12: {
        time: 30,
        move: 5,
        grid: [
            [1, 9, 1, 9],
            [0, 0, 0, 0],
            [9, 1, 9, 1]
        ]
    },
    13: {
        time: 30,
        move: 6,
        grid: [
            [0, 1, 0],
            [9, 0, 9],
            [0, 0, 1],
            [1, 9, 1]
        ]
    },
    14: {
        time: 30,
        move: 7,
        grid: [
            [1, 0, 1, 0, 0],
            [9, 9, 9, 0, 9],
            [1, 1, 1, 1, 1]
        ]
    },
    15: {
        time: 30,
        move: 4,
        grid: [
            [1, 0, 1],
            [0, 1, 0],
            [1, 0, 1]
        ]
    },
    16: {
        time: 30,
        move: 4,
        grid: [
            [1, 9, 0],
            [1, 0, 0],
            [0, 9, 1]
        ]
    },
    17: {
        time: 30,
        move: 7,
        grid: [
            [1, 1, 9, 1],
            [0, 9, 1, 0],
            [1, 9, 0, 1],
            [0, 0, 0, 9]
        ]
    },
    18: {
        time: 30,
        move: 10,
        grid: [
            [9, 1, 9, 1],
            [0, 0, 0, 0],
            [1, 9, 1, 0],
            [9, 9, 9, 1]
        ]
    },
    19: {
        time: 30,
        move: 5,
        grid: [
            [2, 0, 0, 2]
        ]
    },
    20: {
        time: 30,
        move: 5,
        grid: [
            [2, 0, 2],
            [0, 2, 0]
        ]
    },
    21: {
        time: 30,
        move: 5,
        grid: [
            [0, 2, 0],
            [2, 0, 0],
            [0, 0, 2]
        ]
    },
    22: {
        time: 30,
        move: 5,
        grid: [
            [2, 9, 2, 9],
            [0, 2, 0, 2],
            [9, 9, 9, 0]
        ]
    },
    23: {
        time: 30,
        move: 7,
        grid: [
            [2, 2, 9, 9],
            [9, 0, 2, 2],
            [2, 2, 9, 9]
        ]
    },
    24: {
        time: 30,
        move: 4,
        grid: [
            [2, 0, 0],
            [0, 9, 0],
            [0, 0, 2]
        ]
    },
    25: {
        time: 30,
        move: 5,
        grid: [
            [2, 9, 2, 9],
            [0, 0, 0, 0],
            [9, 2, 9, 2]
        ]
    },
    26: {
        time: 30,
        move: 7,
        grid: [
            [2, 2, 9, 2],
            [0, 9, 2, 0],
            [2, 9, 0, 2],
            [0, 0, 0, 9]
        ]
    },
    27: {
        time: 30,
        move: 7,
        grid: [
            [2, 0, 2, 0, 0],
            [9, 9, 9, 0, 9],
            [2, 2, 2, 2, 2]
        ]
    },
    28: {
        time: 30,
        move: 5,
        grid: [
            [2, 0, 0, 0],
            [0, 9, 9, 2],
            [2, 9, 9, 2]
        ]
    },
    29: {
        time: 30,
        move: 1,
        grid: [
            [1, 1, 2, 2]
        ]
    },
    30: {
        time: 30,
        move: 1,
        grid: [
            [1, 1],
            [2, 2]
        ]
    },
    31: {
        time: 30,
        move: 2,
        grid: [
            [1, 2],
            [2, 1]
        ]
    },
    32: {
        time: 30,
        move: 4,
        grid: [
            [1, 2, 0],
            [0, 9, 0],
            [0, 1, 2]
        ]
    },
    33: {
        time: 30,
        move: 5,
        grid: [
            [1, 2],
            [2, 1],
            [0, 0],
            [2, 1],
            [1, 2]
        ]
    },
    34: {
        time: 30,
        move: 5,
        grid: [
            [1, 1, 1, 9],
            [9, 2, 2, 2],
            [2, 1, 2, 9]
        ]
    },
    35: {
        time: 30,
        move: 5,
        grid: [
            [1, 2, 1, 2],
            [0, 0, 0, 0],
            [2, 1, 2, 1]
        ]
    },
    36: {
        time: 30,
        move: 6,
        grid: [
            [1, 1, 2, 2],
            [2, 2, 1, 1],
            [1, 1, 2, 2],
            [2, 2, 1, 1]
        ]
    },
    37: {
        time: 30,
        move: 6,
        grid: [
            [1, 2, 1, 2],
            [2, 1, 2, 1],
            [1, 2, 1, 2],
            [2, 1, 2, 1]
        ]
    },
    38: {
        time: 30,
        move: 3,
        grid: [
            [2, 9, 1, 9],
            [0, 2, 0, 1]
        ]
    },
    39: {
        time: 30,
        move: 12,
        grid: [
            [2, 9, 9, 1, 9],
            [0, 0, 0, 0, 9],
            [1, 9, 9, 2, 0]
        ]
    },
    40: {
        time: 30,
        move: 6,
        grid: [
            [0, 9, 9, 2],
            [0, 1, 2, 0],
            [2, 9, 9, 0]
        ]
    },
    41: {
        time: 30,
        move: 4,
        grid: [
            [2, 2, 1],
            [1, 1, 2],
            [2, 2, 1]
        ]
    },
    42: {
        time: 30,
        move: 4,
        grid: [
            [1, 2],
            [0, 0],
            [0, 0],
            [2, 1]
        ]
    },
    43: {
        time: 30,
        move: 6,
        grid: [
            [3, 0, 3, 0]
        ]
    },
    44: {
        time: 30,
        move: 8,
        grid: [
            [3, 9],
            [3, 9],
            [0, 3],
            [0, 3]
        ]
    },
    45: {
        time: 30,
        move: 6,
        grid: [
            [4, 0, 4, 0]
        ]
    },
    46: {
        time: 30,
        move: 4,
        grid: [
            [3, 4],
            [4, 3]
        ]
    },
    47: {
        time: 30,
        move: 4,
        grid: [
            [1, 4, 1],
            [3, 3, 4],
            [2, 2, 0]
        ]
    },
    48: {
        time: 30,
        move: 6,
        grid: [
            [1, 4, 1],
            [0, 0, 0],
            [4, 0, 0]
        ]
    },
    49: {
        time: 30,
        move: 4,
        grid: [
            [2, 3, 2],
            [3, 0, 0],
            [1, 1, 1]
        ]
    },
    50: {
        time: 30,
        move: 4,
        grid: [
            [2, 4, 1],
            [2, 4, 1]
        ]   
    },
    51: {
        time: 30,
        move: 4,
        grid: [
            [2, 2, 3, 3],
            [2, 2, 1, 1]
        ]
    },
    52: {
        time: 30,
        move: 4,
        grid: [
            [1, 1, 1],
            [2, 3, 3],
            [2, 3, 3]
        ]
    },
    53: {
        time: 30,
        move: 4,
        grid: [
            [1, 1, 3, 3],
            [2, 9, 9, 0],
            [2, 9, 9, 4],
            [0, 0, 0, 4]
        ]
    },
    54: {
        time: 30,
        move: 4,
        grid: [
            [4, 4, 3, 3],
            [1, 1, 2, 2]
        ]
    },
    55: {
        time: 30,
        move: 6,
        grid: [
            [2, 9, 9, 3],
            [0, 3, 2, 0]
        ]
    },
    56: {
        time: 30,
        move: 6,
        grid: [
            [2, 4, 1],
            [1, 2, 4],
            [9, 2, 1]
        ]
    },
    57: {
        time: 30,
        move: 4,
        grid: [
            [3, 2, 1],
            [0, 0, 0],
            [3, 2, 1]
        ]
    },
    58: {
        time: 30,
        move: 3,
        grid: [
            [4, 4, 1, 1],
            [2, 0, 0, 2],
            [3, 3, 9, 9]
        ]
    },
    59: {
        time: 30,
        move: 2,
        grid: [
            [2, 2, 9],
            [9, 4, 4],
            [1, 1, 9]
        ]
    },
    60: {
        time: 30,
        move: 8,
        grid: [
            [1, 2, 0, 1],
            [1, 9, 9, 0],
            [2, 0, 0, 0]
        ]
    },
    61: {
        time: 30,
        move: 8,
        grid: [
            [1, 2, 9, 9],
            [1, 2, 9, 3],
            [0, 0, 3, 0],
            [4, 0, 4, 0]
        ]
    }
    
}

export default LEVELS;