/**
 * Checks if a string is a palindrome.
 * Palindrome: a string that is the same forwards or backwards.
 *
 * @param {string} [toCheck=''] - The string that might be a palindrome.
 * @returns {boolean} Is the string a palindrome?
 */
export const isPalindrome = (toCheck = '') => {
    let reversedString = '';
    for (let i = toCheck.length - 1; i >= 0; i--) {
        reversedString += toCheck.charAt(i);
    }
    return reversedString === toCheck;
};
