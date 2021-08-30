class TicTacToe {
    constructor() {
        
        this.currentPlayer = 'x';
        this.playField = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }
    

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.playField[rowIndex][columnIndex] != null) {
            return;
        }
        this.playField[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        }
        return false;
    }

    getWinner() {
        if (this.playField[0][0] === this.playField[0][1] && this.playField[0][1] === this.playField[0][2]) {
            return this.playField[0][0];
        }
        if (this.playField[1][0] === this.playField[1][1] && this.playField[1][1] === this.playField[1][2]) {
            return this.playField[1][0];
        }
        if (this.playField[2][0] === this.playField[2][1] && this.playField[2][1] === this.playField[2][2]) {
            return this.playField[2][0];
        }
        if (this.playField[0][0] === this.playField[1][0] && this.playField[1][0] === this.playField[2][0]) {
            return this.playField[0][0];
        }
        if (this.playField[0][1] === this.playField[1][1] && this.playField[1][1] === this.playField[2][1]) {
            return this.playField[0][1];
        }
        if (this.playField[0][2] === this.playField[1][2] && this.playField[1][2] === this.playField[2][2]) {
            return this.playField[0][2];
        }
        if (this.playField[0][0] === this.playField[1][1] && this.playField[1][1] === this.playField[2][2]) {
            return this.playField[0][0];
        }
        if (this.playField[0][2] === this.playField[1][1] && this.playField[1][1] === this.playField[2][0]) {
            return this.playField[0][2];
        }
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < this.playField.length; i++) {
            if (this.playField[i].includes(null)) {
                return false;
            }
        }
        return true;
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.playField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
