class lockMechanism{
    isItLocked = true;//true means that it's locked and false means that it's open
    correctKey = "1234";

    lock(key){
        if (key === this.correctKey){
        this.isItLocked=true
        console.log("You have correctly locked the diary")}
        else {console.log("Wrong key!")}
    }

    unlock(key){
        if (key === this.correctKey){
            this.isItLocked=false
            console.log("You have correctly unlocked the diary")}
            else {console.log("Wrong key! Diary is locked")}
    }
}

module.exports = lockMechanism