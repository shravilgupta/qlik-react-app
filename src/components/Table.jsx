import React from 'react'

export default function Table(props){
	
	return (
		
			<table>
				<thead>
					<tr>#</tr>
					<tr>App Name</tr>
				</thead>
				<tbody>
				{
					props.apps.map(row=> (
					<tr> 
					 <td>row.qFileSize</td>
					 </tr>
					))
				}
				</tbody>
			</table>
			
	)
}