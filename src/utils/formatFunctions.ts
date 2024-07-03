const formatDate = (date: string) => {
  const dateString = date.replace('Z', '')
  return new Date(dateString).toLocaleDateString('pt-br');
};

const formatPhoneNumber = (phone: string) => {
    const country = phone.slice(0, 2);
    const area = phone.slice(2, 4);
    const firstPart = phone.slice(4, 9);
    const secondPart = phone.slice(9, 13);
    return `+${country} (${area}) ${firstPart}-${secondPart}`;
}

export { formatDate, formatPhoneNumber }