# 0x09-Python -everything_is_object

# Tasks
## 0. Who am I?
- What function would you use to print the type of an object?

- Write the name of the function in the file, without ().

## 1. Where are you?
- How do you get the variable identifier (which is the memory address in the CPython implementation)?

- Write the name of the function in the file, without ().

## 2. Right count
- In the following code, do a and b point to the same object? Answer with Yes or No.
```
>>> a = 89
>>> b = 100
```

## 3. Right Count=
- In the following code, do a and b point to the same object? Answer with Yes or No.
```
>>> a = 89
>>> b = 89
```

## 4. Right count=
- In the following code, do a and b point to the same object? Answer with Yes or No.
```
>>> a = 89
>>> b = a
```

## 5. Right count=
- In the following code, do a and b point to the same object? Answer with Yes or No.
```
>>> a = 89
>>> b = a + 1
```

## 6. Is equal
- What do these 3 lines print?
```
>>> s1 = "Best School"
>>> s2 = s1
>>> print(s1 == s2)
```

## 7. Is the same
- What do these 3 lines print?
```
>>> s1 = "Best"
>>> s2 = s1
>>> print(s1 is s2)
```

## 8. Is really equal
- What do these 3 lines print?
```
>>> s1 = "Best School"
>>> s2 = "Best School"
>>> print(s1 == s2)
```

## 9. Is really the same
- What do these 3 lines print?
```
>>> s1 = "Best School"
>>> s2 = "Best School"
>>> print(s1 is s2)
```

## 10. And with a list, is it equal
- What do these 3 lines print?
```
>>> l1 = [1, 2, 3]
>>> l2 = [1, 2, 3] 
>>> print(l1 == l2)
```

# 11. And with a list, is it the same
- What do these 3 lines print?
```
>>> l1 = [1, 2, 3]
>>> l2 = [1, 2, 3] 
>>> print(l1 is l2)
```

## 12. And with a list, is it really equal

- What do these 3 lines print?
```
>>> l1 = [1, 2, 3]
>>> l2 = l1
>>> print(l1 == l2)
```

## 13. And with a list, is it realy the same

- What do these 3 lines print?
```
>>> l1 = [1, 2, 3]
>>> l2 = l1
>>> print(l1 is l2)
```

## 14. List append

- What does this script print?
```
l1 = [1, 2, 3]
l2 = l1
l1.append(4)
print(l2)
```

## 15. List add

- What does this script print?
```
l1 = [1, 2, 3]
l2 = l1
l1 = l1 + [4]
print(l2)
```

## 16. Integer Incrementation

- What does this script print?
```
def increment(n):
    n += 1

a = 1
increment(a)
print(a)
```
## 17. List Incrementation

- What does this script print?
```
def increment(n):
    n.append(4)

l = [1, 2, 3]
increment(l)
print(l)
```

## 18. List assignation

- What does this script print?
```
def assign_value(n, v):
    n = v

l1 = [1, 2, 3]
l2 = [4, 5, 6]
assign_value(l1, l2)
print(l1)
```

## 19. Copy a list object

- Write a function *def copy_list(l):* that returns a *copy* of a list.

- The input list can contain any type of objects
- Your file should be maximum 3-line long (no documentation needed)
- You are not allowed to import any module.

```
guillaume@ubuntu:~/0x09$ cat 19-main.py
#!/usr/bin/python3
copy_list = __import__('19-copy_list').copy_list

my_list = [1, 2, 3]
print(my_list)

new_list = copy_list(my_list)

print(my_list)
print(new_list)

print(new_list == my_list)
print(new_list is my_list)

guillaume@ubuntu:~/0x09$ ./19-main.py
[1, 2, 3]
[1, 2, 3]
[1, 2, 3]
True
False
guillaume@ubuntu:~/0x09$ wc -l 19-copy_list.py 
3 19-copy_list.py
guillaume@ubuntu:~/0x09$ 
```

## 20. Tuple or not?
```
a = ()
```

- Is *a* a tuple? Answer with Yes or No.

## 21. Tuple or not?
```
a = (1,2)
```

- Is *a* a tuple? Answer with Yes or No.

## 22. Tuple or not?
```
a = (1)
```
Is *a* a tuple? Answer with *Yes* or *No*

## 23. Tuple or not?

```
a = (1, )
```
Is *a* a tuple? Answer with *Yes* or *No*

## 24. Who I am?
What does this script print?

```
a = (1)
b = (1)
a is b
```

## 25. Tuple or not
What does this script print?
```
a = (1, 2)
b = (1, 2)
a is b
```

## 26. Empty is not empty
What does this script print?
```
a = ()
b = ()
a is b
```

## 27. Still the same
```
>>> id(a)
139926795932424
>>> a
[1, 2, 3, 4]
>>> a = a + [5]
>>> id(a)
```

Will the last line of this script print *139926795932424*? Answer with *Yes* or *No*.

## 28. Same or not?
```
>>> a
[1, 2, 3]
>>> id (a)
139926795932424
>>> a += [4]
>>> id(a)
```

Will the last line of this script print *139926795932424* ? Answer with *Yes* or *No*.

## 29. #pythonic

Write a function *magic_string()* that returns a string “BestSchool”* n times the number of the iteration (see code):

- Format: see example
- Your file should be maximum 4-line long (no documentation needed)
- You are not allowed to import any module

```
guillaume@ubuntu:~/0x09$ cat 100-main.py
#!/usr/bin/python3
magic_string = __import__('100-magic_string').magic_string

for i in range(10):
    print(magic_string())

guillaume@ubuntu:~/0x09$ ./100-main.py | cat -e
BestSchool$
BestSchool, BestSchool$
BestSchool, BestSchool, BestSchool$
BestSchool, BestSchool, BestSchool, BestSchool$
BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool, BestSchool$
guillaume@ubuntu:~/0x09$ wc -l 100-magic_string.py 
4 100-magic_string.py
guillaume@ubuntu:~/0x09$
```

No test cases needed

## 30. Low memory cost
- Write a class *LockedClass* with no class or object attribute, that prevents the user from dynamically creating new instance attributes, except if the new instance attribute is called *first_name*.

- You are not allowed to import any module.

```
guillaume@ubuntu:~/0x09$ cat 101-main.py
#!/usr/bin/python3
LockedClass = __import__('101-locked_class').LockedClass

lc = LockedClass()
lc.first_name = "John"
try:
    lc.last_name = "Snow"
except Exception as e:
    print("[{}] {}".format(e.__class__.__name__, e))

guillaume@ubuntu:~/0x09$ ./101-main.py
[AttributeError] 'LockedClass' object has no attribute 'last_name'
guillaume@ubuntu:~/0x09$ 
```