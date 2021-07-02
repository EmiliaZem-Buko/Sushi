import React from "react";

export default function Reserved() {
  function send() {
    var popup = document.getElementById("myPopup");
    popup.classList.remove("show");
    if(dontSendIf()) {
      popup.classList.add("show");
    }
  }

  function dontSendIf() {
    var warning = document.getElementById("warning");
    const input = document.querySelectorAll(input);
    warning.classList.remove("on");

    var x = document.forms["myForm"]["name"].value;
    if (x == "" || x == null) {
      warning.classList.add("on");

      return false;
    }
    return true;


    // input.addEventListener('input', evt => {
    //   const value = input.value

    //   if (!value) {
    //     input.dataset.state = ''
    //     return
    //   }

    //   const trimmed = value.trim()

    //   if (trimmed) {
    //     input.dataset.state = 'valid'
    //   } else {
    //     input.dataset.state = 'invalid'
    //   }
    // })
  }

  return (
    <section data-index="3" className="container" id="reserve" data-source="reserve">
      <h1 className="title title-reserved">Rezerwcja</h1>
      <div className="reserved-container">
        <h2>Pod nr tel 12345678</h2>
        <h3>lub</h3>
        <p>
          Wypełij poniższy formularz. Dostaniesz odpowiedź drogą mailową z
          potwierdzeniem rezerwacji stolika
        </p>
        <p id="warning" className="toggle off">
          {" "}
          Wypełnij wszystkie pola!{" "}
        </p>
        <form className="form" name="myForm" action="">
          <div className="form-1">
            <input name="name" type="text" placeholder="imię" required />
            {/* <span></span> */}
            <input
              name="email"
              type="email"
              placeholder="emial"
              name=""
              id=""
            />
            <input
              name="phone"
              type="tel"
              placeholder="nr. tel"
              name=""
              id=""
            />
            <input type="date" placeholder="data" name="" id="" />
            <input type="time" name="" id="" />
            <input
              type="number"
              placeholder="l. osób"
              name=""
              id=""
              min="1"
              max="8"
            />
          </div>
          <div className="form-2">
            <textarea
              placeholder="wiadomość dodatkowa"
              name=""
              id=""
              cols="20"
              rows="12"
            ></textarea>

            {/* <button className="send">wyślij</button> */}
            <div className="popup" 
            onClick={send}>
              Wyślij
              <span className="popuptext" id="myPopup">
                Wysłano
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
