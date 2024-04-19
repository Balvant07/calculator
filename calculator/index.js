const keys = document.querySelectorAll('.key');
        const inputDisplay = document.getElementById('input');
        const outputDisplay = document.getElementById('output');


        keys.forEach(key => {
            key.addEventListener('click', () => {
                const keyValue = key.dataset.key;


                if (keyValue === 'clear') {
                    inputDisplay.value = '';
                    outputDisplay.value = '';
                } else if (keyValue === '=') {
                    try {
                        outputDisplay.value = eval(inputDisplay.value);
                    } catch (error) {
                        outputDisplay.value = 'Error';
                    }
                } else {
                    inputDisplay.value += keyValue;
                }
            });
        });