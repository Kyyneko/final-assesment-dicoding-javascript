function fibonacci(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  }
  const fibSeq = fibonacci(n - 1);
  fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
  return fibSeq;
}

export default fibonacci;
