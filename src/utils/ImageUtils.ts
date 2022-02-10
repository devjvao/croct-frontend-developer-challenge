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

  loadImage(file: File) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = document.createElement('img')
      const url = URL.createObjectURL(file)

      img.setAttribute('src', url)

      img.onload = function () {
        resolve(img)
      }

      img.onerror = function () {
        reject()
      }
    })
  }

  drawImage(
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    size: number
  ) {
    const halfSize = size / 2
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, size, size)
    ctx.globalCompositeOperation = 'destination-in'
    ctx.beginPath()
    ctx.arc(halfSize, halfSize, halfSize, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
  }

  async cropRoundImage(file: File, size: number, scale: number) {
    return this.loadImage(file).then(
      (loadedImg) =>
        new Promise<string>((resolve, reject) => {
          const ratio =
            size / Math.min(loadedImg.naturalWidth, loadedImg.naturalHeight)

          const canvas = document.createElement('canvas')
          canvas.width = size
          canvas.height = size

          const ctx = canvas.getContext('2d')
          if (ctx === null) {
            console.error('Failed to get canvas context.')
            reject()
            return ''
          }

          const scaledSizeX = (size + loadedImg.width * ratio) * scale
          const scaledSizeY = (size + loadedImg.height * ratio) * scale

          this.drawImage(
            ctx,
            loadedImg,
            loadedImg.width / 2 - scaledSizeX / 2,
            loadedImg.height / 2 - scaledSizeY / 2,
            scaledSizeX,
            scaledSizeY,
            size
          )

          resolve(canvas.toDataURL(file.type))
        })
    )
  }
}

const imageUtils = new ImageUtils()

export default imageUtils
