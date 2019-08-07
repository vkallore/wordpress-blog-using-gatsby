export const stripHtml = html => {
  if (typeof html === "undefined") {
    return ""
  }
  var doc = new DOMParser().parseFromString(html, "text/html")
  return doc.body.textContent || ""
}

export const wordPressBaseUrl = process.env.WORDPRESS_BASE_URL
export const wordPressUrl = `${process.env.WORDPRESS_PROTOCOL}:://${wordPressBaseUrl}`
export const wordPressContentUrl = `${wordPressUrl}wp-content/uploads/`
