const fs = require("fs");

function readFileContent(filePath) {
    fs.readFile(filePath, (err, data) => {
        if(err){
            console.log("Error reading file: " + err.message);
        } else if (data.length){
            console.log("File Content:");
            console.log("" + data);
        }
    })
}

readFileContent('test-files/file1.txt');
// Expected Output: Content of file1.txt

readFileContent('test-files/empty-file.txt');
// Expected Output: (empty string)

readFileContent('test-files/nonexistent-file.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory...