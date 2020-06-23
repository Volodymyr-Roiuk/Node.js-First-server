const path = require('path');

console.log(path.basename(__filename)); // Повертає назву файлу а не абсолютний шлях
console.log(path.dirname(__dirname)); // Повертає шлях до корневої директорії проекта а не директорію в якій ми працюєм
console.log(path.extname(__filename)); // Повертає розширення файлу аля .js 
console.log(path.parse(__filename)); // Повертає обєкт який дозволяє



