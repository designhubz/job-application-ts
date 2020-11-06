// Task description:
// Complete the function.

// This Generator returns items that pass the predicate function.
function* filter<T>(array: Array<T>, predicate: (item: T) => boolean)
{
    /**...*/
}

// Example:
// Expected output: |-1:fail|0:pass|1:pass
export async function example()
{
    const array = [-1, 0, 1, 2, 3, 4];
    const predicate = (n: number) => {
        const result = n >= 0;
        console.log(`${n}:${result ? 'pass' : 'fail'}`);
        return result;
    };
    
    const filtered = filter(array, predicate);
    filtered.next().value;
    filtered.next().value;
}
