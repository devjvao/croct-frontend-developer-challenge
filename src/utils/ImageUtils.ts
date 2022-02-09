const validTypes = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/gif',
  'image/x-icon'
]

class ImageUtils {
  validateImageType(file: File | null) {
    return file !== null && validTypes.includes(file.type)
  }
}

const imageUtils = new ImageUtils()

export default imageUtils
