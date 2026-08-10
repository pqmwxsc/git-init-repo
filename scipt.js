const phone = document.getElementById('phone')

phone.addEventListener('input', function() {
    phone.value = phone.value.replace(/\D/g, '')
})