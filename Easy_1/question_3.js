/**
 * Determine whether the following object of people and their age contains an
 * entry for 'Spot':
 * (Note that our keys have capitalized names; this usually violates style
 * guidelines, but is fine for our purposes. We'll use such keys in several
 * exercises in this course.)
 */

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// Solution 1
Object.keys(ages).includes('Spot');

// Solution 2
ages.hasOwnProperty('Spot');