function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-number").value;
    let subject = document.getElementById("input-subject").value;
    let massage = document.getElementById("input-massage").value;
  
    if (name == "") {
      return alert("What's your name?");
    } else if (email =="") {
      return alert("Email must be filled in!");
    } else if (phone =="") {
      return alert("Phone must be charged!");
    } else if (subject =="") {
      return alert("subject must be filled in!");
    } else if (massage =="") {
      return alert("Don't forget to fill in the message!");
    }
  
  
      let emailReceiver = "laolikristian1305@gmail.com";
    
      let a = document.createElement("a");
      a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo perkenalkan nama saya ${name},pesan saya ${massage}. jika ada masalah terlebih dahulu silahkan hubungi nomor ini ${phone}, TerimaKasih`;
      a.click();
    
      console.log(name);
      console.log(email);
      console.log(phone);
      console.log(subject);
      console.log(massage);
    }
    