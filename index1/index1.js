const input = document.getElementById('userinput');
const button = document.getElementById('transform');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const middleName = document.getElementById('patronymic');

button.addEventListener ('click', function() {
    fio = input.value;
    const clearfio = fio.trim();
    const fioToLowerCase = clearfio.ToLowerCase();
    const newFio = fioToLowerCase.split(' ');

    const surname = newFio[0];
    const newSurname = surname.charAt(0).ToUpperCase() + surname.slice(1);
    lastName.value = newSurname;

    const userName = newFio[1];
	const newUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
	firstName.value = newUserName;

	const patronymic = newFio[2];
	const newPatronymic =
		patronymic.charAt(0).toUpperCase() + patronymic.slice(1);
	middleName.value = newPatronymic;
});