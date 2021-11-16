export const filterProducts = (selected, products) => {
  console.log('filteredProducts ' + products);
  console.log('selected ' + selected);
  console.log('typeof filteredProducts ' + typeof products);
  // products = products.filter((item) => {
  //   console.log(Array.from(item));
  //   Array.from(item).tags.includes(selected);
  // });

  const filteredBySelected = products.filter((item) =>
    item.tags.includes(selected[0])
  );
  if (selected.length === 1) {
    return filteredBySelected;
  } else {
    return filteredBySelected + filterProducts(selected.shift());
  }
};