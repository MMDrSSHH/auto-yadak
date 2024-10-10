const formatter = new Intl.NumberFormat("en-US").format;

export default function formatCurrency(value) {
  if (value && isNaN(value)) {
    throw new Error("value must be a valid number format");
  }

  return formatter(value);
}
