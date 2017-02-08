export function pickModule(module) {
  return module.default
}

export function exportEnv(dev, prod) {
  console.log(process.env.NODE_ENV)
  if(process.env.NODE_ENV === 'production') {
    return prod()
  } else {
    return dev()
  }
}
