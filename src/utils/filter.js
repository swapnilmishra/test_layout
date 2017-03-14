export function filterByPrice(data, filterConditions) {
  let finalSet = new Set();
  let upperBound, lowerBound, filters, price;
  filterConditions.forEach(function(filter) {
    filters = filter.split("-");
    lowerBound = Number(filters[0]);
    upperBound = Number(filters[1]);
    data.forEach(function(item) {
      price = Number(item.price);
      if (price >= lowerBound && price <= upperBound) {
        finalSet.add(item.name);
      }
    });
  });

  return data.filter(function(item) {
    return finalSet.has(item.name);
  });
  //   return finalSet;
}

export function filterByBrand(data, filterConditions) {
  let finalSet = new Set();
  let upperBound, lowerBound, filters;
  filterConditions.forEach(function(filter) {
    data.forEach(function(item) {
      if (item.brand == filter) {
        finalSet.add(item.name);
      }
    });
  });

  return data.filter(function(item) {
    return finalSet.has(item.name);
  });
  //   return finalSet;
}
