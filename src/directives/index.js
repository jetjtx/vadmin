import permission from "./permission"
import autofocus from "./autofocus"

export default function(app) {
    app.directive('permission', permission)
    app.directive('autofocus', autofocus)
}