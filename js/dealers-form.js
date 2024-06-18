const orderForm = document.querySelector('#orderForm');
const submitFormBtn = document.querySelector('#submitFormBtn');

orderForm.addEventListener('submit', function (e) {
   e.preventDefault();

   const formData = new FormData(orderForm);
   console.log(formData);
   console.log(formData.get('name'));
   console.log(formData.get('email'));
   console.log(formData.get('phone'));

   fetchData();
   async function fetchData() {
      let url = document.location.href;

      url = checkOnUrl(url);

      function checkOnUrl(url) {
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

      const response = await fetch(url + 'mail.php', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json;charset=utf-8' },
         body: JSON.stringify({
            form: {
               name: formData.get('name'),
               email: formData.get('email'),
               phone: formData.get('phone'),
            },
         }),
      });
      const result = await response.text();
      console.log(result);

      orderForm.reset();
   }
});
