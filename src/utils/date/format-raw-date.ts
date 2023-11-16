export function formatRawDate(dateString: string): Date | null {
  const dateParts: string[] = dateString.split('/')

  if (dateParts.length !== 3) {
    return null
  }

  const day: number = parseInt(dateParts[0], 10)
  const month: number = parseInt(dateParts[1], 10) - 1
  const year: number = parseInt(dateParts[2], 10)

  const convertedDate: Date = new Date(year, month, day)

  if (isNaN(convertedDate.getTime())) {
    return null
  }

  return convertedDate
}
