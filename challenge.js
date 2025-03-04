  from typing import List
import functools

# 1️⃣ Check if a string is a palindrome
def is_palindrome(s: str) -> bool:
    return s == s[::-1]

# 2️⃣ Reverse a string using a loop
def reverse_string(s: str) -> str:
    return "".join(reversed(s))

# 3️⃣ Merge Sort for sorting a list of strings
def merge_sort(arr: List[str]) -> List[str]:
    if len(arr) < 2:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left: List[str], right: List[str]) -> List[str]:
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# 4️⃣ Binary Search (Recursive)
def binary_search(arr: List[int], target: int, left: int, right: int) -> int:
    if left > right:
        return -1
    mid = (left + right) // 2
    if arr[mid] == target:
        return mid
    if arr[mid] > target:
        return binary_search(arr, target, left, mid - 1)
    return binary_search(arr, target, mid + 1, right)

# 5️⃣ Fibonacci with Memoization
@functools.lru_cache(maxsize=None)
def fib(n: int) -> int:
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

# 🔥 Main Method to Test Everything
if __name__ == "__main__":
    # Palindrome Test
    print("Is 'racecar' a palindrome?", is_palindrome("racecar"))

    # Reverse String Test
    print("Reversed 'world':", reverse_string("world"))

    # Merge Sort Test
    words = ["banana", "apple", "cherry"]
    print("Sorted words:", merge_sort(words))

    # Binary Search Test
    arr = [1, 2, 3, 4, 5]
    print("Binary Search for 4:", binary_search(arr, 4, 0, len(arr) - 1))

    # Fibonacci Test
    print("Fibonacci(50):", fib(50))





import java.util.*;

public class JavaAssessment {
    
    // 1️⃣ Check if a string is a palindrome
    public static boolean isPalindrome(String str) {
        int left = 0, right = str.length() - 1;
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    // 2️⃣ Reverse a string using a loop
    public static String reverseString(String str) {
        char[] charArray = str.toCharArray();
        int left = 0, right = str.length() - 1;
        while (left < right) {
            char temp = charArray[left];
            charArray[left] = charArray[right];
            charArray[right] = temp;
            left++;
            right--;
        }
        return new String(charArray);
    }

    // 3️⃣ Merge Sort for sorting an ArrayList of Strings
    public static void mergeSort(List<String> list) {
        if (list.size() < 2) return;
        int mid = list.size() / 2;
        List<String> left = new ArrayList<>(list.subList(0, mid));
        List<String> right = new ArrayList<>(list.subList(mid, list.size()));
        
        mergeSort(left);
        mergeSort(right);
        merge(list, left, right);
    }

    private static void merge(List<String> list, List<String> left, List<String> right) {
        int i = 0, j = 0, k = 0;
        while (i < left.size() && j < right.size()) {
            if (left.get(i).compareTo(right.get(j)) <= 0) {
                list.set(k++, left.get(i++));
            } else {
                list.set(k++, right.get(j++));
            }
        }
        while (i < left.size()) list.set(k++, left.get(i++));
        while (j < right.size()) list.set(k++, right.get(j++));
    }

    // 4️⃣ Binary Search (Recursive)
    public static int binarySearch(int[] arr, int target, int left, int right) {
        if (left > right) return -1;
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
        return binarySearch(arr, target, mid + 1, right);
    }

    // 5️⃣ Fibonacci with Memoization
    private static Map<Integer, Long> memo = new HashMap<>();
    
    public static long fib(int n) {
        if (n <= 1) return n;
        if (memo.containsKey(n)) return memo.get(n);
        long result = fib(n - 1) + fib(n - 2);
        memo.put(n, result);
        return result;
    }

    // 🔥 Main Method to Test Everything
    public static void main(String[] args) {
        // Palindrome Test
        System.out.println("Is 'racecar' a palindrome? " + isPalindrome("racecar"));

        // Reverse String Test
        System.out.println("Reversed 'world': " + reverseString("world"));

        // Merge Sort Test
        List<String> words = Arrays.asList("banana", "apple", "cherry");
        mergeSort(words);
        System.out.println("Sorted words: " + words);

        // Binary Search Test
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Binary Search for 4: " + binarySearch(arr, 4, 0, arr.length - 1));

        // Fibonacci Test
        System.out.println("Fibonacci(50): " + fib(50));
    }
}







// challenge 
// write a function to reverse a string 
// example(input=>output)
// hello=>olleh

//different ways of solving the solutions

//method 1
function reverseWord(word)
{
    const words= word.split('');
    const splitWords=words.reverse('');
    const reversedWord=splitWords.join('');

    return reversedWord;

}
console.log(reverseWord('hello'))

//method 2
const reverseWord = (str) => str.split('').reverse('').join('')
console.log(reverseWord('world'))

//method 3
const reverseStr = (word) => [...word].reverse('').join('')
console.log(reverseStr('reserve'))

//method 4
function reverseWord(str){
  return str.split('').reverse('').join('')
 }
 console.log(reverseWord('world'))

//challenge 2

const mergedArray = (arr1, arr2) => {
return arr1
  .filter(item=>!arr2.includes(item))
  .concat(arr2)
  .sort()
 }
console.log(mergedArray([1,2,3,4], [4,5,6,7,8,3]))





