import { Button } from "@mui/material";

const StyledButton = ({
	color,
	children,
	disabled = false,
	fullWidth = false,
	endIcon,
	onClick = () => {},
	size,
	startIcon,
	sx,
	type,
}) => {
	return (
		<Button
			color={color || "accent"}
			disabled={disabled}
			endIcon={endIcon}
			fullWidth={fullWidth}
			onClick={onClick}
			size={size || "medium"}
			startIcon={startIcon}
			sx={{
				color: "primary.main",
				fontFamily: "inherit",
				fontWeight: 600,
				"&:enabled:hover": !color
					? { bgcolor: "secondary.main", color: "accent.main" }
					: {},
				"&.Mui-disabled": {
					cursor: "not-allowed",
					pointerEvents: "auto",
				},
				...sx,
			}}
			type={type || "button"}
			variant='contained'>
			{children}
		</Button>
	);
};

export default StyledButton;
