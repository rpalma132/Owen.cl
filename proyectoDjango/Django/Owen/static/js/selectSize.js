document.addEventListener('DOMContentLoaded', function() {
    const sizeSwatches = document.querySelectorAll('.SizeSwatch');
    const modalCloseButton = document.querySelector('.btn-close');
    
    // Agrega un evento de clic a cada talla
    sizeSwatches.forEach(function(swatch) {
        swatch.addEventListener('click', function() {
            // Elimina la clase 'selected' de todas las tallas
            sizeSwatches.forEach(function(swatch) {
                swatch.classList.remove('selected');
            });

            // Agrega la clase 'selected' a la talla seleccionada
            this.classList.add('selected');
        });
    });
    
    // Agrega un evento de clic al botón de cierre del modal
    modalCloseButton.addEventListener('click', function() {
        // Elimina la clase 'selected' de todas las tallas
        sizeSwatches.forEach(function(swatch) {
            swatch.classList.remove('selected');
        });
    });
});

//REGISTRO        
        // Obtén el enlace de registro
        var registerLink = document.getElementById('openModal');

        // Agrega un listener al hacer clic en el enlace de registro
        registerLink.addEventListener('click', function(event) {
            // Evita el comportamiento predeterminado del enlace
            event.preventDefault();
            // Muestra la modal de registro
            var registerModal = new bootstrap.Modal(document.getElementById('registerModal'));
            registerModal.show();
        });

        //CARRITO

        // Obtén el enlace del carrito
        var cartLink = document.getElementById('openCart');

        // Agrega un listener al hacer clic en el enlace del carrito
        cartLink.addEventListener('click', function(event) {
            // Evita el comportamiento predeterminado del enlace
            event.preventDefault();
            // Muestra el offcanvas del carrito
            var cartOffcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasCart'));
            cartOffcanvas.show();
        });


        //API REGIONES, COMUNAS
    
        function miFuncionCallbackRegiones(data) {
            let cad = '';
            for (let i = 0; i < data.length; i++) {
                const region = data[i];
                cad += `<option value="${region.codigo}">${region.nombre}</option>`;
            }
            document.getElementById("region").innerHTML = `<option value="">Seleccione una Región</option>` + cad;
        }

        const urlJSONPRegiones = 'https://apis.digital.gob.cl/dpa/regiones/?callback=miFuncionCallbackRegiones';
        const scriptRegiones = document.createElement('script');
        scriptRegiones.src = urlJSONPRegiones;
        document.body.appendChild(scriptRegiones);

        function obtenerComunas() {
            const regionSeleccionada = document.getElementById("region").value;
            if (regionSeleccionada !== "") {
                const urlJSONPComunas = `https://apis.digital.gob.cl/dpa/regiones/${regionSeleccionada}/comunas/?callback=miFuncionCallbackComunas`;
                const scriptComunas = document.createElement('script');
                scriptComunas.src = urlJSONPComunas;
                document.body.appendChild(scriptComunas);
            } else {
                limpiarComunas();
            }
        }

        function limpiarComunas() {
            document.getElementById("comuna").innerHTML = "<option value=''>Seleccione una Comuna</option>";
        }

        function miFuncionCallbackComunas(data) {
            let cad = '';
            for (let i = 0; i < data.length; i++) {
                const comuna = data[i];
                cad += `<option value="${comuna.codigo}">${comuna.nombre}</option>`;
            }
            document.getElementById("comuna").innerHTML = `<option value="">Seleccione una Comuna</option>` + cad;
        }

        //VALIDACIONES 
        //  CORREO 
        const correoInput = document.getElementById('validationCustomUsername');

        // Agrega un listener para el evento de cambio de valor
        correoInput.addEventListener('input', function() {
            // Obtiene el valor del input de correo
            const correo = correoInput.value.trim();

            // Expresión regular para validar el formato de correo
            const regexCorreo = /^[^\s@]+@(hotmail\.com|gmail\.com)$/;

            // Verifica si el correo coincide con el formato
            if (regexCorreo.test(correo)) {
                correoInput.classList.remove('is-invalid');
                correoInput.classList.add('is-valid');
            } else {
                correoInput.classList.remove('is-valid');
                correoInput.classList.add('is-invalid');
            }
        });
        document.addEventListener('DOMContentLoaded', function() {
            // Obtén el elemento del input de correo y el mensaje de ayuda
            const correoInput = document.getElementById('validationCustomUsername');
            const correoHelp = document.getElementById('correoHelp');
        
            // Agrega un listener para el evento click del input
            correoInput.addEventListener('click', function() {
                correoInput.placeholder = ''; // Vacía el placeholder al hacer clic
                correoHelp.style.display = 'none'; // Oculta el mensaje de ayuda
            });
        });
        
            // CONTRASEÑA 
        const passwordInput = document.getElementById('inputPassword6');

        // Agrega un listener para el evento de cambio de valor
        passwordInput.addEventListener('input', function() {
            // Obtiene el valor del input de contraseña
            const password = passwordInput.value.trim();
        
            // Verifica la longitud de la contraseña
            if (password.length >= 8 && password.length <= 20) {
                passwordInput.classList.remove('is-invalid');
                passwordInput.classList.add('is-valid');
            } else {
                passwordInput.classList.remove('is-valid');
                passwordInput.classList.add('is-invalid');
            }   
        });
        //CODIGO POSTAL 
        // Obtén el elemento del input de código postal y el mensaje de error
            const codigoPostalInput = document.getElementById('validationCustom05');
            const codigoPostalError = document.getElementById('codigoPostalError');

            // Agrega un listener para el evento input del input de código postal
            codigoPostalInput.addEventListener('input', function() {
                const codigoPostal = codigoPostalInput.value.trim();

                // Verifica la longitud del código postal
                if (codigoPostal.length === 7) {
                    codigoPostalInput.classList.remove('is-invalid');
                    codigoPostalInput.classList.add('is-valid');
                    codigoPostalError.textContent = ''; // Borra el mensaje de error si es válido
                } else {
                    codigoPostalInput.classList.remove('is-valid');
                    codigoPostalInput.classList.add('is-invalid');
                    codigoPostalError.textContent = 'El código postal debe tener 7 caracteres.'; // Muestra el mensaje de error
                }
            });
