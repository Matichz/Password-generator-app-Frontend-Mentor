const number_length = document.querySelector('.number-length');
const inputRange = document.getElementById('input-range');
const input_adds = document.querySelectorAll('.input-add');
const password = document.getElementById('password')

const handleCharacterLength = (inputChecked) => {
    inputRange.addEventListener('input', function(){
        number_length.textContent = this.value
        
        const progress_bar = (this.value - this.min) / (this.max - this.min) * 100
        this.style.background = `linear-gradient(to right, #a4ffaf ${progress_bar}%, #17181f ${progress_bar}%)`;
    })
}

handleCharacterLength()