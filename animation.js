$(document).ready(function () {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    document.body.appendChild(canvas);
    
    var walkingCowImage = new Image();
    walkingCowImage.src = "cow_walk.png";
    var clouds = new Image();
    clouds.src = "clouds.jpeg"
    
    
    
    function sprite (options) {
				
    var that = {};
        frameIndex = 0,
        tickCount = 0,
        ticksPerFrame = 10;
        numberOfFrames = 4;
					
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    that.update = function () {
        tickCount += 1;
        if (tickCount > ticksPerFrame) {
        	tickCount = 0;
        	if (frameIndex < numberOfFrames - 1) {
                frameIndex += 1; 
            } else frameIndex = 0;
        }
    };  
        
    that.render = function () {
        that.context.drawImage(
           that.image,
           frameIndex * 128,
           player.imageY,
           128,
           128,
           player.x - player.w/2,
           player.y - player.h/2,
           128,
           128);
    };
        
    return that;
    }
    
    var walkingCow = sprite({
        context: canvas.getContext("2d"),
        width: 100,
        height: 100,
        image: walkingCowImage
    });
    
    createEnemy(canvas, 4);
    
    document.getElementById("slow").addEventListener("click", function () {
        changeSpeed('slow');
    })
    
    document.getElementById("speed").addEventListener("click", function () {
        changeSpeed('speed');
    })
    
    canvas.addEventListener("click", function () {
        var cX = event.offsetX;
        var cY = event.offsetY;
        for (var i in enemies) {
            if ((cX >= (enemies[i].x - 30))
                &&(cX <= (enemies[i].x + 30))
                &&(cY >= enemies[i].y - 30)
                &&(cY <= enemies[i].y + 30)) {
                enemies.splice(i, 1);
            }
        }
    })
   
var render = function () {
        context.drawImage(clouds, 0, 0, canvas.width, canvas.height);
        drawEnemies(context);
        walkingCow.render();
        walkingCow.update();
        
};
    
function main() {
    update();
    render();
    requestAnimationFrame(main);
    moveEnemies();
    test();
}
    
main();
})