import { match, fx, noop } from 'util/match'
import { id } from 'util/id'

export default match(
    fx('REQUEST', id),
    fx('SUCCESS', res => res)
)
