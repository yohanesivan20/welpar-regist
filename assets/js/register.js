const scriptURL = "https://script.google.com/macros/s/AKfycbyNiamkRXiu_afPbMpf2TwomD_gmz06SA7oWizjqH1_rYiY2jHneO84S8evbqXozQAmbg/exec";

$(document).ready(function() {
    //Submit Button
    document.getElementById("registrationForm").addEventListener("submit", function(e) {
        e.preventDefault();
        
        const formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            age: $('#age').val(),
            domicile: $('#domicile').val(),
            member: $('#member').val(),
            message: $('#message').val()
        };

        $.post(scriptURL, formData, function(response) {
            alert("Registrasi berhasil!");
            $("#registrationForm")[0].reset();
        }).fail(function() {
            alert("Terjadi kesalahan, coba lagi.");
        });
    });
});