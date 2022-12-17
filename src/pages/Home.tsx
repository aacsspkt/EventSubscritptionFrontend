import { useSelector } from 'react-redux';

import VideoCard from '../components/VideoCard';
import {
  selectCurrentToken,
  selectCurrentUser,
} from '../features/auth/authSlice';

export default function Home() {
	const user = useSelector(selectCurrentUser);
	const token = useSelector(selectCurrentToken);

	return (
		<section className="text-gray-600 body-font">
			<div className="max-w-7xl px-5 py-14 mx-auto">
				<div className='my-2'>
					<p>{user ? `Welcome ${user}!` : "Welcome!"}</p>
				</div>
				<div className="flex flex-wrap -m-4">
					{[1, 2, 3].map((_, i) => {
						return (
							<VideoCard
								key={i}
								title="Swiming"
								imageUrl="https://dummyimage.com/720x600/ababab/ffffff&text=Stream"
								description="Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat."
							/>
						);
					})}
				</div>
			</div>
		</section>
	);
}
