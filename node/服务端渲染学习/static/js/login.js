var buttonLogin = document.querySelector('#login');
var buttonLoginPost = document.querySelector('#loginPost');

var username = document.querySelector('#username');
var password = document.querySelector('#password');

buttonLogin.onclick = () => {
  fetch(`/api/login?username=${username.value}&password=${password.value}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};

buttonLoginPost.onclick = () => {
  fetch(`/api/loginPost`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.ok) {
        // alert('登录成功');
        window.open('/home.html');
      } else {
        alert('登录失败');
      }
    });
};
