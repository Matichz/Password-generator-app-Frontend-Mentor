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
const difficultyBar = document.querySelectorAll('.difficulty-bar');

const generatePassword = () => {
    form.addEventListener('submit', event => {
        event.preventDefault()

        const lengthCharacter = form.range.value;

        const checkboxs = {
            characterUpper: {
                isChecked: form.upperLetters.checked, 
                characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            },
            characterLower: {
                isChecked: form.lowerLetters.checked, 
                characters: 'abcdefghijklmnopqrstuvwxyz'
            },
            numbers: {
                isChecked: form.numbers.checked, 
                characters: '0123456789'
            },
            symbols: {
                isChecked: form.symbols.checked, 
                characters: '!@#$%^&*()_+-=[]{}|;:,.<>?/`~'
            },
        }

        const charactersPassword = [];
        let characters = ''
        
        Object.values(checkboxs).forEach((checkbox) => {
            if(checkbox.isChecked){
                characters += checkbox.characters
                let indice = Math.floor(Math.random() * checkbox.characters.length)
                charactersPassword.push(checkbox.characters[indice])
            }
        })

        const lengthPassword = lengthCharacter - charactersPassword.length
        for(let i = 0; i < lengthPassword; i++) {
            let indice = Math.floor(Math.random() * characters.length)
            charactersPassword.push(characters[indice])
        }
    
        const randomPassword = charactersPassword.sort(() => Math.random() - 0.5).join('')
        password.value = randomPassword;
    }) 
}

generatePassword()