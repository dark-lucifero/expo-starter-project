import { View, Text, Image, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <View>
                
                <Text className="text-3xl text-blue-500" >Hello, World!</Text>
            </View>
        </SafeAreaView>
    );
}

