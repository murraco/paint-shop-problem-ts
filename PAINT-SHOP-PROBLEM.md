# Paint shop coding exercise

You run a paint shop, and there are a few different colors of paint you can prepare. Each color can be either "gloss" or "matte".

You have a number of customers, and each have some colors they like, either gloss or matte. No customer will like more than one color in matte.

You want to mix the colors, so that:
- There is just one batch for each color, and it's either gloss or matte.
- For each customer, you make at least one paint type that they like.
- You make as few mattes as possible (because they are more expensive).
- Your program should accept an stdin stream and print a result to standard out.
- An example of input stream (with `\n` as line delimiter) is:

```plain
5            # The first line specifies how many colors there are.
1 M 3 G 5 G  # Each subsequent line describes a customer. For example, this first customer likes color 1 in matte, color 3 in gloss and color 5 in gloss.
2 G 3 M 4 G  # This second customer would like color 2 in gloss, color 3 in matte and color 4 in gloss
5 M          # This third customer would like color 5 in matte
```

Your program should read an input like this (without the comments), and print out either that it is impossible to satisfy all the customers, or describe, for each of the colors, whether it should be made gloss or matte. 

The output for the above file should be: `G G G G M` because all customers can be made happy by every paint being prepared as gloss except number 5.

An example of a file with no solution is:

```plain
1
1 M
1 G
```

Your program should print `No solution exists` to stderr and terminate with a non-zero exit code.

A slightly richer example is:

```plain
5
2 M
5 G
1 G
5 G 1 G 4 M
3 G
5 G
3 G 5 G 1 G
3 G
2 M
5 G 1 G
2 M
5 G
4 M
5 G 4 M
```

..which should print `G M G M G`.

One more example. The input:

```plain
2
1 G 2 M
1 M
```
      
...should produce `M M`.
