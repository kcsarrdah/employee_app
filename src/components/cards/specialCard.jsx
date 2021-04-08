import React from 'react'

const SpecialCard = () => {
    return (
        <div>
           <div class="flex flex-col my-4 py-4  justify-center max-w-xs shadow-md rounded-xl bg-yellow-600 text-gray-800">
	<img src="https://instagram.fdel37-1.fna.fbcdn.net/v/t51.2885-15/e35/75408721_456316941715144_8866104163882805441_n.jpg?tp=1&_nc_ht=instagram.fdel37-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=QBzpuciX3aUAX9b0fg-&edm=AP_V10EAAAAA&ccb=7-4&oh=29dd4941c14fa32f8cd5d025ea85d44d&oe=60955981&_nc_sid=4f375e" alt="Profile face" class="w-36 h-36 mx-auto rounded-full" />
	<div class="space-y-4 text-center divide-y divide-gray-300">
		<div class="my-2 space-y-1">
			<h2 class="text-xl font-semibold sm:text-2xl">Lunch With Ceo</h2>
			<p class="px-5 text-xs sm:text-base text-gray-600">Their treat of course</p>
		</div>
		<div class="flex justify-center pt-2 space-x-4 align-center">
			<a href="#" class="py-2 px-8 ml-auto text-gray-800">
				<p>claim</p>
			</a>
			
		</div>
	</div>
</div>
        </div>
    );
}

export default SpecialCard;