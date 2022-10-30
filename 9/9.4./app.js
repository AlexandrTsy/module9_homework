let imageEl = document.querySelector('.for-image')

function getImage() {
  let width = document.getElementById('inputWidth').value
  let height = document.getElementById('inputHeight').value
  if (width >= 100 && width <= 500 && height >= 100 && height <= 500) {
    console.log('верно')
    // let url = `https://source.unsplash.com/collection/${width}/${height}`;
    let url = `https://random.imagecdn.app/${height}/${width}`
    fetch(url)
      .then((response) => {
        
        alert('Статус запроса: ' + response.status)

       imageEl.innerHTML = `
       <img src="${response.url}" title="Картинка" alt="Изображание">
                `
      })

      .catch((error) => {
        alert('Произошла ошибка, статус: ' + error.status)
      })
  } else if (width <= 100 || width >= 500) {
    alert('Ширина картинки вне диапазона от 100 до 500')
  } else {
    alert('Высота картинки вне диапазона от 100 до 500')
  }
}

document.getElementById('btnGetImg').addEventListener('click', getImage)
