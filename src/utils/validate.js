
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}

export function isPassword(str) {
    return str.length > 7
}