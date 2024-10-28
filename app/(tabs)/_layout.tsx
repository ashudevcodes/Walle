import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'black', headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={30} name="male" color={color} />,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={30} name="paw" color={color} />,
                }}
            />
        </Tabs>
    );
}

