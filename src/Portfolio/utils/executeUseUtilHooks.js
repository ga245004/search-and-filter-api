import { useAutoLayout } from "./useAutoLayout";
import { useBackground } from "./useBackground";
import { useCornerRadius } from "./useCornerRadius";
import useDropShadow from "./useDropShadow";
import useInnerShadow from "./useInnerShadow";
import { useLinearGradient } from "./useLinearGradient";



export const useUtilsHooks = {
    $useLinearGradient: useLinearGradient,
    $useAutoLayout: useAutoLayout,
    $useBackground: useBackground,
    $useDropShadow: useDropShadow,
    $useInnerShadow : useInnerShadow,
    $useCornerRadius : useCornerRadius
}


export function updateUseUtilsHooks(name, fn) {
    useUtilsHooks[name] = fn;
}

export function executeUseUtilsHooks(props) {
    const styles = [];
    const useHooks = Object.keys(props).filter(p => p).filter(p => !!useUtilsHooks[p]);
    useHooks.forEach(hook => {
        const useHook = useUtilsHooks[hook];
        if (props[hook]) {
            const output = useHook(props);
            styles.push(output);
        }
    });
    return styles.join(" ");
}