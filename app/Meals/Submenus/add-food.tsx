import { LinearGradient } from "expo-linear-gradient";
import { PixelRatio, View, Modal } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function AddFood(visible: boolean, updater: (e: boolean) => void) {
    return (
        <Modal
        visible={visible}
        >
            <SafeAreaProvider>
                <SafeAreaView>
                    <LinearGradient
                        colors={["#539fad", "#9ae4bf"]}
                        style={{flexDirection: 'column'}}
                    >
                        <View
                            style={{
                                height: PixelRatio.getPixelSizeForLayoutSize(10),
                                backgroundColor: 'transparent'
                            }}
                        >
                            
                        </View>
                    </LinearGradient>
                </SafeAreaView>
            </SafeAreaProvider>
        </Modal>
    )
}