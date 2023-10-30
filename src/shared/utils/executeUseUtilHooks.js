import { useAutoLayout } from "./useAutoLayout";
import { useLinearGradient } from "./useLinearGradient";



export const useUtilsHooks = {
    useLinearGradient,
    useAutoLayout
}


export function updateUseUtilsHooks(name, fn) {
    useUtilsHooks[name] = fn;
}

export function executeUseUtilsHooks(props) {
    
    const styles = [];
    const useHooks = Object.keys(props).filter(p => p).filter(p => p.startsWith("use"));
    useHooks.forEach(hook => {
        const useHook = useUtilsHooks[hook];
        if (useHook) {
            const output = useHook(props);
            styles.push(output);
        }
    });
    return styles.join(" ");
}