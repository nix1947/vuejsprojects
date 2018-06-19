new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            // Attack by player 
            monsterDamage = this.calculateDamage(3, 10);
            this.monsterHealth -= monsterDamage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + monsterDamage
            })
            this.checkWin();

            // Attack by monster.
            playerDamage = this.calculateDamage(3, 12);
            this.playerHealth -= playerDamage
            this.turns.unshift({
                isPlayer: false,
                text: "Monster hits player for " + playerDamage
            })

            this.checkWin();
        },
        specialAttack: function () {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: "Player hits monster for " + damage
            })
            
            this.checkWin();


        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
                this.turns.unshift({
                    isPlayer: false,
                    text: "Player heal by 10"
                })
            } else {
                this.playerHealth = 100;
            }
        },
        giveUp: function () {
            this.gameIsRunning = false;
            this.turns.unshift({
                isPlayer: true,
                text: "Player giveup"
            })

        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max), min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm("You won! New Game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
            } else if (this.playerHealth <= 0) {
                if (confirm("You lost! New Game ?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
            }

        }

    }
})