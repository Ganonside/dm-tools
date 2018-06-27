export default {
  '+1 shield': {
    minor: [1, 60],
    medium: [1, 5],
    major: null,
    bonus: 1,
    baseValue: 1000
  },
  '+1 armor': {
    minor: [61, 80],
    medium: [6, 10],
    major: null,
    bonus: 1,
    baseValue: 1000
  },
  '+2 shield': {
    minor: [81, 85],
    medium: [11, 20],
    major: null,
    bonus: 2,
    baseValue: 4000
  },
  '+2 armor': {
    minor: [86, 87],
    medium: [21, 30],
    major: null,
    bonus: 2,
    baseValue: 4000
  },
  '+3 shield': {
    minor: null,
    medium: [31, 40],
    major: [1, 8],
    bonus: 3,
    baseValue: 9000
  },
  '+3 armor': {
    minor: null,
    medium: [41, 50],
    major: [9, 16],
    bonus: 3,
    baseValue: 9000
  },
  '+4 shield': {
    minor: null,
    medium: [51, 55],
    major: [17, 27],
    bonus: 4,
    baseValue: 16000
  },
  '+4 armor': {
    minor: null,
    medium: [56, 57],
    major: [28, 38],
    bonus: 4,
    baseValue: 16000
  },
  '+5 shield': {
    minor: null,
    medium: null,
    major: [39, 49],
    bonus: 5,
    baseValue: 25000
  },
  '+5 armor': {
    minor: null,
    medium: null,
    major: [50, 57],
    bonus: 5,
    baseValue: 25000
  },
  'specific armor': {
    minor: [88, 89],
    medium: [58, 60],
    major: [58, 60]
  },
  'specific shield': {
    minor: [90, 91],
    medium: [61, 63],
    major: [61, 63]
  },
  'special ability': {
    minor: [92, 100],
    medium: [64, 100],
    major: [64, 100],
    reroll: true
  }
};
