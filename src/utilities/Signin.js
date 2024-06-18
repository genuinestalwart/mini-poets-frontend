export const fields = [
	{
		autoComplete: "email",
		id: "email",
		helperText: "",
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
		helperText: "",
		label: "Password",
		type: "password",
		validation: { minLength: 8 },
	},
];
