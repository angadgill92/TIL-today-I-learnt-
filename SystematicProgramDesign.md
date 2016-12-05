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



###### Booleans

Boolean values represent the answer to `predicates` or `true-false`questions.

`Note: Predicates are primitives or functions that produce a boolean value.   `

``````lisp
;EXAMPLES OF PREDICATES

(< 2 3)
; is 2 less than 3 (predicate)
; => true

(define WIDTH 100)
(define HEIGHT 200)

(>= WIDTH HEIGHT )
; is WIDTH greater than or equal to HEIGHT
; => true

(require 2htdp/image)

(define C1 (circle 20 "solid"))
(define C2 (circle 30 "solid"))

(> (image-width C1)
   (image-width C2))
; is width of C1 greater than that of C2
; => false
``````



###### If Expressions

`if` expressions help us do different things depending upon whether the predicate produces `true` or `false`.

``````lisp
; SYNTAX
(if (predicate)
    (then expression)
    (else expression))

; The predicate is called the 'Question Expression'
; The 'then' is called the 'True Answer'
; The 'else' is called the 'False Answer'

; EXAMPLE

(if (< 2 3) 							; ->	Question Expression
    "That's right!"						; ->    True Answer
    "Surely, you must be joking!")		; ->  	False Answer
; => "That's right!"


; RULES FOR EVALUATING IF EXPRESSIONS :
;	1. Evaluate the question expression to a value if it's not already.
;	2. If it evaluates to true, replace the entire expression with the true answer 
;	   expression, else replace it with the false answer expression.
;	3. If the question expression does not evaluate to either true or false
;	   give an error.

; There are also logical 'and', 'or' and 'not' expressions.

``````
