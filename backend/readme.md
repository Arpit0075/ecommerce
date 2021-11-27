This is an E-commerce website where users can check products , add it on their cart and then purchase them after logging into their account.
User can also see their previous purchases. This is MERRN Stack application.

Please feel free to try our payment gateway as it just for testing, no real transactions are happening.

sample user login:
teja@gmail.com
teja12

test card for transaction: 4111 1111 1111 1111

End points-
get , "https://ecommerce918.herokuapp.com/" - gives welcome message
post, "https://ecommerce918.herokuapp.com/users/register" -allows user to register
post, "https://ecommerce918.herokuapp.com/users/login" -allows user to login
get, "https://ecommerce918.herokuapp.com/products" -gives all products

We have protected routes as well which requires user authorization
get, "https://ecommerce918.herokuapp.com/purchases" -it will give the User his purchases
post, "https://ecommerce918.herokuapp.com/purchases" -it will allows us to post details about the purchase
get, "https://ecommerce918.herokuapp.com/order/:totalAmount" - it allows us to send payment details to frontend for making the purchase
