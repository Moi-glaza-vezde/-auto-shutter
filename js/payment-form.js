const orderForm = document.querySelector('#orderForm');
orderForm.addEventListener('submit', function (e) {
   e.preventDefault();

   const formData = new FormData(orderForm);
   console.log(formData.get('name'));
   console.log(formData.get('phone'));
   console.log(formData.get('brand'));

   fetchData();
   async function fetchData() {
      let url = checkOnUr(document.location.href);

      function checkOnUr(url) {
         let urlArrayDot = url.split('.');
         if (urlArrayDot[urlArrayDot.length - 1] === 'html') {
            urlArrayDot.pop();

            let newUrl = urlArrayDot.join('.');

            let urlArraySlash = newUrl.split('/');

            urlArraySlash.pop();

            newUrl = urlArraySlash.join('/') + '/';
            return newUrl;
         }
         return url;
      }
      const response = await fetch(url + 'mail2.php', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json;charset=utf-8',
         },
         body: JSON.stringify({
            form: {
               name: formData.get('name'),
               phone: formData.get('phone'),
               brand: formData.get('brand'),
            },
         }),
      });
      const result = await response.text();
      console.log(result);
      orderForm.reset();

      if (result === 'SUCCESS') {
         console.log('work');
      } else {
         console.log('not work');
      }
   }
});
