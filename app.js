//Showing Restaurant Form

function restaurantSignUpForm() {
    div = document.getElementById('main')
    div.innerHTML = `
    <div id="form" class="form">
        <h1>Sign Up (Restaurant)</h1>
        <br><br>
        <div class="mb-3">
            <label class="form-label">Restaurant Name</label>
            <input type="text" class="form-control" id="restaurant" placeholder="">
        </div>
        <br>
        <div class="mb-3">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-control" id="email" placeholder="">
        </div>
        <br>
        <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="">
        </div>
        <br>
        <div class="mb-3">
            <label class="form-label">Country</label>
            <input type="text" class="form-control" id="country" placeholder="">
        </div>
        <br>
        <div class="mb-3">
            <label class="form-label">City</label>
            <input type="text" class="form-control" id="city" placeholder="">
        </div>
        <br>
        <button type="button" class="btn-signup" onclick="restaurantSignUp()">Sign Up</button>
        <br>
        Already have account?
        <button id="changeBtn" onclick="restaurantSignInForm()">Login</button>
    </div>
    `
}

function restaurantSignUp() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    restaurant = document.getElementById('restaurant').value
    country = document.getElementById('country').value
    city = document.getElementById('city').value

    firebase.auth().createUserWithEmailAndPassword(email, password)

        .then((userCredential) => {
            var user = userCredential.user;
            uid = user.uid
            restaurantObj = {
                'email': email,
                'restaurant': restaurant,
                'country': country,
                'city': city
            }

            firebase.database().ref('Restaurants').child(user.uid).set(restaurantObj)
            restaurantSignInForm()
        })
        .catch((error) => {
            var errorMessage = error.message;
            alert(errorMessage)
        });
}

function restaurantSignInForm() {
    div = document.getElementById('main')
    div.innerHTML = `
    <div id="form" class="form">
        <h1>Sign In(Restaurant)</h1>
        <br><br>
        <br>
        <div class="mb-3">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter Your Email Adress">
        </div>
        <br>
        <div class="mb-3">
            <label class="form-label">Enter Your Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter Your Password">
        </div>
        <br>
        <button type="button" class="btn-signup" onclick="restaurantSignIn()">Log In</button>
        <br><br>
        `
}

function restaurantSignIn() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            uid = user.uid
            firebase.database().ref('Restaurants').child(uid).on('value', (data) => {
                a = data.val()

                localStorage.setItem('email', a.email)
                localStorage.setItem('restaurant', a.restaurant)
                localStorage.setItem('city', a.city)
                localStorage.setItem('country', a.country)
                localStorage.setItem('uid', uid)
            })
            setTimeout(() => {
                window.location.href = './restaurant/restaurantHome.html'
            }, 3000)
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}

//Showing Customer Form

function userSignUpForm() {
    div = document.getElementById('main')
    div.innerHTML = `
    <div id="form" class="form">
        <h1>Sign Up(Customer)</h1>
        <br><br>
        <div class="mb-3">
            <label class="form-label">Customer Name</label>
            <input type="text" class="form-control" id="customer" placeholder="Enter Your Name">
        </div>
        <br>
        <div class="mb-3">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter Your Email Adress">
        </div>
        <br>
        <div class="mb-3">
            <label class="form-label">Enter Your Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter Your Password">
        </div>
        <br>
        <div class="mb-3">
            <label class="form-label">Enter Your Phone Number</label>
            <input type="text" class="form-control" id="phone" placeholder="Enter Your Phone No">
        </div>
        <br>
        <div class="mb-3">
            <label class="form-label">Enter Your Country</label>
            <input type="text" class="form-control" id="country" placeholder="Enter Your Country">
        </div>
        <br>
        <div class="mb-3">
            <label class="form-label">Enter Your City</label>
            <input type="text" class="form-control" id="city" placeholder="Enter Your City">
        </div>
        <br>
        <button type="button" class="btn-signup" onclick="customerSignUp()">Sign Up</button>
        <br><br>
        Already have account?
        <button id="changeBtn" onclick="customerSignInForm()">Login In</button>
    </div>
    `
}

function customerSignUp() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    customer = document.getElementById('customer').value
    country = document.getElementById('country').value
    city = document.getElementById('city').value
    phone = document.getElementById('phone').value

    firebase.auth().createUserWithEmailAndPassword(email, password)

        .then((userCredential) => {
            var user = userCredential.user;
            uid = user.uid
            customerObj = {
                'email': email,
                'customer': customer,
                'country': country,
                'city': city,
                'phone': phone
            }

            firebase.database().ref('Customers').child(user.uid).set(customerObj)
            customerSignInForm()
        })
        .catch((error) => {
            var errorMessage = error.message;
            alert(errorMessage)
        });
}


function customerSignInForm() {
    div = document.getElementById('main')
    div.innerHTML = `
    <div id="form" class="form">
        <h1>Sign In(Customer)</h1>
        <br><br>
        <br>
        <div class="mb-3">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter Your Email Adress">
        </div>
        <br>
        <div class="mb-3">
            <label class="form-label">Enter Your Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter Your Password">
        </div>
        <br>
        <button type="button" class="btn-signup" onclick="customerSignIn()">Login</button>
        <br><br>
        `
}

function customerSignIn() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            uid = user.uid

            firebase.database().ref('Customers').child(uid).on('value', (data) => {
                a = data.val()
                localStorage.setItem('email', a.email)
                localStorage.setItem('customer', a.customer)
                localStorage.setItem('city', a.city)
                localStorage.setItem('country', a.country)
                localStorage.setItem('phone', a.phone)
                localStorage.setItem('uid', uid)
            })
            setTimeout(() => {
                window.location.href = './customer/customerHome.html'
            }, 3000)
        })
        .catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
}
