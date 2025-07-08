const scriptURL = "https://script.google.com/macros/s/AKfycbwxfuW3mxaw5ctAVSJrKpJsPJDZimh69I1kuHP9Ddo8nK_34CvKY-kLUVJTM-SgKBykxw/exec";

$(document).ready(function() {
    $('#domicile').on('change', function () {
        if ($(this).val() === 'other') {
            $('#other-domicile-container').show();
            $('#other-domicile').prop('required', true);
        } else {
            $('#other-domicile-container').hide();
            $('#other-domicile').prop('required', false);
        }
    });
    
    //Submit Button        
        document.getElementById("registrationForm").addEventListener("submit", function(e) {
            e.preventDefault();

            if ($('#domicile').val() === 'other' && !$('#other-domicile').val().trim()) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops!',
                    text: 'Silakan masukkan nama kota Anda.'
                });
                return; // 🚫 Stop submit jika belum isi kota
            }
            
            const selectedDomicile = $('#domicile').val() === 'other' ? $('#other-domicile').val() : $('#domicile').val();


            // Bersihkan dan format nomor telepon
            const rawPhone = $("#phone").val().trim();
            const cleanPhone = rawPhone.replace(/[^0-9]/g, ''); // Hanya angka
            const normalizedPhone = "'" + cleanPhone; // Tambahkan kutip depan agar Excel tidak ubah format

            // Validasi panjang nomor
            if (cleanPhone.length < 10 || cleanPhone.length > 13) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Nomor Tidak Valid!',
                    text: 'Silakan masukkan nomor telepon yang benar (10–13 digit angka).'
                });
                return;
            }

            const formData = {
                name: $("#name").val(),
                email: $("#email").val(),
                // phone: "'" + $("#phone").val(),
                phone: normalizedPhone,
                age: $('#age').val(),
                // domicile: $('#domicile').val(),
                domicile: selectedDomicile,
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