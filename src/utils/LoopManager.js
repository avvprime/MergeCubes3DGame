const LoopManager = {
    accumulator: 0,
    lastTime: 0,
    step: 1 / 60,
    frameID: 0,
    start: function() {
        this.frameID = requestAnimationFrame(this.callback.bind(this));
    },
    stop: function() {
        cancelAnimationFrame(this.frameID);
    },
    callback: function(millis) {
        this.frameID = requestAnimationFrame(this.callback.bind(this));
        if (this.lastTime)
        {
            this.update((millis - this.lastTime) / 1000 );
            this.draw();
        }
        this.lastTime = millis;
    },
    update: function(dt) {
        this.accumulator += dt;
        while(this.accumulator > this.step)
        {
            this.list.update.forEach(fn => fn(this.step));
            this.accumulator -= this.step;
        }
    },
    draw: function() {
        this.list.draw.forEach(fn => fn());
    },
    list: {
        update: new Map(),
        updateIDCounter: 0,
        draw: new Map(),
        drawIDCounter: 0,
    },
    addUpdate: function(fn) {
        const id = this.list.updateIDCounter;
        this.list.update.set(id, fn);
        this.list.updateIDCounter++;
        return id;
    },
    removeUpdate: function(id){
        this.list.update.delete(id);
    },
    addDraw: function(fn){
        const id = this.list.drawIDCounter;
        this.list.draw.set(id, fn);
        this.list.drawIDCounter++;
        return id;
    },
    removeDraw: function(id) {
            this.list.draw.delete(id);
    },
    setSimulationDepth: function(simPerSec) {
        this.step = 1 / simPerSec;
    }
}
export default LoopManager;