function reproducir(idAudio) {
    fetch('/reproducir', {
        method: 'POST',
        body: JSON.stringify({ id: idAudio }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

function pausar(idAudio) {
    fetch('/pausar', {
        method: 'POST',
        body: JSON.stringify({ id: idAudio }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}