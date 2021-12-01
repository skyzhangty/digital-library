export function imageUrl(
  baseUrl: string,
  imageId: string | null
): string | null {
  if (imageId) {
    return `${baseUrl}/${imageId}/full/843,/0/default.jpg`;
  }
  return `${process.env.PUBLIC_URL}/no-image.jpeg`;
}
