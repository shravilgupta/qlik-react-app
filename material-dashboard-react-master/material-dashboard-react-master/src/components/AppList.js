import React from 'react';

class AppList extends React.Component {
 
    constructor(){
        super()
        this.state ={ apps :[]}
    }

componentDidMount(){
    this.getApps(this.props.engine)
}


getApps = (engine) => {
    engine.then(engine => {
        engine.getDocList().then(apps => {
            this.setState({apps : apps})
        })
    })
}
    render(){
        const appList = this.state.apps
		console.log(appList);
        return(
            <div>
                <table>
				<thead>
                <th>AppList</th>
				<th>Location</th>
				<th>App Size (in KB)</th>
				<th>Last Reload Time</th>
				</thead>
				<tbody>
				
                 {appList.map((appList,i) => <tr> <td key={i}> {appList.qDocName} </td> <td key={i}> {appList.qDocId} </td> <td key={i}> {(appList.qFileSize)/1024} </td> <td key={i}> {appList.qLastReloadTime} </td></tr>)} 
				 	
				 </tbody>
				</table>
				 
				 <h1> Embedding Qliksense Chart in Webpage </h1>
				<h3>Bar Chart</h3> <iframe src='http://localhost:4848/single/?appid=C%3A%5CUsers%5CSG%5CDocuments%5CQlik%5CSense%5CApps%5CMyFirstApp.qvf&obj=dd70440e-03b3-49a7-a4b3-9aced91d6525'></iframe>
				<h3>Line Chart</h3> <iframe src='http://localhost:4848/single/?appid=C%3A%5CUsers%5CSG%5CDocuments%5CQlik%5CSense%5CApps%5CPowerKPI%20presentaion.qvf&obj=08e9fb82-6d82-48a1-aabb-8aef5a81f1de'></iframe>
            </div>
			

        )
    }

}

export default AppList;