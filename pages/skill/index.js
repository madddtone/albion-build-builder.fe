import Dashboard from '@/components/layout/dashboard';
import React from 'react';

function Skill() {
  return (
    <div className='bg-gray-200 mx-5 my-5 px-5 py-5 rounded-lg border'>
      {/* Your Skill component content */}
      {/* <p className='text-gray-600'>table skill here</p>			 */}

			<div className="relative overflow-x-auto rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="px-6 py-3">
									Skill
								</th>
								<th scope="col" className="px-6 py-3">
									Skill Name
								</th>
								<th scope="col" className="px-6 py-3">
									Description
								</th>
								<th scope="col" className="px-6 py-3">
									Type
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									Firewall
								</th>
								<td className="px-6 py-4">
									Firewall
								</td>
								<td className="px-6 py-4">
									Create wall of fire
								</td>
								<td className="px-6 py-4">
									CC
								</td>
							</tr>
							<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									Firewall
								</th>
								<td className="px-6 py-4">
									Firewall
								</td>
								<td className="px-6 py-4">
									Create wall of fire
								</td>
								<td className="px-6 py-4">
									CC
								</td>
							</tr>
							<tr className="bg-white dark:bg-gray-800">
								<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
									Firewall
								</th>
								<td className="px-6 py-4">
									Firewall
								</td>
								<td className="px-6 py-4">
									Create wall of fire
								</td>
								<td className="px-6 py-4">
									CC
								</td>
							</tr>
						</tbody>
				</table>
			</div>

    </div>
  );
}

Skill.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>;
};

export default Skill;
