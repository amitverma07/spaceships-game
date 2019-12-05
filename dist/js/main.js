function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}!function(){var t={},r=[];function n(e){if(t[e])return t[e];var n=new Image;n.onload=function(){t[e]=n,a()&&r.forEach(function(e){e()})},t[e]=!1,n.src=e}function a(){var e=!0;for(var n in t)t.hasOwnProperty(n)&&!t[n]&&(e=!1);return e}window.Resources={load:function(e){e instanceof Array?e.forEach(function(e){n(e)}):n(e)},get:function(e){return t[e]},onReady:function(e){r.push(e)},isReady:a}}();var levels=document.querySelector("#score").lastChild,lives=document.querySelector("#lives").lastChild,Sun=function e(n,t,r,a){_classCallCheck(this,e),this.x=n,this.y=t,this.width=r,this.height=a},sun=new Sun(400,0,75,75),Enemy=function(){function s(e,n,t,r,a,i){_classCallCheck(this,s),this.x=e,this.y=n,this.direction=t,this.style=r,this.width=a,this.height=i,this.speed=Math.floor(Math.random()+2)}return _createClass(s,[{key:"update",value:function(){"ltr"===this.direction&&this.x<=800&&(this.x+=this.speed,800<=this.x&&(this.direction="rtl",this.x-=this.speed)),"rtl"===this.direction&&0<=this.x&&(this.x-=this.speed,this.x<=0&&(this.direction="ltr",this.x+=this.speed))}}]),s}(),Player=function(){function a(e,n,t,r){_classCallCheck(this,a),this.x=e,this.y=n,this.width=t,this.height=r}return _createClass(a,[{key:"update",value:function(){var r=this;allEnemies.forEach(function(e){var n=document.querySelector("#lives").lastChild,t=document.querySelector("#score").lastChild;return!(r.x>e.x+e.width)&&(!(r.x+r.width<e.x)&&(!(r.y>e.y+e.height)&&(!(r.y+r.height<e.y)&&(player.x=430,player.y=430,n.innerHTML=parseInt(n.innerHTML)-1,void(n.innerHTML<=0&&(n.innerHTML=3,t.innerHTML=0,runOutOfLives()))))))});var e=document.querySelector("#score").lastChild;return!(this.x>sun.x+sun.width)&&(!(this.x+this.width<sun.x)&&(!(this.y>sun.y+sun.height)&&(!(this.y+this.height<sun.y)&&(player.x=430,player.y=430,e.innerHTML=parseInt(e.innerHTML)+1,void allEnemies.forEach(function(e){e.speed++})))))}},{key:"handleInput",value:function(e){"left"===e?(this.x-=30,this.x<=0&&(this.x+=30)):"up"===e?(this.y-=30,this.y<=0&&(this.y+=30)):"right"===e?(this.x+=30,800<=this.x&&(this.x-=30)):"down"===e&&(this.y+=30,450<=this.y&&(this.y-=30))}}]),a}(),player=new Player(430,430,75,75),allEnemies=[enemy1=new Enemy(100,100,"ltr","enemy1",75,75),enemy2=new Enemy(800,200,"rtl","enemy2",75,75),enemy3=new Enemy(0,0,"ltr","enemy3",75,75)];function runOutOfLives(){alert("Game Over, Try Again"),enemy1.x=100,enemy1.y=100,enemy2.x=800,enemy2.y=200,enemy3.x=0,enemy3.y=0,enemy1.speed=Math.floor(Math.random()+2),enemy2.speed=Math.floor(Math.random()+2),enemy3.speed=Math.floor(Math.random()+2),player.x=430,player.y=430}document.addEventListener("keyup",function(e){player.handleInput({37:"left",38:"up",39:"right",40:"down"}[e.keyCode])});var Engine=function(e){e.document;var n,t=e.window,r=document.getElementById("canvas"),a=r.getContext("2d");function i(){var e=Date.now();(function(n){allEnemies.forEach(function(e){e.update(n)}),player.update()})((e-n)/1e3),a.clearRect(0,0,r.width,r.height),a.drawImage(Resources.get("images/background.png"),0,0),function(){a.drawImage(Resources.get("images/sun.png"),sun.x,sun.y),player.tickCount++,player.tickCount>player.ticksPerFrame&&(player.tickCount=0,player.frameIndex++);player.frameIndex>=player.numberOfFrames&&(player.frameIndex=0);var e=Resources.get("images/player.png");a.drawImage(e,0,player.frameIndex*e.naturalHeight/player.numberOfFrames,e.naturalWidth,e.naturalHeight/player.numberOfFrames,player.x,player.y,e.naturalWidth,e.naturalHeight/player.numberOfFrames),allEnemies.forEach(function(e){e.tickCount++,e.tickCount>e.ticksPerFrame&&(e.tickCount=0,e.frameIndex++),e.frameIndex>=e.numberOfFrames&&(e.frameIndex=0);var n=Resources.get("images/".concat(e.style,"-").concat(e.direction,".png"));a.drawImage(n,0,e.frameIndex*n.naturalHeight/e.numberOfFrames,n.naturalWidth,n.naturalHeight/e.numberOfFrames,e.x,e.y,n.naturalWidth,n.naturalHeight/e.numberOfFrames)})}(),n=e,t.requestAnimationFrame(i)}r.width=900,r.height=534,Resources.load(["images/background.png","images/enemy1-ltr.png","images/enemy2-ltr.png","images/enemy3-ltr.png","images/enemy1-rtl.png","images/enemy2-rtl.png","images/enemy3-rtl.png","images/enemy4-rtl.png","images/enemy4-ltr.png","images/sun.png","images/player.png"]),Resources.onReady(function(){allEnemies.forEach(function(e){e.tickCount=0,e.ticksPerFrame=5,e.frameIndex=0,e.numberOfFrames=3}),player.tickCount=0,player.ticksPerFrame=5,player.frameIndex=0,player.numberOfFrames=2,n=Date.now(),i()}),e.ctx=a}(this);