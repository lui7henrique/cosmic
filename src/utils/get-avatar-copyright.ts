export const getAvatarCopyright = (copyright: string) => {
  const cleanText = copyright.replace(/\n/g, '').trim()
  return cleanText.slice(0, 2)
}
