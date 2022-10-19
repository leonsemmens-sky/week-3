class Character {
    static totalCharacters = 0

    constructor(name) {
        this.name = name
        this.xp = 1
        this.hp = 100

        Character.totalCharacters += 1
    }
}

module.exports = { Character }