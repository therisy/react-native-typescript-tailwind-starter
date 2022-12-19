import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Home from "./src/pages/Home";
import Recents from "./src/pages/recents";
import Notifications from "./src/pages/notifications";
import {SafeAreaProvider} from "react-native-safe-area-context";

const App = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
        {key: 'recents', title: 'Recents', focusedIcon: 'history'},
        {key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: Home,
        recents: Recents,
        notifications: Notifications,
    });

    return (
        <SafeAreaProvider>
            <BottomNavigation
                navigationState={{index, routes}}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
        </SafeAreaProvider>
    );
};

export default App;
