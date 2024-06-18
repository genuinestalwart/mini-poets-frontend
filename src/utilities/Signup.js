export const fields = [
	{
		autoComplete: "name",
		id: "name",
		label: "Username",
		validation: { maxLength: 32, minLength: 3 },
	},
	{
		autoComplete: "email",
		id: "email",
		label: "Email Address",
		type: "email",
		validation: {
			pattern:
				/^([a-z0-9]+(\.[^\WA-Z_]+)*){6,30}@((([a-z0-9-](?!--)){3,}\.)+[a-z]{2,})$/,
		},
	},
	{
		autoComplete: "new-password",
		id: "password",
		label: "Password",
		type: "password",
		validation: { minLength: 8 },
	},
];
