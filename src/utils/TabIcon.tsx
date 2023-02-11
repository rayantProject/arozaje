import * as React from 'react';

import { MaterialIcons } from '@expo/vector-icons';

class TabBarIcon extends React.Component<{
    name: React.ComponentProps<typeof MaterialIcons>['name'];
    color: string;
}> {
    render() {
        return (
            <MaterialIcons size={30} style={{ marginBottom: -3 }} {...this.props} />
        );
    }
}


export default TabBarIcon;