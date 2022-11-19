import user from '../fixtures/user.json';

describe('create user', () => {
	it('create', () => {
		cy.methodPost(
			user.id,
			user.username,
			user.firstName,
			user.lastName,
			user.emailFirst,
			user.password,
			user.phone1
		);
		cy.methodGet(user.username);
	});

	it('edit', () => {
		cy.methodPost(
			user.id,
			user.thirdUserName,
			user.firstName,
			user.lastName,
			user.emailFirst,
			user.password,
			user.phone1
		);
		cy.methodPut(
			user.id,
			user.thirdUserName,
			user.firstName,
			user.lastName,
			user.emailSecond,
			user.password,
			user.phone2
		);
		cy.methodGet(user.thirdUserName);
	});

	it('delete', () => {
		cy.methodPost(
			user.id,
			user.secondUserName,
			user.firstName,
			user.lastName,
			user.emailFirst,
			user.password,
			user.phone1
		);
		cy.methodDelete(user.secondUserName);
	});
});
