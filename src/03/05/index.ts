export class HttpError extends Error {}
export class RangeError extends Error {}

// if(err instanceof HttpError) {
//   // 捉えた例外がHttpErrorインスタンスだった場合
// }
// if(err instanceof RangeError) {
//   // 捉えた例外がRangeErrorインスタンスだった場合
// }

function checkRange(value: number) {
  if (value < 0 || value > 100) {
    throw new RangeError("入力値は0〜100の間で入力してください");
  }
}

export function add(a: number, b: number) {
  checkRange(a);
  checkRange(b);
  const sum = a + b;
  if (sum > 100) {
    return 100;
  }
  return sum;
}

export function sub(a: number, b: number) {
  checkRange(a);
  checkRange(b);
  const sum = a - b;
  if (sum < 0) {
    return 0;
  }
  return sum;
}
