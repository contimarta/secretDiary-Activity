const secretDiary = require("./secretDiary")
const lockMechanism = require("./lockMechanism")

let secretDiary1 = new secretDiary(new lockMechanism());

secretDiary1.unlock("1234")
//secretDiary1.addEntry("Hello this is my first entry")
//secretDiary1.getEntries()

