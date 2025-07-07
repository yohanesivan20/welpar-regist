const scriptURL = "https://script.google.com/macros/s/AKfycbwxfuW3mxaw5ctAVSJrKpJsPJDZimh69I1kuHP9Ddo8nK_34CvKY-kLUVJTM-SgKBykxw/exec";

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
                media: $('#media').val(),
                camping: $('#camping').val(),
                message: $('#message').val()
            };

            const submitBtn = $("#form-submit");

            submitBtn.prop("disabled", true).val("Loading...");

            $.post(scriptURL, formData, function(response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil!',
                    text: 'Pendaftaran kamu telah berhasil!'
                }).then(() => {
                    window.scrollTo(0, 0);
                    location.reload(); 
                });
            }).fail(function() {
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal!',
                    text: 'Ada masalah saat melakukan pendaftaran!'
                });
            }).always(function() {
                submitBtn.prop("disabled", false).val("KIRIM PENDAFTARAN");
            });
        });
});