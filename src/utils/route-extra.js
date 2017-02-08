import { pickModule } from 'util/module-extra'

export function importRoute(cb, urls) {
  Promise.all(Array.isArray(urls) ? urls : [urls])
    .then(res => res.map(pickModule))
    .then(res => cb(null, res.length === 1 ? res[0] : res))
}

export function listRoute(routes) {
  // const arr = []

  // function recur(route, path) {

  //   const reducerPath = route.path && route.path !== '/' ?
  //         path + '/' + route.path : path

  //   arr.push([reducerPath, route])
  //   if(!route.childRoutes || route.childRoutes.length === 0) return
  //   return route.childRoutes.map(n => recur(n, reducerPath))
  // }

  // recur(routes, '')

  // arr.forEach(n => {
  //   const [path, route] = n
  //   console.log(`"${path}"`)
  // })


  // var sortedArr = arr.sort(function(a, b) {
  //   const pathA = a[0].split('/').filter(n => n)
  //   const pathB = b[0].split('/').filter(n => n)

  //   console.log(pathA, pathB)

  //   if(pathA.length !== pathB.length) {
  //     return pathB.length > pathA.length ? 1 : -1
  //   } else {
  //     const lastA = pathA[pathA.length - 1]
  //     const lastB = pathB[pathB.length - 1]

  //     return lastA === lastB ? 0 : lastB > lastA ? 1 : -1
  //   }
  // })

  // console.log(sortedArr.reverse().map(n => n[0].split('/').filter(m => m).join('/')))
}
