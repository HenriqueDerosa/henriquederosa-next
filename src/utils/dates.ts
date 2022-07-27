export const formatISO = (date: string): string => {
  const value = new Date(date)

  return value.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })
}
