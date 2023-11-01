'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { IntegrationInstructionsRounded } from '@mui/icons-material';
import Link from 'next/link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

const pages = [
	{
		label: 'dashboard',
		link: '/',
	},
	{
		label: 'registration',
		link: '/registeration',
	},
	{
		label: 'document',
		link: '/document',
	},
];

function Navbar() {
	const currentPath = usePathname();

	return (
		<header className="static bg-white shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.4)] h-16">
			<Container maxWidth="xl">
				<Toolbar>
					<IntegrationInstructionsRounded
						fontSize="large"
						className="text-zinc-900"
					/>
					<Box
						display="flex"
						gap="15px"
						ml="15px"
					>
						{pages.map((page) => (
							<Link
								key={page.label}
								href={page.link}
								className={classNames({
									'text-zinc-900': page.link === currentPath,
									'text-zinc-500': page.link !== currentPath,
									'hover:text-zinc-800 transition-colors': true,
								})}
							>
								{page.label}
							</Link>
						))}
					</Box>
				</Toolbar>
			</Container>
		</header>
	);
}
export default Navbar;
