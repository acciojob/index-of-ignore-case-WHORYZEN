function indexOfIgnoreCase(str: string, subStr: string): number {
    // Check for edge cases
    if (!str || !subStr || subStr.length > str.length) {
        return -1;
    }

    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();

    return lowerStr.indexOf(lowerSubStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));