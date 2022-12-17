import React from 'react';

export interface VideoCardProps {
	imageUrl: string;
	title: string;
	description?: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ imageUrl, title, description }) => {
	return (
		<div className="p-4 w-full md:w-4/5">
			<div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
				<img className="lg:h-96 md:h-48 w-full object-cover object-center" src={imageUrl} alt="blog"></img>
				<div className="p-3 flex flex-row justify-between">
					<div className="mr-4">
						<h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
						<p className="leading-relaxed mb-3">{description ? description : ""}</p>
					</div>
          <div className='flex flex-col p-1'>
            <button className="px-4 py-2 rounded-full bg-slate-500 text-white" title="subscribe" type="button">Subscribe</button>
          </div>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
