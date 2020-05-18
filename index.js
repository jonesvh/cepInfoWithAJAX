function getCep() {

    //console.log('entrou')

    let cep = document.getElementById('cep').value

    //console.log(cep)

    let url = 'http://viacep.com.br/ws/' + cep + '/json';

    //console.log(url)

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status = 200) {
                let result = document.getElementById('json')
                result.innerHTML = xhr.responseText
            }
        }
    }
    xhr.send()
}