const IMAGE_PATH_REGEX = /(?<=from\s')(.*)(?=\/images)/g

export const createSandboxReactImages = async (): Promise<string> => {
  const imageByIndex = await import(
    '!!raw-loader!embla-carousel-react-sandboxes/src/SandboxFilesDist/imageByIndex.js'
  )
  // Add ts too!

  return imageByIndex.default.replace(IMAGE_PATH_REGEX, '..')
}
