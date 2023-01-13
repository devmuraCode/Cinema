import { FC } from 'react'
import { IHome } from './Home.interface'
import { toastr } from 'react-redux-toastr'

import Layout from '@/components/layout/Layout'
import Meta from 'utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser"
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
		</Meta>
	)
}

export default Home
