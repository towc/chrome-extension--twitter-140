window.setInterval(() => {
  Array.from(document.querySelectorAll('.js-tweet-text')).forEach((el) => {
    if(!el.twitter140) {
      console.log(Date.now());
      el.twitter140 = {};
      
      const text = el.textContent;

      if(text.length > 140) {
        el.twitter140.fullHTML = el.innerHTML;
        el.textContent = text.substring(0, 140) + '…';

        const readMoreButton = document.createElement('a');
        readMoreButton.textContent = '↓ Read More';
        readMoreButton.href = '#';
        readMoreButton.addEventListener('click', (e) => {
          e.preventDefault();
          el.innerHTML = el.twitter140.fullHTML;
          el.parentElement.removeChild(readMoreButton);
        });

        el.parentElement.insertBefore(readMoreButton, el.nextSibling);
      }
    }
  })
}, 1000);
