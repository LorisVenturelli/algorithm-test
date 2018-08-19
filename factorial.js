function factorial(number) {
  if (number < 0) {
    // End of calculation
    return;
  }
  else if (number === 0) {
    // The last iteration
    return 1;
  }

  // Calculate with the next iteration
  return (number * factorial(number - 1));
}

// (6 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1) = 6 * 5 * 4 * 3 * 2 * 1 = 720
console.log(factorial(6));
