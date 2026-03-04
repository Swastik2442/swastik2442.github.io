export function mergeClasses(...inputs: (string | undefined)[]): string {
    let merged = "";
    for (let i = 0; i < inputs.length; i++) {
        if (typeof inputs[i] === 'string') {
            merged += (merged && ' ') + inputs[i];
        }
    }
    return merged;
}

export default mergeClasses;
