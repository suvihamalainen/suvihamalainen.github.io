var enemyImage = new Image();
enemyImage.src = "clover.png";

var enemies = [];

function createEnemy(canvas, amount) {
    for (i = 0; i < amount; i++) {
        var newEnemy = {
            x: 30 + (Math.random() * (canvas.width - 60)),
            y: 30 + (Math.random() * (canvas.height - 60)),
            w: 60,
            h: 60,
            speed: Math.random() * 10,
            direction: Math.floor(Math.random() * 4)
        };
        enemies.push(newEnemy);
    }; 
};


function moveEnemies() {
    for (var i in enemies) {
        switch (enemies[i].direction) {
        case 0:
            enemies[i].x -= enemies[i].speed;
            if (enemies[i].x < (enemies[i].w / 2)) {
                enemies[i].direction = 1;
            }
            break;
        case 1:
            enemies[i].x += enemies[i].speed;
            if (enemies[i].x > (600 - (enemies[i].w / 2))) {
                enemies[i].direction = 0;
            }
            break;
        case 2:
            enemies[i].y -= enemies[i].speed;
            if (enemies[i].y < (enemies[i].h / 2)) {
                enemies[i].direction = 3;
            }
            break;
        case 3:
            enemies[i].y += enemies[i].speed;
            if (enemies[i].y > (600 - (enemies[i].h / 2))) {
                enemies[i].direction = 2;
            }
            break;

        }
    }
}

function drawEnemies(context) {
    for (var i in enemies) {
        var x = enemies[i].x - (enemies[i].w / 2);
        var y = enemies[i].y - (enemies[i].h / 2);
        context.drawImage(enemyImage, x, y, enemies[i].w, enemies[i].h);
    };
}

