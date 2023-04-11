/**
 * Alyssa was asked to write an implementation of a rolling buffer. You can add
 * and remove elements from a rolling buffer. However, once the buffer becomes
 * full, any new elements will displace the oldest elements in the buffer.
 *
 * She wrote two implementations of the code for adding elements to the buffer.
 * In presenting the code to her team leader, she said "Take your pick. Do you
 * prefer push() or concat() for modifying the buffer?".
 *
 * Is there a difference between these implementations, other than the method
 * she used to add an element to the buffer? You may assume that newElement will
 * always be a primitive value.
 *
 * Solution:
 * There is a major difference between these two implementations. Due to the
 * fact that `Array.push()` mutates the reference to `buffer` on `line 20`, the
 * original array passed in as the `buffer` argument is mutated.
 * `Array.concat()` returns a new array, which is later returned.
 */

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}