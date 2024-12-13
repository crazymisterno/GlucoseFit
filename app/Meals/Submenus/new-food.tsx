import { View, Text } from "react-native"

export default function NewFood(name: string, carbs: number, cal: number) {

}

class Food {
    name: string;
    carbs: number;
    cal: number;

    constructor(name: string, carbs: number, cal: number) {
        this.name = name;
        this.carbs = carbs;
        this.cal = cal;
    }

    asComponent() {
        return (
            <View>
                <Text>
                    {this.name}
                </Text>
                <Text>
                    {this.carbs}
                </Text>
                <Text>
                    {this.cal}
                </Text>
            </View>
        )
    }
}