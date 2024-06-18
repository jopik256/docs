import React, { FC } from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage:FC = () => {
	const error = useRouteError();

	return (
		<>
			<h1 className="text-center">Упс!</h1>
			<h2 className="text-center">Ошибка</h2>
		</>
	);
};

export default ErrorPage;