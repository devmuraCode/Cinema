import { FC } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'


import { useAuth } from '@/hooks/useAuth'


import styles from './Auth.module.scss'
import AuthFields from './AuthFields'
import { useAuthRedirect } from './useAuthRedirect'
import { useActions } from '@/hooks/userActions'
import { IAuthInput } from './auth.interface'
import Meta from 'utils/meta/Meta'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit = (data: IAuthInput) => {
		if (type === 'login') {
			login(data)
		} else if (type === 'register') {
			register(data)
		}
		reset()
	}

	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />
					<AuthFields register={registerInput} formState={formState} />

					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}
export default Auth
