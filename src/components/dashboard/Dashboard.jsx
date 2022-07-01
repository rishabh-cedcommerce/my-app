import React from 'react';
import { DisplayText } from '@shopify/polaris';

function Dashboard({name="Anonymous"}) {
    return ( 
        // <div className="container_dashboard"> Hello {name} This is your Dashboard  </div>
        <DisplayText size="small"> Hello {name} This is your Dashboard  </DisplayText>
     );
}

export default Dashboard;