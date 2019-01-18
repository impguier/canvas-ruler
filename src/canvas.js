const Tool = require('./tools')
class Canvas {
    constructor (options = {}) {
        this.options = options
        this.$el = this.createElement()
        this.appendTo(options.selector)
    }
    createElement () {
        let $canvas = document.createElement('canvas')
        $canvas.id = this.options.id || 'canvas'
        $canvas.width = this.options.width || 200
        $canvas.height = this.options.height || 100
        $canvas.style.width = $canvas.width / 2
        $canvas.style.height = $canvas.height / 2
        return $canvas 
    }
    appendTo ( selector = 'body' ) {
        document.querySelector(selector).appendChild(this.$el)
    } 
}
class Ruler extends Canvas {
    constructor (options) {
        super(options)
        let _this = this
        this.options =  options
        this.event = {
            startPosition: 0,
            diff: 0
        }
        this.addEvent ()

    }
    setOptions (options) {
        this.options.info = options    
        this.ctx.clearRect(0,0,this.options.width,this.options.width)
        this.paintScale(this.options.info.init)
        this.painMiddleLine()   
    }
    addEvent () {
        this.$el.addEventListener('touchstart',this.touchstart)
        this.$el.addEventListener('touchmove',this.touchmove)
        this.$el.addEventListener('touchend',this.touchend)
    }
    touchstart (event) {
        let sp = this.startPosition || event.touches[0].clientX
        this.startPosition = sp
    }
    touchmove (event) {
        let np = event.touches[0].clientX
        let diff = this.event.sp - np
    }
    touchend () {
        debugger
    }
    paint () {
        let $el = this.$el
        let ctx = $el.getContext('2d')
        this.ctx = ctx
        ctx.clearRect(0,0,this.options.width,this.options.width)
        this.paintScale(this.options.info.init)
        this.painMiddleLine()
    }
    clearPaint () {
        this.ctx.clearRect(0, 0, this.options.width, this.options.height)
    }
    painMiddleLine () {
        let ctx = this.ctx
        let info = this.options.info
        let y = this.options.height - info.lineWidth
        let x = 0
        ctx.beginPath()
        ctx.strokeStyle = "#FF001A"
        ctx.lineWidth = info.lineWidth
        x = this.options.width / 2
        ctx.moveTo( x, y)
        ctx.lineTo( x, y - 50)
        ctx.stroke()
        ctx.closePath()
    }
    paintText (text,x) {
        let ctx = this.ctx
        let info = this.options.info  
        let y = this.options.height - info.lineWidth
        ctx.save()
        ctx.font = "10px Microsoft YaHei"
        ctx.textAlign = 'center'
        ctx.fillstyle = "#FF001A"
        ctx.fillText(text, x,  y-30)
        ctx.fill()
        ctx.restore()
    }
    getValueBase (v) {
        /*
            ew      每个宽度
            halfp   一半宽度有多少个格子
            vp      这个值的等于多一个格子
        */
        let ew = +this.options.info.lineWidth + +this.options.info.per
        let halfp = this.options.width / ew / 2
        let vp = v / this.options.info.unit
        return halfp - vp 
    }
    paintScale (value = 0) { 
        let ctx = this.ctx               
        let info = this.options.info  
        let lineWidth = info.lineWidth
        let ew = info.per + lineWidth     
        let y = this.options.height - info.lineWidth
        let all = (this.options.width / ew )
        this.all = all
        console.log(all)
        ctx.beginPath()
        ctx.strokeStyle= '#333'
        ctx.lineWidth = lineWidth    
        let initPosition = this.getValueBase(value)
        for(let i = initPosition ; i < all; i++){
            let  x = ew * i
            let yFix = 10
            let actual_value = (Tool.add(i,-initPosition) * info.unit)
            if(! (actual_value % (info.unit * info.scale))) {
                yFix += 10
                this.paintText(actual_value, x)
                console.log(actual_value)
            }
            ctx.moveTo( 
                x,
                y
            )
            ctx.lineTo(
                x ,
                y - yFix
            ) 
            ctx.stroke()            
        }
        ctx.closePath()
    }
}
let rule = new Ruler({
    width: 1000,
    height: 250,
    id: 'love',
    selector: '#app',
    info: {
        /* per              每一个格子的间隔
         * lineWidth        每一个格子的宽度  
         * unit             每一个格子的值
         * scale            刻度
        */
        per: 10,
        lineWidth: 2,        
        unit: 10,
        scale: 10,
        init: 500
    },
    start () {
        console.log('start')
    },
    move () {
        console.log('move')
    },
    end () {
        console.log('end')
    }
})
rule.paint()
window.rule = rule