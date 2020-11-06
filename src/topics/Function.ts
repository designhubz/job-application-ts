interface IUseful
{
    fn: () => number;
}

// Task description:
// Complete the function.

// eavesdrop should execute 'callback' whenever the 'fn' function of 'useful' is called.
// The return value of fn() is not affected and passed to callback (result: number).
function eavesdrop(useful: IUseful, callback: (result: number) => void)
{
    /**...*/
}

// Example
// Expected output: |e0|0|e1|1
export async function example()
{
    class Useful implements IUseful
    {
        private _index = 0;
        fn(){ return this._index++; }
    }

    const usefulA = new Useful();

    // The callback will execute each time fn() is called, it will accept the result of fn().
    eavesdrop(usefulA, (result: number) => console.log('e' + result));

    console.log(usefulA.fn()); // |e0|0
    console.log(usefulA.fn()); // |e0|1
}

