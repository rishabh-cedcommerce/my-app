import React from 'react';
import { DisplayText, Button } from '@shopify/polaris';

function Dashboard({name="Anonymous"}) {

    function handleLogOut(){
        localStorage.removeItem("User");
    }

    return ( 
        <DisplayText size="small"> Hello {name} This is your Dashboard 
            <Button onClick={handleLogOut}>LogOut</Button>
        </DisplayText>
     );
}

export default Dashboard;