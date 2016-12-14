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



## Day 2



### How to Design Functions - The Recipe.

So here's the recipe to design functions :

> 1. Signature, purpose and stub. 
> 2. Define examples, wrap each in check-expect.
> 3. Template and inventory.
> 4. Code the function body.
> 5. Test and debug.

I will go along and elaborate on these as I go through the course.



#### Parts of the recipe.

##### Signature

The signature of a function tells us what `type` of data our function consumes and what `type` of data it returns 

```racket
;; Type -> Type

;; The part on the left of the arrow shows what type the function consumes, and that on
;; the right shows the return type. 

;; If the function takes multiple arguments, then we define a type on the left for each of
;; those arguments.

;; All type names start with a capital letter.

;; EXAMPLE

;; Number -> Number 
;; (this function takes an argument of type Number and returns a Number)

;; (Number, String) -> Boolean 
;; (this function takes a Number and a String as arguments and returns a Boolean)
```



##### Purpose

The purpose gives a short (one line) description of what the function produces with the value that it consumes.

``````racket
;; EXAMPLE - 1 
;; Number -> Number [Signature]
;; produces two times the number it consumes [Purpose]

;; EXAMPLE - 2
;; (Number, String) -> Boolean
;; returns true if the given number equals the length of the given string, false otherwise
``````



##### Stub

The stub is a function definition. It acts like a template/scaffolding using which we build our functions. We later comment it out, or even delete it when we've finished writing and testing the function.

A standard stub must have the following properties :

1. The same name as the function we intend to write.
2. The correct number of parameters.
3. Produces a dummy result of the same type.

``````racket
;; Number -> Number [Signature]
;; produces two times the number it consumes [Purpose]
(define (double n) 0) ; [Stub]

;; Notice how the function takes a number and returns 0 which is also a number.
;; This helps us keep the basic constraints in mind before we solve the problem.
``````



##### Examples and Checks

Examples are used to demonstrate the behaviour of the function. It is always nice to provide multiple examples, but not too many.

Wrapping the example function calls in a check-expect expression also makes them serve as `unit-tests`. We write them as follows : 

``````racket
;; Number -> Number [Signature]
;; produces two times the number it consumes [Purpose]

(check-expect (double 4) (* 2 4))  ;[this is a check-example]
(check-expect (double 1.5) (* 2 1.5)) ;[so is this]

(define (double n) 0) ; [Stub]

;; The check-expect calls will use the stub to run the tests at this stage. The stub helps
;; us check if our tests are well-formed.
;; Running the this code right now will result in both the tests failing, but both the 
;; tests will run, which tells us that the stub and the tests are well formed.
``````



##### Templates

Templates tell us where the function body goes. We copy the template and paste it and then work on it to build our function. 

`Note : After building the template, we comment out the Stub. Also, after building the entire function, we may comment out, or even delete the 'stub' and the 'template'. `

```racket
;; Number -> Number [Signature]
;; produces two times the number it consumes [Purpose]

(check-expect (double 4) (* 2 4))  ;[this is a check-example]
(check-expect (double 1.5) (* 2 1.5)) ;[so is this]

;; (define (double n) 0) ; [Stub]

;; (define (double n ) [Template]
;;   (... n))          [ the ellipsis (...) followed by 'n' indicate that the function
;;						 works on the argument n] 
```

###### Finally the Function

```racket
;; Number -> Number [Signature]
;; produces two times the number it consumes [Purpose]

(check-expect (double 4) (* 2 4))  ;[this is a check-example]
(check-expect (double 1.5) (* 2 1.5)) ;[so is this]

;; (define (double n) 0) ; [Stub]

;; (define (double n ) [Template]
;;   (... n))          [ the ellipsis (...) followed by 'n' indicate that the function
;;						 works on the argument n] 

(define (double n)
	(* 2 n))

;; Note that sometimes expanding the expected values to operands helps us determine what
;; to write in the body of the function.
```



> **A thing to keep in mind about Testing in DrRacket**
>
> DrRacket highlights code that was never executed with a Black background and Orange font, or by simply changing the font color to Orange. This helps us while writing tests for our code, for example, if we're writing `check-expect` for a function that uses a conditional expression, and none of our tests leads to one of the conditions being evaluated, DrRacket highlights the unexecuted code to show us that it was not covered. 
>
> Using this code-coverage information, we can actually design complete and robust tests. So now we know what that weird highlighting does !
>
> **Other stuff to kep in mind :**
>
> * Make sure your that after running your tests, all of your code is covered.
> * If you think of some boundary-conditions which your code does not handle, write a test for the condition, then update the function body to address that. This may also include updating the type signature, purpose and stub etc. 



