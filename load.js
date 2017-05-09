var preload = function(game){}
 
preload.prototype = {
	preload: function() { 
        //Pelin kuvien ja äänien lataaminen.
        this.game.load.image('sky', 'sky.png');
        this.game.load.image('ground', 'dirt.png');
        this.game.load.image('ledge', 'platform.png');
        this.game.load.image('leaf', 'leaf.gif');
        this.game.load.image('enemy', 'nuclear.png'); 
        this.game.load.image('play', 'play.png');
        this.game.load.image('biogame', 'bio_game.png');
        this.game.load.image('gameover', 'game_over_b.png');
        this.game.load.spritesheet('cow', 'cows.png', 40, 34);
        this.game.load.spritesheet('soundIcon', 'soundIcon.png', 39, 40);
        this.game.load.audio('soundEffect', 'coin.mp3');
        this.game.load.audio('gabe', 'gabe.mp3');
	},
    
  	create: function() {
		this.game.state.start("GameTitle");
	}
}