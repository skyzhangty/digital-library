export function imageUrl(
  imageId: string | null
): string | null {
  if (imageId) {
    return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
  }
  return `${process.env.PUBLIC_URL}/no-image.jpeg`;
}
