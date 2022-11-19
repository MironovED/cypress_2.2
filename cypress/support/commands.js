Cypress.Commands.add(
	'methodPost',
	(userId, username, firstName, lastName, email, password, phone) => {
		cy.request({
			method: 'POST',
			url: 'https://petstore.swagger.io/v2/user',
			body: {
				id: userId,
				username: username,
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
				phone: phone,
				userStatus: 0,
			},
		}).then(({ body, status }) => {
			expect(body.message).to.eq(`${userId}`);
			expect(status).to.eq(200);
		});
	}
);

Cypress.Commands.add(
	'methodPut',
	(userId, username, firstName, lastName, email, password, phone) => {
		cy.request({
			method: 'PUT',
			url: `https://petstore.swagger.io/v2/user/${username}`,
			body: {
				id: userId,
				username: username,
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password,
				phone: phone,
				userStatus: 0,
			},
		}).then(({ status }) => {
			expect(status).to.eq(200);
		});
	}
);

Cypress.Commands.add('methodGet', (userName) => {
	cy.request({
		method: 'GET',
		url: `https://petstore.swagger.io/v2/user/${userName}`,
	}).then(({ status }) => {
		// expect(body.id).to.eq(userId);
		expect(status).to.eq(200);
	});
});

Cypress.Commands.add('methodDelete', (userName) => {
	cy.request({
		method: 'DELETE',
		url: `https://petstore.swagger.io/v2/user/${userName}`,
	}).then(({ status }) => {
		expect(status).to.eq(200);
	});
	cy.request({
		method: 'GET',
		url: `https://petstore.swagger.io/v2/user/${userName}`,
		failOnStatusCode: false,
	}).then(({ status }) => {
		expect(status).to.eq(404);
	});
});
