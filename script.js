function submitForm(){

    console.log("debug");
    debugger;


    const namn = document.forms["guestBook"]["namn"].value;
    const epost = document.forms["guestBook"]["epost"].value;
    const telefon =document.forms["guestBook"]["telefon"].value;
    const meddelande =document.forms["guestBook"]["meddelande"].value;

    console.log(namn);
    console.log(epost);
    console.log(telefon);
    console.log(meddelande);

    //date
    const date=Date.now();
    console.log(date);

    const today = new Date(date);
    console.log(today);

         //post
        var message = document.getElementById("message").innerHTML;

        message += `
    ${namn}, (${epost})
    <br>
    ${telefon}
    <br>
    ${meddelande}
    <br>
    ${today.toLocaleTimeString()}
    <hr>
    `; 
    
    document.getElementById("message").innerHTML = message;
    
 
    return false;

}