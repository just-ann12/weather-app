'use client';

import { PropsWithChildren} from 'react';
import { Box, SxProps } from '@mui/material';
import { formStyles } from './form.style';

interface MainCreateFormProps {
	onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
	sx?: SxProps;
}

export const Form = ({ onSubmit, sx, children }: PropsWithChildren<MainCreateFormProps>) => (
	<Box component="form" onSubmit={onSubmit} sx={{ ...formStyles, ...sx }}>
		{children}
	</Box>
);
