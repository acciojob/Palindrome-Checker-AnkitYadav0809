function palindrome(str) {
    // Step 1: Normalize the string
    const normalizedStr = str
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters

    // Step 2: Check for palindrome
    const reversedStr = normalizedStr.split('').reverse().join('');
    
    return normalizedStr === reversedStr; // Compare normalized string with reversed
}

module.exports = palindrome;