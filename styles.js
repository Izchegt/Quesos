document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Aquí podrías enviar los datos a tu base de datos o procesarlos de alguna manera
    console.log('Email:', email);
    console.log('Contraseña:', password);
  
    // Limpiar el formulario después de enviar
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  });
  