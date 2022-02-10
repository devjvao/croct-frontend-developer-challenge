class TestUtils {
  generateEmptyFile(type: string) {
    return new File(['Empty', 'File'], 'Empty File', { type })
  }

  generateLightImage() {
    const byteCharacters =
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    const blob = new Blob([byteArray], { type: 'image/gif' })
    return new File([blob], 'Smallest Image', { type: 'image/gif' })
  }
}

const testUtils = new TestUtils()

export default testUtils
