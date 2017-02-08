export const fx = (...args) => args

export const match = (...matches) => (state, { type, payload }) => {
    let matched = matches.find(([t]) => t === type)
    if(!matched) return state
    return matched[1](payload, state)
}
