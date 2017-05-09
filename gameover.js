var gameOver = function(game){}
 
gameOver.prototype = {
    
    create: function() {
        var finalScore = this.game.state.states["TheGame"].score;
        var sky1 = this.game.add.sprite(0, 0, 'sky');
        sky1.alpha = 0.5;
        var gamer  = this.game.add.sprite(70, 140, 'gameover');
        var tulos = this.game.add.text(170, 290, 'You scored: ' + this.finalScore, { fontSize: '40px', fill: '#000' });
        var playButton = this.game.add.button(315,410,"play",this.playTheGame,this);
        playButton.anchor.setTo(0.5,0.5);
        this.game.add.tween(sky1).to( { alpha:1}, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
        this.game.add.tween(playButton).to({ y: 430}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        this.game.add.tween(gamer).to({ y: 160 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        this.game.add.tween(tulos).to({ y: 310 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        
  },
    
  playTheGame: function() {
    this.game.state.start("TheGame");
  }
}
