export function condView(cond = true, viewOnTrue, viewOnFalse = null) {
  return cond ? viewOnTrue : viewOnFalse
}

export function classnames(...args) {
  return args.join(' ')
}

export function importComponent(promise) {
  promise.then(Component => {
    return
  })
  return null;
}
