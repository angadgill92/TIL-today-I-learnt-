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

2.  The primitive (operator) is applied to the reduced values.

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



#### Constant Definitions

We define constants to be used later in the program, constant values cannot be changed later.

``````lisp
; SYNTAX

(define ConstantName value)
; We use the define keyword followed by the constant (Which can include upper and lower.
; case letters and numbers as well (no parens or quotes though) followed by the value.

; EXAMPLE

(define Width 50)
(define Height 70)

(+ Width Height)
; => 120

; Values can be strings, numbers or even images!
``````



#### Function Definitions

Function definitions are basically `constants` that hold a function body and parameters.

###### Why use functions ?

Functions are used to avoid redundancy in writing code. If you're writing the same lines of code with just a few things changing, to get similar outputs in your program, (basically if it is a set pattern of operations giving the same result), you should consider making a function out of those lines of code. **Break Code Into Small Functions**. 

When using these, we `call`  these functions and `pass` certain `arguments` as the `parameters`.

###### Rules for defining Functions

``````lisp
;FUNCTION DEFINITION SYNTAX

(define (func_name param1 param2 ...)(
     func_body ))
; The function body must always be on a new line.

;EXAMPLE

(define (bulb color)
  (circle 40 "solid" c))

;FUNCTION CALL SYNTAX

(func_name expr1 expr2 ...)

; The function name must be followed by expressions corresponding to the number of
; parameters in the function

; EXAMPLE

(above (bulb "red")
       (bulb "green")
       (bulb "yellow"))

; Points to remember :
;	1. Arguments must be expressions (including function cals)
;	2. Arguments are called `operands`
; RULES TO EVALUATE FUNCTION CALLS :
;	1. Reduce operands to values
;	2. Replace function calls are replaced by the body of the function and
;	   each occurence of params is replaceed by the corresponding args value.

; Don't Repeat Yourself, use functions !!


``````



#### Booleans and If Expressions



Boolean values represent the answer to `predicates` or `true-false`questions.

`Note: Predicates are primitives or functions that produce a boolean value.   `

