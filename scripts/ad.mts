export const getAdImgHtml = (imglink: string, link: string) => {
  return `<a href=${
    link ?? 'https://airtable.com/appLfbX7pNQxpBx00/shrfpPSEbLVSXz4r7'
  } target="_blank" rel="noopener noreferrer" style="display: flex; justify-content: center; border-radius: 4px; width: 100%; aspect-ratio: 41.67%; max-width: 800px; margin: 0 auto;"><img src="${imglink}" alt="sponsor" width="480" height="200" style = "width: 100%; height: 100%; object-fit: cover; object-position: center;"/></a>\n\n`
}
