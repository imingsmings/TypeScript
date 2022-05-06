interface Container {
  value: number | null | undefined;
}

const multiValue = (container: Container, factor: number) => {
  if (container.value != null) {
    return container.value ** factor;
  }
  return container.value;
};

console.log(multiValue({ value: undefined }, 5));
console.log(multiValue({ value: 4 }, 5));
