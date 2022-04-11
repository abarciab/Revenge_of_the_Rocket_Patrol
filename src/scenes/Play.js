class Play extends Phaser.Scene {
    constructor(){
        super("play");
    }

    preload(){
        this.load.image('starfield', 'assets/starfield.png');
        this.load.image('starfield_small', 'assets/starfield_small.png');
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
    }

    create(){

        this.starsSmall = this.add.tileSprite(0,0, game.config.width, game.config.height, 'starfield_small').setOrigin(0,0);
        this.starsLarge = this.add.tileSprite(0,0, game.config.width, game.config.height, 'starfield').setOrigin(0,0);
        

        this.add.text(20, 20, "play!!!");

        this.add.rectangle(0, 20, game.config.width, 80, 0x00FF00).setOrigin(0,0);

        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);

        this.p1Rocket = new Rocket(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0);

        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    update(){

        this.starsLarge.tilePositionX -= 4;
        this.starsSmall.tilePositionX -= 2;
    }

}