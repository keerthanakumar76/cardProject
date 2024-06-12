const userDetails = localStorage.getItem("userInformation");
let userInfo = userDetails ? JSON.parse(userDetails) : null;

if (!userInfo || !isValidUserInfo(userInfo)) {
    storeUserInfo();
} else {
    displayUserInfo(userInfo);
}

function isValidUserInfo(userInfo) {
    return userInfo.firstName && userInfo.lastName && userInfo.country && userInfo.phoneNumber && userInfo.state && userInfo.city && userInfo.village;
}

function storeUserInfo() {
    let firstName, lastName, country, phoneNumber, state, city, village;

    do {
        firstName = prompt("Enter your first name:");
    } while (!firstName);

    do {
        lastName = prompt("Enter your last name:");
    } while (!lastName);

    do {
        country = prompt("Enter your country:");
    } while (!country);

    do {
        phoneNumber = prompt("Enter your phone number:");
    } while (!phoneNumber);

    do {
        state = prompt("Enter your state:");
    } while (!state);

    do {
        city = prompt("Enter your city:");
    } while (!city);

    do {
        village = prompt("Enter your village:");
    } while (!village);

    userInfo = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village,
    };

    displayUserInfo(userInfo);
}

function displayUserInfo(userInfo) {
    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
    document.getElementById("village").textContent = userInfo.village;
}
