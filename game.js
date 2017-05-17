var score;
var backgroundMusic;

var theGame = function(game){
    var platforms;
    var player;
    var scoreText;
    var enemies;
    var missed;
    var coinSound;
    var soundButton;
}

theGame.prototype = {
    
    createLeaf: function(game) {
        var leaf = leaves.create(Math.random() * 640, 1, 'leaf');
        leaf.body.collideWorldBounds = true;
        leaf.body.gravity.y = 6;
        leaf.body.onWorldBounds = new Phaser.Signal();
        leaf.body.onWorldBounds.add(this.missLeaf, this);
    },
    
    createEnemy: function(game) {
    var enemy = enemies.create(0, Math.random() * 536, 'enemy');
        enemy.body.bounce.y = 1.0;
        enemy.body.bounce.x = 1.0;
        enemy.body.gravity.x = ((Math.random() * 10) + 1) * 10;
        enemy.body.gravity.y = ((Math.random() * 10) + 1) * 10;
        enemy.body.collideWorldBounds = true;
        enemy.physicsBodyType = Phaser.Physics.P2JS;
        enemy.body.velocity.x = ((Math.random() * 10) + 1) * 20;
        enemy.body.velocity.y = ((Math.random() * 10) + 1) * 17;
    },
    
    create: function() {
        this.score = 0;
        this.missed = 0;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.add.sprite(0, 0, 'sky');
        this.game.sound.mute = false;
        backgroundMusic = this.game.add.audio('gabe');
        backgroundMusic.loopFull();
        
        this.scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        soundButton = this.game.add.button(580, 10, "soundIcon", this.musicControl , this);
        
        player = this.game.add.sprite(70, 395, 'cow');
        this.game.physics.arcade.enable(player);
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 600;
        player.body.collideWorldBounds = true;
        player.animations.add('left', [0], 10, true);
        player.animations.add('right',  [1], 10, true);
        
        this.platforms = this.game.add.group();
        this.platforms.enableBody = true;

        var ground = this.platforms.create(0, this.game.world.height - 64, 'ground');
        ground.body.immovable = true;

        var ledge = this.platforms.create(300, 400, 'ledge');
        ledge.body.immovable = true;
        ledge = this.platforms.create(100, 100, 'ledge');
        ledge.body.immovable = true;
        ledge = this.platforms.create(400, 200, 'ledge');
        ledge.body.immovable = true;
        ledge = this.platforms.create(0, 300, 'ledge');
        ledge.body.immovable = true;

        leaves = this.game.add.group();
        leaves.enableBody = true;
        
        for (var i = 0; i < 10; i++) {
           this.createLeaf(this.game); 
        }

        enemies = this.game.add.group();
        enemies.enableBody = true;
    }, 
    
    update: function() {
       var hitPlatform = this.game.physics.arcade.collide(player, this.platforms);
       var cursors = this.game.input.keyboard.createCursorKeys();

        player.body.velocity.x = 0;

        if (cursors.left.isDown) {
            player.body.velocity.x = -300;
            player.animations.play('left');
        }
         if (cursors.down.isDown  ) {
            player.body.velocity.y += 30;
            
        }
        
        else if (cursors.right.isDown) {
            player.body.velocity.x = 300;
            player.animations.play('right');
            
        }
        else {
            player.animations.stop();
        }

        if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
            player.body.velocity.y = -500;
        }
        
        this.game.physics.arcade.overlap(player, leaves, this.collectLeaf, null, this);
        this.game.physics.arcade.overlap(player, enemies, this.gameOver, null, this);  
    },
    
    gameOver: function() {
        this.game.state.states["GameOver"].finalScore = this.score;
        this.game.state.start("GameOver");
        this.game.sound.mute = true;
        backgroundMusic.destroy();
    },
    
    collectLeaf: function(player, leaf) {
        coinSound = this.game.add.audio('soundEffect');
        coinSound.play();
        leaf.kill();
        this.score += 10;
        this.scoreText.text = 'Score: ' + this.score;
        this.createLeaf(this.game);
        if (this.score % 50 == 0) {
            this.createEnemy(this.game);
        }
    },
    
    missLeaf: function(leaf) {
        leaf.kill();
        this.missed += 1;
        if (this.missed == 10) {
            this.gameOver();
        }
    },
    
    musicControl: function() {
        this.game.sound.mute = !this.game.sound.mute;
         if (this.game.sound.mute) {
            soundButton.frame = 1;
        } else {
            soundButton.frame = 0;
        }  
    }
}