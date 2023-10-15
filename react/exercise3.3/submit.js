function getForm(form) {
    let name = form.elements["name"].value;
    let phone = form.elements["phone"].value;
    let email = form.elements["email"].value;
    let date = form.elements["birthday"].value;
    const gender = form.querySelector('input[name="gender"]:checked').value;
    let adress = form.elements["adress"].value;
    const degree = document.getElementById('degree').value;
    let sports = document.getElementById('sports');

    // let masters = form.elements["masters"].value;
    // let bachelor = form.elements["bachelor"].value;


    alert(name + "\n" + phone + "\n" + email + "\n" + date + "\n" + gender + "\n" + adress + "\n" + degree + "\n" + sports.value);

    // alert(name + phone + email + date + birthday + male + female  + masters + bachelor);
}
