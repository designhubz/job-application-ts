
const topicExample = (ts: string) => {
    console.log(`\n${ts}\n${'-'.repeat(ts.length)}`);
    return require(ts).example();
}

(async function()
{
    // START HERE 
    await topicExample('./topics/EventEmitter');
    await topicExample('./topics/Function');
    await topicExample('./topics/WorkerManager');
    await topicExample('./topics/Generator');
})();
