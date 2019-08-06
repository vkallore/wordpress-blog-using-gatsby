export const stripHtml = html => {
  if (typeof html === "undefined") {
    return ""
  }
  var doc = new DOMParser().parseFromString(html, "text/html")
  console.log(html)
  console.log(doc.body.textContent)
  return doc.body.textContent || ""
}
