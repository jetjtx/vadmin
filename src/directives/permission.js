
function checkPermission(el, binding) {
    const  { value } = binding

    if (value && value instanceof Array) {
            if (value.length > 0) {
                if (value != "admin") {
                    el.parentNode && el.parentNode.removeChild(el)
                }
            }
    } else {
        throw new Error(`nned roles Usage: v-permissinon="['admin']"`)
    }
}

export default {
    
    mounted(el, binding) {
        checkPermission(el, binding)
    }
}