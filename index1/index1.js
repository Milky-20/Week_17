const input = document.getElementById('userinput');
const button = document.getElementById('transform');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const middlename = document.getElementById('patronymic');

button.addEventListener ('click', function() {
    fio = input.value;
    const clearfio = fio.trim();
    const fioToLowerCase = clearfio.ToLowerCase();
    const newfio = fioToLowerCase.split(' ');

    const surname = newfio[0];
    const newSurname = surname.charAt(0).ToUpperCase() + surname.slice(1);
    lastname.value = newSurname;

    const userName = newFio[1];
	const newUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
	firstName.value = newUserName;

	const patronymic = newFio[2];
	const newPatronymic =
		patronymic.charAt(0).toUpperCase() + patronymic.slice(1);
	middleName.value = newPatronymic;
});