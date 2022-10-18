
/* Define a new class called Athlete
    The constructor will take the following arguments and set them as properties of any new instance.
            * @param {string} name 
    * @param {array} events -  

            
    Methods to define
        addEvent
            * @param {string} event
            pushes the event argument to the events array property

        removeEvent
            * @param {string} event
            find and deletes the event from the events array


*/

class Athlete {
    constructor(name, events) {
        this.name = name
        this.events = events
    }

    addEvent(event) {
        this.events.push(event)
    }

    removeEvent(event) {
        this.events = this.events.filter(ev => ev !== event)
    }
}

module.exports = { Athlete }