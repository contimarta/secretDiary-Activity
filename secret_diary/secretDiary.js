
class secretDiary{
    entries =[];

    constructor(lockMechanism){
        this.lockMechanism= lockMechanism
    }

    lock(key){
        this.lockMechanism.lock(key)
    }
    unlock(key){
        this.lockMechanism.unlock(key)
    }

    addEntry (string){
        if (this.isItLocked){throw new Error("You do not have access")}
        else{
            this.entries.push(string)
        }
    }

    getEntries(){
        if (this.isItLocked){throw new Error("You do not have access")}
        console.log(this.entries)
    }
}

module.exports = secretDiary;