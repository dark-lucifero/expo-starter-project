import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

import { Home, Telescope  } from 'lucide-react-native';

export default function TabLayout() {
    
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ff6347',
                headerShown: false,
                tabBarStyle: Platform.select({
                    ios: {
                        position: 'absolute',
                    },
                    default: {},
                }),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => (<Home color={color} size={size} />) 
                }}
            />
            
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color, size }) => (<Telescope size={size} color={color} />)
                }}
            />
        </Tabs>
    );
}
