type TListener<T> = (arg: T) => void;

interface IEventEmitter<T>
{
    addListener(listener: TListener<T>): void;
    removeListener(listener: TListener<T>): void;
	onceAsync(): Promise<T>;
}

// Task description:
// Please create the EventEmitter class that implements IEventEmitter<T> 
// and has the additional 'emit(T)' method as shown by its use below.
/**...*/

// Example:
// Expected output: |one|two|three
export async function example()
{
    const emitter = new EventEmitter<string>();

    emitter.addListener( console.log );
    emitter.emit('one'); // logs 'one'
    emitter.removeListener( console.log );

    await (async function() {
        setTimeout( () => emitter.emit('two'), 1000 );
        console.log( await emitter.onceAsync() ); // hold 1 second then logs 'two'
        console.log('three'); // logs 'three'
    })();
}