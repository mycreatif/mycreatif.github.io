export const currencyFormat = (value: number, fixed?: number) => {
  if (fixed)
    return value.toFixed(fixed).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

export const CONTACTS = {
  mail: "mycreatif.store@gmail.com",
  phone: "+54 11 6678-4938",
  address: "Av. Centenario 235, San Isidro",
};
