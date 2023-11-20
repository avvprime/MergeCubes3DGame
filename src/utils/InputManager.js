const InputManager = {
    pressed: {},
    justPressed: {},
    listen: function(){
        document.addEventListener('keydown', this.onKeyDown.bind(this));
        document.addEventListener('keyup', this.onKeyUp.bind(this));
    },
    onKeyDown: function(e){
        e.preventDefault();
        const code = e.code;
        if(!this.pressed[code])
        {
            this.justPressed[code] = true;
            setTimeout(this.clearJustPressed.bind(this), 15, code);
        }
        this.pressed[code] = true;
        
    },
    onKeyUp: function(e){
        e.preventDefault();
        this.pressed[e.code] = false;
    },
    clearJustPressed: function(code) {
        this.justPressed[code] = false;
    }
}

export default InputManager;