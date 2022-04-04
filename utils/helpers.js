module.exports = {
  count: (index) => {
    index += 1;
    return index;
  },
  // fotmat phone number
  formatPhone: (phone) => {
    const phoneNumber = phone.replace(/\D/g, "");
    const phoneFormatted = phoneNumber.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "($1) $2-$3"
    );
    return phoneFormatted;
  },
};
