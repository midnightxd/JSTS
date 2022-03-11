// Ajax

(function () {
  const ajax = obj => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(obj.method, obj.uri, true);
      xhr.send();

      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      })
    })
  }

  document.addEventListener('click', event => {
    const element = event.target;
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
      event.preventDefault();
      loadPage(element);
    }
  })

  async function loadPage(element) {
    try {
      const href = element.getAttribute('href');
      const objConfig = {
        method: 'GET',
        uri: href
      }
      const response = await ajax(objConfig);
      loadResult(response);
    } catch (e) {
      console.log('Page not found. :(');
    }
  }

  function loadResult(response) {
    const result = document.querySelector('.result');
    result.innerHTML = response;
  }
})();