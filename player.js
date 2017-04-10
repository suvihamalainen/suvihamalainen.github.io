var player = {
    x: 300,
    y: 300,
    w: 60,
    h: 60,
    speed: 10,
    imageY: 3*128
};

var keysDown = {};
    
function movePlayer(direction) {
    switch (direction) {
    case "left":
        player.x -= player.speed;
        player.imageY = 128;
        if (player.x < 1) {
            player.x = 0;
        }
        break;
    case "right":
        player.x += player.speed;
        player.imageY = 3*128;
        if (player.x > (600 - (player.w + 20))) {
            player.x = (600 - (player.w + 20));
        }
        break;
    case "up":
        player.y -= player.speed;
        player.imageY = 0;
        if (player.y < 0) {
            player.y = 0;
        }
        break;
    case "down":
        player.y += player.speed;
        player.imageY = 2*128;
        if (player.y > (600 - (player.h))) {
            player.y = (600 - (player.h));
        }
        break;
                
    }
}

window.addEventListener('keydown', function (e) {
    keysDown[e.keyCode] = true;0
        
});
    
window.addEventListener('keyup', function (e) {
    delete keysDown[e.keyCode];
});

function update() {
    if (38 in keysDown) {
        movePlayer('up');
    };
    if (40 in keysDown) {
        movePlayer('down');
    };
    if (37 in keysDown) {
        movePlayer('left');
    };
    if (39 in keysDown) {
        movePlayer('right');
    };
};

function changeSpeed(value) {
    switch(value) {
    case "slow":       
        if(player.speed > 0) {
            player.speed -= 1;
        } 
        break;
    case "speed":
        if(player.speed < 20) {
            player.speed += 1;
        }
        break;
    } 
}

function test() {
    for (var i in enemies) {
        if (player.x <= (enemies[i].x + 30)
		&& enemies[i].x <= (player.x + 30)
		&& player.y <= (enemies[i].y + 30)
		&& enemies[i].y <= (player.y + 30)) {
            if (enemies[i].direction == 0) {
                enemies[i].direction = 1;
                break;
            }
            if (enemies[i].direction == 1) {
                enemies[i].direction = 0;
                break;
            }
            if (enemies[i].direction == 2) {
                enemies[i].direction = 3;
                break;
            }
            if (enemies[i].direction == 3) {
                enemies[i].direction = 2;
                break;
            }
        }
    }
}


function reset() {
    player.x = 300;
    player.y = 300;
    player.speed = 10;
    player.imageY = 3*128;
}