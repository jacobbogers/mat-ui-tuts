
function stopWatch(){
    let start = performance.now()
    return {
        reset(){
            start = performance.now()
        },
        mark(){
            return performance.now() - start;
        }
    }
}

function randomize(arr){
    for (let i = 0; i < arr.length; i++){
        arr[i] = Math.random()*2 -1;
    }
}

export async function scheduler(jobs, initialCtx){
   const _jobs = jobs.map( job => [job,{}]);
   const sw = stopWatch();
   for (let i = 0; i < _jobs.length; i++){
        const [job] = _jobs[i]
        try {
           
            const result = await job(initialCtx, i, _jobs);
            const duration = sw.mark()
            sw.reset();
            _jobs[i][1].result = result;
            _jobs[i][1].duration = duration;
        }
        catch(err){
            _jobs[i][1].error = err;
        }
        // here we decide if an error is severe enough to continue or maybe even retry? who knows   
   }
   return { ctx: initialCtx, chain:_jobs };
}

export async function createMatrixA(ctx){
    ctx.A = new Float32Array(ctx.matrixSize);
    randomize(ctx.A);
}

export async function createMatrixB(ctx){
    ctx.B = new Float32Array(ctx.matrixSize);
    randomize(ctx.B);
}

export async function createMatrixC(ctx){
    ctx.C = new Float32Array(ctx.matrixSize);
    randomize(ctx.C);
}