## Day 3

### How to Design Data Recipe

#### `cond` Expressions

**`cond`** is a multi-branched conditional, having any number of conditional cases at the same level.

``````racket
(require 2htdp/image)

;; Image -> String
;; produces a string defining the aspect ratio of the given image

(check-expect (aspect-ratio (rectangle 20 30 "solid" "navy")) "tall")
(check-expect (aspect-ratio (rectangle 20 20 "solid" "navy")) "square")
(check-expect (aspect-ratio (rectangle 30 20 "solid" "navy")) "wide")


;; (define (aspect-ratio img) "")       ;[Stub]
;; (define (aspect-ratio img) (...img)) ;[Template] 

#; 
(define (aspect-ratio img)
	(if (> (image-height img) (image-width img))
	"tall"
	(if (= (image-height img) (image-width img))
		"square"
		"wide")))
	
(define (aspect-ratio img)
	(cond [(> (image-height img) (image-width img))   "tall"]
		  [(= (image-height img) (image-width img)) "square"]
		  [else "wide"]))

;; The code with cond is convenient and more readable than the one with the if statements.
``````

`Note: All questions in a cond expression must evaluate to a Boolean value, except the last question expression, which can be just else.`





#### Data Definitions



> Every program has what is known as a `problem domain`, which in turn has pieces of information.
>
> A program does not have information, it has data. We use data to *represent* these pieces of information in the problem domain.
>
>  This data, in turn, should be defined in such a way, that it can be *interpreted* as the pieces of information from the problem domain that it was supposed to represent.
>
> That is where data definitions come into the picture.



Data defintions help us describe the following :

* how to form data of a new type
* how to represent information as data
* how to interpret data as information
* template for operating on data



``````racket
; Suppose you are working on a program someone else wrote
; that simulates traffic. In the program there are traffic 
; lights and cars and streets and things like that. While
; reading the program you come across this function:
; 
; (define (next-color c)
;   (cond [(= c 0) 2]
;         [(= c 1) 0]
;         [(= c 2) 1]))
; 
; What does it do? The name is a hint, it seems to produce
; the "next color". But its hard to be sure. 
; 


; 
; Surely if the programmer had followed the HtDF recipe 
; this would be better wouldn't it? Suppose instead the   
; code looked like this.
; 
; ;; Natural -> Natural
; ;; produce next color of traffic light
; (check-expect (next-color 0) 2)
; (check-expect (next-color 1) 0)
; (check-expect (next-color 2) 1)
; 
; ;(define (next-color c) 0)  ;stub
; 
; ;(define (next-color c)     ;template
; ;  (... c))
; 
; (define (next-color c)
;   (cond [(= c 0) 2]
;         [(= c 1) 0]
;         [(= c 2) 1]))
; 
; That's a little better. At least it is now clear that
; the function does produce the next color. And the tests
; make it clear that the function is really supposed to
; produce 2 when it is called with 0. But what are the
; 0, 1 and 2 about? And what about calling the function
; with 3? The signature says that is OK, but the cond
; in the body will signal an error in that case.
;  


; 
; ;; Data definitions:
; 
; ;; TLColor is one of:
; ;;  - 0
; ;;  - 1
; ;;  - 2
; ;; interp. 0 means red, 1 yellow, 2 green               
; #;
; (define (fn-for-tlcolor c)
;   (cond [(= c 0) (...)]
;         [(= c 1) (...)]
;         [(= c 2) (...)]))
; 
; 
; 
; ;; Functions
; 
; ;; TLColor -> TLColor
; ;; produce next color of traffic light
; (check-expect (next-color 0) 2)
; (check-expect (next-color 1) 0)
; (check-expect (next-color 2) 1)
; 
; ;(define (next-color c) 0)  ;stub
; 
; ; Template from TLColor
; 
; (define (next-color c)
;   (cond [(= c 0) 2]
;         [(= c 1) 0]
;         [(= c 2) 1]))



;; A small part of a traffic simulation.

;; Data definitions:

;; TLColor is one of:
;;  - "red"
;;  - "yellow"
;;  - "green"
;; interp. "red" means red, "yellow" yellow, "green" green
#;
(define (fn-for-tlcolor c)
  (cond [(= c "red") (...)]
        [(= c "yellow") (...)]
        [(= c "green") (...)]))



