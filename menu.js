var gameTitle = function(game){
    
    var spaceKey;
}
 
gameTitle.prototype = {
    
  	create: function() {
   // this.game.physics.startSystem(Phaser.Physics.ARCADE);
        
        this.game.add.sprite(0, 0, 'sky');
        this.game.add.sprite(122, 25, 'biogame');
        
        var text = this.game.add.text(170, 150, 'Your mission is to collect as much\nleaves as you can. Don’t let all\nof them fall to the ground!\n\n\nWhile your score is getting higher\nmore enemies will appear. Be careful\nwith nuclear power!\n\n\nYou can move sideways and jump\nusing your arrow keys. Have fun!', {  font: '24px Bradley Hand'});
        text.lineSpacing = -10;
        
        var leaf = this.game.add.sprite(90, 160, 'leaf');
        this.game.add.tween(leaf).to({ y: 140 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        var enemy = this.game.add.sprite(90, 275, 'enemy');
        this.game.add.tween(enemy).to({ y: 255 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        var cow = this.game.add.sprite(90, 410, 'cow');
        this.game.add.tween(cow).to({ y: 380 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        
        var playButton = this.game.add.button(235, 465, "play", this.playTheGame, this);
        this.game.add.tween(playButton).to({ y: 455}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        this.game.add.sprite(0, 536, 'ground');
        

        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        //this.game.input.keyboard.addKeyCapture(Phaser.Keyboard.SPACEBAR);
        
        
        if (this.spaceKey.isDown) {
            
           this.playTheGame;
            console.log('jes');
        }
        
        
	},
    
	playTheGame: function() {
		this.game.state.start("TheGame");
	}
}