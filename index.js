const btn_copy = document.getElementById('btn-copy');
const password = document.getElementById('password');

const copyPassword = () => {
    navigator.clipboard.writeText(password.value)
    .then(() => {
        console.log("Texto copiado al portapapeles");
    })
    .catch(err => {
        console.log('Error al copiar: ', err)
    })
}

btn_copy.addEventListener('click', copyPassword)

const number_length = document.querySelector('.number-length');
const inputRange = document.getElementById('input-range');

const handleCharacterLength = () => {
    inputRange.addEventListener('input', function(){
        const progress_bar = (this.value - this.min) / (this.max - this.min) * 100

        this.style.background = `linear-gradient(to right, #a4ffaf ${progress_bar}%, #17181f ${progress_bar}%)`;

        number_length.textContent = this.value

    })
}

handleCharacterLength()


const form = document.getElementById('form');

const generatePassword = () => {
    form.addEventListener('submit', event => {
        event.preventDefault()

        const lengthCharacter = form.range.value;

        const checkboxs = {
            characterUpper: [form.upperLetters.checked, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
            characterLower: [form.lowerLetters.checked, 'abcdefghijklmnopqrstuvwxyz'],
            numbers: [form.numbers.checked, '0123456789'],
            symbols: [form.symbols.checked, '!@#$%^&*()_+-=[]{}|;:,.<>?/`~']
        };

        let caracteresObligatorios = [];
        let poolCaracteres = '';

        // Construir el conjunto válido
        Object.values(checkboxs).forEach((checkbox) => {
            if (checkbox[0]) {
                poolCaracteres += checkbox[1];
                let indice = Math.floor(Math.random() * checkbox[1].length);
                caracteresObligatorios.push(checkbox[1][indice]); // obligatorio
            }
        });

        // Si no se selecciona nada, evitar error
        if (poolCaracteres === '') {
            password.value = '';
            return;
        }

        // Generar la contraseña
        const longitudRestante = lengthCharacter - caracteresObligatorios.length;
        for (let i = 0; i < longitudRestante; i++) {
            let indice = Math.floor(Math.random() * poolCaracteres.length);
            caracteresObligatorios.push(poolCaracteres[indice]);
        }

        // Paso 3: Mezclar (shuffle) todos los caracteres
        const resultado = caracteresObligatorios.sort(() => Math.random() - 0.5).join('');

        password.value = resultado;

    }) 
}

generatePassword()