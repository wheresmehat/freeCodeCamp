apply accepts an array and it applies the array as parameters to the actual function. So,

Math.max.apply(Math, list);
can be understood as,

Math.max("12", "23", "100", "34", "56", "9", "233");
So, apply is a convenient way to pass an array of data as parameters to a function. Remember

console.log(Math.max(list));   # NaN
will not work, because max doesn't accept an array as input.

There is another advantage, of using apply, you can choose your own context. The first parameter, you pass to apply of any function, will be the this inside that function. But, max doesn't depend on the current context. So, anything would work in-place of Math.

console.log(Math.max.apply(undefined, list));   # 233
console.log(Math.max.apply(null, list));        # 233
console.log(Math.max.apply(Math, list));        # 233
Since apply is actually defined in Function.prototype, any valid JavaScript function object, will have apply function, by default.


How do say that max doesn't depend upon the current context?. – Shane 

@Shane because, it works even when we set the context to undefined or null :) If max tried to access/change anything in the context, it would have failed when context is set to undefined or null. – thefourtheye 

Actually, Math.max will not use the first parameter, since it doesn't need any context. It operates only on the data which it receives in the arguments. - thefourtheye


https://stackoverflow.com/questions/21255138/how-does-the-math-max-apply-work

-----------------------------------------------------------

f.apply(x, y) is x.f(the contents of y).

Where f is arr1.push, x is arr1, and y is arr2, that's arr1.push.apply(arr1, arr2) is arr1.push(the contents of arr2).

Note, arr1.push adds all its arguments to arr1, so arr1.push(arr2) adds arr2 to arr1, making it ['a', 'b', ['c', 'd']].

Where f is Math.max, and y is [-1, 5, 11, 3], that's Math.max.apply(x, [-1, 5, 11, 3]).

But what do you put in x?

Math.max is made to work as function called on its own, not as a method of an object.

If you leave out x and do Math.max.apply([-1, 5, 11, 3]), Math.max will think it's being called as a method of the array and without any arguments. So it will give the result of Math.max().

So then you have to put something in the x, and it doesn't matter what, because Math.max is not made to use it, so it will ignore it.

The best value you can give x is the simplest, which is null.

If you're wondering what a line of Javascript code will do, it's a good idea to test it.


http://stackoverflow.com/questions/35075869/use-of-javascript-math-max-applynull-or-math

--------------------------------------------------------



var arr1 = ['a', 'b'];
var arr2 = ['c', 'd'];

arr1.push.apply(arr1, arr2);
    // arr1 is now ['a', 'b', 'c', 'd']
second example

Math.max.apply(null, [-1, 5, 11, 3])
In the first one above, can we just use array1.push(array2), is there any different?

In the second one above, the null param really confusing to me and what's more, it seems that max mehood need number type, not an array?


ANSWER:

If you use arr1.push(arr2), the result is different:

['a', 'b', ['c', 'd']]
To get the same result as your original arr1.push.apply, you would have to do

arr1.concat(arr2);
apply takes the array argument and turns each element into a separate argument to the function being called. When you call the function normally, the array is just a single argument.

The normal way to call Math.max is with each number that it's comparing as a separate argument:

Math.max(-1, 5, 11, 3);


In order to get the arguments from an array, you have to use apply to spread them.

The reason for the null argument in the second case is because the first argument to apply is the context of the function, i.e. the value that will be assigned to this inside the function. When you call a function normally, the context is the value before the .; for example, when you write

arr1.push('x');
the context is the arr1 array. Math.max() doesn't use its context, but you have to pass something, so null is a common placeholder. But when we call push using apply, we have to pass arr1 as the context, so it knows which array to modify. Some people like to write

Math.max.apply(Math, [-1, 5, 11, 3]);
so that the context will be the same as if you'd called Math.max in the normal way. But it doesn't matter in this case.


http://stackoverflow.com/questions/35075869/use-of-javascript-math-max-applynull-or-math

-----------------------------------------------------------


Array.prototype.concat.apply([], [["a"], "b"])
    [ 'a', 'b' ]
apply’s this Value must be [] here, because concat is a method, not a non-method function

http://www.2ality.com/2012/07/apply-tricks.html