function authenticate(login, password) {
    if (login === 'login' && password === 'password') {
	return 'you are loged in'
    } else {
	return 'login is incorrect'
    }
}