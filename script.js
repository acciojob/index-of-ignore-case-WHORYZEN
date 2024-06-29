function indexOfIgnoreCase(str: string, subStr: string): number {
    // If either string is empty, or subStr is longer than str, return -1
    if (str.length === 0 || subStr.length === 0 || subStr.length > str.length) {
        return -1;
    }

    // Convert both strings to lowercase for case-insensitive comparison
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    // Perform case-insensitive search
    return lowerStr.indexOf(lowerSubStr);
}


// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
