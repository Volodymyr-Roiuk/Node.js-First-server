const consoleToJSON = () => {
    const result = {};

    for (let i = 2; i < process.argv.length; i++) {
        const [key, value] = process.argv[i].split('=');

        result[key] = value || true;
    }
    
    return result
} 

console.log(consoleToJSON());