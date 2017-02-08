export default (dev, prod) => {
  if(process.env.NODE_ENV === 'production') {
    return prod && prod()
  } else {
    return dev && dev()
  }
}
