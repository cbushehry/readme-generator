const fs = require('fs');

const writeFile = readmeFile => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', readmeFile, err => {

          if (err) {
            reject(err);

            return;
          }
    
          resolve({
            ok: true,
            message: 'File created!'
          });
        });
      });
}

module.exports = { writeFile };