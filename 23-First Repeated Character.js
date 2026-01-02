// Problem: First Repeated Character

// Given a string `s`, determine the first character that appears more than once.
// The string is processed from left to right, and the first character whose second
// occurrence appears earliest should be returned.

// If no character appears more than once, return `null`.

// Examples:
// Input:  "abca"
// Output: "a"

// Input:  "abcdef"
// Output: null

// Input:  "aabbcc"
// Output: "a"

// Constraints:
// - 1 <= s.length <= 100000
// - `s` consists of lowercase English letters only

// Function Signature:
// function firstRepeatedChar(s)

// Time & Space Requirements:
// - Expected Time Complexity: O(n)
// - Expected Space Complexity: O(1) or O(n)

// Notes:
// - The function must return the character itself, not its index.
// - The solution should scan the string only once.
