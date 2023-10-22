const firebaseConfig = {
  apiKey: "AIzaSyDW-O0jpYdQArErqsqccD9vQv_2Ze7xAeo",
  authDomain: "dreamcatcher-82c90.firebaseapp.com",
  databaseURL: "https://dreamcatcher-82c90-default-rtdb.firebaseio.com",
  projectId: "dreamcatcher-82c90",
  storageBucket: "dreamcatcher-82c90.appspot.com",
  messagingSenderId: "94047942906",
  appId: "1:94047942906:web:b00c6d06176ff4fc64f143",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
const newsletter_database = firebase.database().ref("newsletter");

document
  .getElementById("newsletter-form")
  .addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  var first_name = getElementVal("first-name");
  var last_name = getElementVal("last-name");
  var email = getElementVal("email");
  var whatsapp = getElementVal("whatsapp");

  saveForm(first_name, last_name, email, whatsapp);

  document.querySelector(".alert").style.display = "block";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("newsletter-form").reset();
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

const saveForm = (first_name, last_name, email, whatsapp) => {
  var newNewsletterForm = newsletter_database.push();
  newNewsletterForm.set({
    first_name: first_name,
    last_name: last_name,
    email: email,
    whatsapp: whatsapp
  });
};
