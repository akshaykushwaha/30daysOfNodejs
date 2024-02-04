const cp = require("child_process")

function executeCommand(command) {
    cp.exec(command,(err,stdout,stderr) => {
        if (stderr) {
            console.log(`Error Occured: ${stderr.message}`)
        }
        else {
            console.log(`Expected Output: ${stdout}`)
        }
    })
}

executeCommand('ls -la');
// Expected Output: (output of ls -la)

executeCommand('echo "Hello, Node.js!"');
// Expected Output: Hello, Node.js!