;; Functions

;; TLColor -> TLColor
;; produce next color of traffic light
(check-expect (next-color "red") "green")
(check-expect (next-color "yellow") "red")
(check-expect (next-color "green") "yellow")

;(define (next-color c) "red")  ;stub

; Template from TLColor

(define (next-color c)
  (cond [(string=? c "red")    "green"]
        [(string=? c "yellow") "red"]
        [(string=? c "green")  "yellow"]))

``````

`Note: This taken from the starter file which can be found here:`[source]([source](https://s3.amazonaws.com/edx-course-spdx-kiczales/next-color-starter.rkt))

#### How to Design Data - The Recipe

> 1. **Identify the structure of the information**.
> 2. If the data is [compound]() you might want to write the **structure definition** first.
> 3. This is followed by a **type comment**, which defines a new type and describes how to form data of that type.
> 4. Then an **interpretation** that describes the correspondence between the infromation and the data.
> 5. Follow all of this with one or more **examples** of the data.
> 6. Lastly write a **template** for a single argument function operating on this data, just so people reading the code know how to use the data.



## Day 4

### Data and Function Design Recipes are Orthogonal

So, while going through the course yesterday, I found out that the way we design or model data is totally independent of the way we design functions. Only the function body depends on the type of data we're supposed to handle, but the way we think about the type signature, check-expects etc. does not rely on how  our data looks. 

To explain what 'orthogonal' means here, I would like to draw an analogy. Remember high sschool physics and the chapter on waves ? If I remember correctly, electromagnetic waves have two components, namely the 'magnetic field' and the 'electrical field' and both of these keep oscillating at an agle of 90 degrees to each other. What this essentially means is that they do not affect each other, yet are part of the same wave. 

Similarly, data design and function design are both parts of systematic program design, but are non-interfering  towards each other and independent.

> **Note : The structure of the functions and tests does depend a little on the data type, especially when the data type is non-primitive, but the Data Design and Function Design still remain largely orthogonal.**
>

### Types of Data

#### Atomic

Data which can not be broken down further, such as a name, or time. This is also called atomic non-distinct data. For example : 

``````racket
;; Name is String            [Type Comment]
;; interp. Name of a Person  [Interpretation]

(define MYNAME "Angad") ;    [Example]

#;
(define (fn-for-name n)   ;  [Data Driven function Template]
  (... n))

;; Template rules used:
;;  - atomic non-distinct: String

;; Generally the template for Atomic data looks like this :
;;
;; (define (fn-for-data variable-name)  ;  [Data Driven Function Template]
;;    (... variable-name))
``````



#### Interval Data

An interval is a range of data `Number`. For example :

```````racket
;; Countdown is Integer[0, 10]							[Type Comment]
;; interp. the number of seconds remaining to liftoff	[Interpretation]
(define C1 10)  ; start									
(define C2 5)   ; middle							;	[Examples]
(define C3 0)   ; end
 
#;
(define (fn-for-countdown cd)						;   [Data Driven Functional Template]
  (... cd))

;; Template rules used:
;;  - atomic non-distinct: Integer[0, 10]

```````

`Note: '[ ]' square brackets mean that the first and last elements are included in the data, while '( )' parens mean that these boundary elements are excluded.`

**Always check for boundary conditions as well as midpoints when writing tests for interval data.**



#### Enumerations

Enumerations are used when the information to be represented consists of a fixed number of *distinct* items. These distinct items are almost always represented as strings. For example , colors of a traffic light, or cities in a state etc. Here's an example : 

``````racket
;; LightState is one of: [Type Comments in Enumeration Use the 'one of' keyword]
;;  - "red"
;;  - "yellow"
;;  - "green"
;; interp. the color of a traffic light

;; <examples are redundant for enumerations>
 
#;
(define (fn-for-light-state ls)
  (cond [(string=? "red" ls) (...)]
        [(string=? "yellow" ls) (...)]
        [(string=? "green" ls) (...)]))
;; Template rules used:
;;  - one of: 3 cases
;;  - atomic distinct: "red"
;;  - atomic distinct: "yellow"
;;  - atomic distinct: "green"


;; Note that since we have already listed the data, writing examples would be redundant.
;; i.e. writing something like :
;; (define RED "red")
;; as an example of how to use this particular data is a waste of time and serves no
;; purpose at all, even the interpretation is redundant !
``````

For large enumerations, we need not write the templates right away, we can defer writing templates till we actually need them. Even then we need only write the specific cases that our function requires in the `cond` expression, and remember to always hanlde other cases with an `else` case.



#### Itemizations

Itemizations are used to describe data which has atleast two subclasses where atleast one of the classes is non-distinct. For example, the following example shows that if there is no bird, the data will be `false` (which is distinct) or the position of the bird represented by a `Number` (which is non-distinct as it can be any number and not a particular number) : 

``````racket
;; Bird is one of:
;;  - false
;;  - Number
;; interp. false means no bird, number is x position of bird

(define B1 false)
(define B2 3) 

#;
(define (fn-for-bird b)
  (cond [(false? b) (...)]
        [(number? b) (... b)]))
;; Template rules used:
;;  - one of: 2 cases
;;  - atomic distinct: false
;;  - atomic non-distinct: Number
``````



> Functions operating on itemizations should have at least as many tests as there are cases in the itemizations. If there are intervals in the itemization, then there should be tests at all points of variance in the interval. In the case of adjoining intervals it is critical to test the boundaries.



##### Itemization of Intervals

If the itemization is comprised of 2 or more intervals. The functions operating on the data definition must be tested at all the boundaries of closed intervals and at points between the boundaries.

Example:

``````racket
;;; Reading is one of: 
;;  - Number[> 30]      
;;  - Number(5, 30]     
;;  - Number[0, 5]      
;; interp. distance in centimeters from bumper to obstacle
;;    Number[> 30]    is considered "safe"
;;    Number(5, 30]   is considered "warning"
;;    Number[0, 5]    is considered "dangerous"
(define R1 40)
(define R2 .9)

(define (fn-for-reading r)
  (cond [(< 30 r) (... r)]
        [(and (<  5 r) (<= r  30)) (... r)]
        [(<= 0 r 5) (... r)]))

;; Template rules used:
;;  one-of: 3 cases
;;  atomic non-distinct:  Number[>30]
;;  atomic non-distinct:  Number(5, 30]
;;  atomic non-distinct:  Number[0, 5]
``````



## Day 5

### How to Design Functions with Non-Primitive Data

Today I'm learning about how to design functions that consume and act upon `non-primitive data`, which is also called `user-defined data`. We're going to start off with the Interval type, so here we go :

#### HtDF with Interval

When designing functions that consume interval type of data, make sure to write tests for the boundary cases and one or two cases in the middle. For Example :

``````racket

; 
; PROBLEM:
; 
; Using the SeatNum data definition below design a function
; that produces true if the given seat number is on the aisle. 
; 


;; Data definitions:

;; SeatNum is Natural[1, 32]
;; Interp. Seat numbers in a row, 1 and 32 are aisle seats
(define SN1  1) ;aisle
(define SN2 12) ;middle
(define SN3 32) ;aisle
#;
(define (fn-for-seat-num sn)
  (... sn)) 

;; Template rules used:
;;  atomic non-distinct: Natural[1, 32]


;; Functions:

;; SeatNum -> Boolean                          ;[Type Signature]
;; produces true if SeatNum is an aisle seat   ;[Purpose]

(check-expect (aisle-seat? SN1) true)
(check-expect (aisle-seat? SN2) false)
(check-expect (aisle-seat? SN3) true)

;;(define (aisle-seat? s) false)               ; [Stub]
;;<use template from SeatNum>

(define (aisle-seat? sn)                       ; [Function Definition]
  (or (= 1  sn)
      (= 32 sn)))

``````



#### HtDF with Enumerations

Functions that consume enumerations must have atleast as many tests as there are cases in th enumeration.

``````racket
; 
; PROBLEM:
; 
; Using the LetterGrade data definition below design a function that
; consumes a letter grade and produces the next highest letter grade. 
; Call your function bump-up.
; 



;; Data definitions:

;; LetterGrade is one of: 
;;  - "A"
;;  - "B"
;;  - "C"
;; interp. the letter grade in a course
;; <examples are redundant for enumerations>
#;
(define (fn-for-letter-grade lg)
  (cond [(string=? lg "A") (...)]
        [(string=? lg "B") (...)]
        [(string=? lg "C") (...)]))

;; Template rules used:
;;  one-of: 3 cases
;;  atomic distinct: "A"
;;  atomic distinct: "B"
;;  atomic distinct: "C"


;; Functions:

;; LetterGrade -> LetterGrade                                 ; [Type Signature]
;; produces the next highest letter grade (no change for A)   ; [Purpose]

(check-expect (bump-up "A") "A")
(check-expect (bump-up "B") "A")
(check-expect (bump-up "C") "B")

;;(define (bump-up lg) "A")                                   ; [Stub]
;;<use template from LetterGrade>                             ; [Template]

(define (bump-up lg)
  (cond [(string=? lg "A") "A"]
        [(string=? lg "B") "A"]
        [(string=? lg "C") "B"]))
``````

 An important point that was mentioned in the course was that we should check that our function templates are error free and well formed. That is because, when we copy the template, we'd copy the errors as well, and if left undetected, they would cause trouble later, not to mention wastage of time.



#### HtDF with Itemizations

If there are itemizations, it's important to write atleast one test for each case in the itemization. If there are intervals in the itemization, then we should write tests for their boundaries as well as middle values [at least one middle value]. For example : 

``````racket

(require 2htdp/image)

; 
; PROBLEM:
; 
; You are asked to contribute to the design for a very simple New Year's
; Eve countdown display. You already have the data definition given below. 
; You need to design a function that consumes Countdown and produces an
; image showing the current status of the countdown. 
; 


;; Data definitions:

;; Countdown is one of:
;;  - false
;;  - Natural[1, 10]
;;  - "complete"
;; interp.
;;    false           means countdown has not yet started
;;    Natural[1, 10]  means countdown is running and how many seconds left
;;    "complete"      means countdown is over
(define CD1 false)
(define CD2 10)          ;just started running
(define CD3  1)          ;almost over
(define CD4 "complete")
#;
(define (fn-for-countdown c)
  (cond [(false? c) (...)]
        [(and (number? c) (<= 1 c) (<= c 10)) (... c)]
        [else (...)]))

;; Template rules used:
;;  - one of: 3 cases
;;  - atomic distinct: false
;;  - atomic non-distinct: Natural[1, 10]
;;  - atomic distinct: "complete"

;; Functions:
;; Helpful Constants
(define BLANK (square 0 "solid" "white"))

;; Countdown -> Image                                      ; [Type Signature]
;; produce an image of current state of countdown          ; [Purpose]

(check-expect (countdown-image false)                                  BLANK)  
(check-expect (countdown-image 5)       (text (number->string 5) 24 "black"))
(check-expect (countdown-image "complete") (text "HAPPY NEW YEAR!" 24 "red"))

;; (define (countdown-image c) BLANK)                      ; [Stub]
;; <use template from Countdown>                           ; [Template]

(define (countdown-image c)
  (cond [(false? c)                      BLANK]
        [(and (number? c) (<= 1 c 10)) 
          (text (number->string c) 24 "black")]
        [else
          (text  "HAPPY NEW YEAR!" 24   "red")]))
``````

At this point it is important to note that writing tests for our function also helps us determine the behaviour of the function beforehand. This means that writing the function becomes much easier.





> **Debugging Rules of Thumb in Racket**
>
> * Look at the error message.
> * Look at the highlighted code.
> * Debug.



### Structure is Beautiful !

So till now, what I've gathered from the course and what has changed my way of thinking about a problem is to focus on the `structure` of the information of the problem domain first. 

As said in the course, once we identify the structure of the information, we can identify the structure of the data required to represent it. That, in turn, gives us an idea about the template which the functions acting upon this data should follow. Ultimately, the structure of the templates then allows us to design tests and functions to act upon the data.

​**Information**        :arrow_right:          **Data**            :arrow_right:                  **Template**                     :arrow_right:       **Tests**        :arrow_right:            **Function** 

We can leverage the fact that the strucure of functions ultimately depends on the structure of the data.

**The `structure` flows through and it's beautiful !**



## Day 6

### How to Design Worlds Recipe

Finally, I get to do some fun stuff in the course! Today we'll learn about how to design worlds using racket, and hopefully make some fun games and stuff :grinning:

#### The Big Bang Mechanism

The classical principle behind an interactive program is the the state of the program must change on a predetermined set of inputs by the user. (Exactly like in a Deterministic Finite Automaton).

* Changing State.
* Changing Display.
* Keyboard and (or) mouse, affects prob=gram behaviour.

So, racket comes with a (big-bang) expression, which takes three arguments :

* Initial State of the World.
* Expression to generate the Next State.
* Expression to Render/ Reflect the changes.