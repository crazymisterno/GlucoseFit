import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ headerShown: false,
                title: "Overview"
             }}/>
             <Tabs.Screen name="settings" options={{title: "Settings"}}/>
        </Tabs>
    )
}