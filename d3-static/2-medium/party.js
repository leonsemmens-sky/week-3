const { Character } = require('../1-easy/static')

class Party {

    static currentLeaders = []
    static totalParties = 0

    constructor(leader) {
        if (!leader) {
            throw new Error("A party needs a leader!")
        }
        if (Party.currentLeaders.includes(leader.name)) {
            throw new Error(`${leader.name} is already leading a party!`)
        }

        this.leader = leader.name
        this.members = [leader]

        Party.currentLeaders.push(leader.name)
        Party.totalParties += 1
    }

}

module.exports = { Party, Character }