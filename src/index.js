// @flow

const a: Array<number> = [1,2,3,4];
const b = [...a, {
  'hey': 'yeah'
}];

/*
// won't compile because of Array<string>
const a: Array<string> = [1,2,3,4];
const b = [...a, {
  'hey': 'yeah'
}]
*/