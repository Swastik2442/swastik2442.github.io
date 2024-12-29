export function mergeClasses(...inputs: (string | undefined)[]): string {
    let merged = "";
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            merged += (merged && ' ') + arguments[i];
        }
    }
    return merged;
}

export default mergeClasses;
