# Systematic Program Design

So I started the How to Design Programs Course from EdX today. Just taking notes here for future reference.

### Day 1

#### Expressions

An expression is anyting that evaluates to a value.

``````lisp
(+ 2 3)
(* (+ 2 3) (- 5 4))
; These are all expressions
; All numbers, when used as operands, are also expressions, since they return a value
``````





#### Evaluation Rules in Racket

##### The Primitive Call Rule :

Expressions are evaluated Left -> Right and from the inside out i.e.

1.  All operands are reduced to values first, then

2. The primitive (operator) is applied to the reduced values.

   Consider the following : 

``````lisp
(+ 2 (* 3 4) (- (+ 1 2) 3))
; Such an expression is called a 'primitive call' since it begins with a primitive
; (operator)

; This will be evaluated as follows : 

; (+ 2 12 (- (+ 1 2) 3)) Note that 2 is already a value, therefore we evaluate the
; next operand (* 3 4) which gives us the value 12

; Next, we try to reduce (- (+ 1 2) 3), which is the last operand but also happens to
; contain another expression as an operand, (note that we still evaluate left to right)
; so we use the inside first rule here again and reduce (+ 1 2) to a value

; (+ 2 12 (- 3 3)), now we reduce the last operand to a value to get (+ 2 12 0)

; finally we add everything from left to right so we get (+ (+ 2 12) 0),
; which gives us (+ 14 0), which is 14.
``````



#### Strings and Images in Racket

Strings are wrapped in `"___" `  double-quotes. We can call string primitives (methods or functions), the same way we call number primitives.

```lisp
"Angad"
; This string has the value 'Angad' which is my first name.
"Gill"
; Similarly this string has the value 'Gill', which is my last name.

; We can append the two along with a space
(string-append "Angad" " " "Gill")
; => this returns "Angad Gill"
```

`Note : Strings and Numbers are different,so doing (+ 1 "23") will result in an error. `

###### Some String Primitives

``````lisp
(string-append "Angad" " " "Gill")
; => 'Angad Gill'
; Expects multiple arguments, and appends all of them together.

(string-length "Angad")
; => 5
; Expects a single argument which evaluates to a string and returns it's length

(substring "Geekskool" 0 5)
; => "Geeks"
; Expects 3 arguments, the first is the string, the next is the starting index of the sub
; string (included), and the third is the ending index of the substring (excluded).


; Racket also uses zero-based indexing.
``````

###### Image Functions

`Note: this is specific to the SPD course`

``````lisp
(circle 50 "outline" "navy" )
; function to create a circle
; takes radius as the first arg, fill style as second, and colour as third

(rectangle 30 40 "outline" "blue")
; function to create a rectangle
; takes width and height as first and second arguments, and then fill style and colour

(text "hello" 24 "orange")
; function to create an image out of a string
; takes a string as the first argument, size as the second, and colour as the third.
``````

