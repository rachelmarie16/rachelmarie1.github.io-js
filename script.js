function validateForm() {
    var name = document.forms["myform"]["name"].value;
    var email = document.forms["myform"]["email"].value;
    var phone = document.forms["myform"]["phone"].value;

    if (name == "")
      {
        alert("Please enter your name.");
          name.focus();
          return false;
      }

      if (email == "")
      {
          alert("Please enter a valid e-mail address.");
          email.focus();
          return false;
      }

      if (phone == "")
    {
        alert("Please enter your number.");
        phone.focus();
        return false;
    }


    if (email.indexOf("@", 0) < 0)
      {
          alert("Please enter a valid email.");
          email.focus();
          return false;
      }

      if (email.indexOf(".", 0) < 0)
      {
          alert("Please enter a valid email.");
          email.focus();
          return false;
      }
      alert("Information is Valid. Thank you for your submission.");
    }
