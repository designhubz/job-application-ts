// Simulates a Worker as defined in TS lib: ["webworker"]
interface MessageEvent{ data: any }
class Worker
{
    public onmessage = (msg: MessageEvent) => {};
    constructor(url: string){}
    
    public postMessage(data: any)
    {
        setTimeout( () => this.onmessage({data: data}), data.taskDuration * 1000 );
    }
}
// The above code basically translates to having a Worker.js with this content:
// onmessage = msg => setTimeout( () => this.postMessage(msg), msg.data.taskDuration * 1000 );

// Task description:
// Complete the WorkerManager class
class WorkerManager
{
    private _worker: Worker;
    /**...*/
    constructor()
    {
        this._worker = new Worker('Worker.js');
        this._worker.onmessage = this.onMessage.bind(this);
    }

    private onMessage(msg: MessageEvent): void
    {
        /**...*/
    }

    public async executeAsync(taskDuration: number): Promise<void>
    {
        /**...*/
    }
}

// Example
// Expected output: |Short task|Medium task|Long task 1|Long task 2
export async function example()
{
    const manager = new WorkerManager();
    const execute = (task: string, duration: number) =>
        manager.executeAsync(duration)
        .then( () => console.log(task) );

    await Promise.all([
        execute('Long task 1', 2.0),
        execute('Long task 2', 2.0),
        execute('Medium task', 1.0),
        execute('Short task', 0.5)
    ]);
}