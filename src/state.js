let history = false
let currentCommand = false

const state = {

    init: () => {
        history = []
        currentCommand = () => { }
    },

    saveAndExecute: (command) => {
        // save the current state
        history.push(currentCommand)
    
        // set the new state as the current state
        currentCommand = command
    
        // execute the current state
        currentCommand()
    },

    undo: () => {
        // if we've no history, do nothing
        if (history.length === 0) {
            return
        }
    
        // get the last known state and set it as the current state
        currentCommand = history.pop()
    
        // execute the current state
        currentCommand()
    }
}