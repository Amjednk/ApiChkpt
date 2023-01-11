function UserList ({myData}){

    return (
        <div> 
            <table>
                <div >
                    <tr>  
                        <th > Key </th>
                        <th> Name </th>
                        <th> Username </th>
                        <th> Email </th>
                    </tr>
                        
                </div>
                {myData.map( (el)=> (
                            
                <div >
                    <tr>
                        <td > {el.id} </td>
                        <td> {el.name} </td>
                        <td> {el.username} </td>
                        <td> {el.email} </td>
                    </tr>
                </div>
            ))}
            </table>  
        </div> 
    )

}

export default UserList;