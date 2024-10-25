function modInverse(a, m) {
  let [old_r, r] = [BigInt(a), BigInt(m)];
  let [old_s, s] = [BigInt(1), BigInt(0)];

  while (r !== 0n) {
    const quotient = old_r / r;
    [old_r, r] = [r, old_r - quotient * r];
    [old_s, s] = [s, old_s - quotient * s];
  }

  return (old_s % m + m) % m;
}

function lagrangeInterpolation(points, prime) {
  const secret = points.reduce((acc, [xi, yi], i) => {
    let numerator = BigInt(1);
    let denominator = BigInt(1);

    points.forEach(([xj], j) => {
      if (i !== j) {
        numerator = (numerator * (prime - BigInt(xj))) % prime;
        denominator = (denominator * (BigInt(xi) - BigInt(xj) + prime)) % prime;
      }
    });

    const li = (numerator * modInverse(denominator, prime)) % prime;
    return (acc + (li * BigInt(yi))) % prime;
  }, BigInt(0));

  return secret;
}

export function solvePolynomial(data) {
  const { n, k } = data.keys;
  const points = [];

  for (let i = 1; i <= n; i++) {
    if (data[i]) {
      const x = parseInt(i);
      const y = parseInt(data[i].value, parseInt(data[i].base));
      points.push([x, y]);
    }
  }

  // Use a large prime number for modular arithmetic
  const prime = BigInt('115792089237316195423570985008687907853269984665640564039457584007913129639747');

  const secret = lagrangeInterpolation(points, prime);
  return secret.toString();
}