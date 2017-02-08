export function getOrElse(target, ...opts) {
  //var args = [{}, target]
  //args.push(opts)
  return Object.assign.apply(Object, [
    {},
    target,
    ...opts
  ])
}
