import { Text, View } from "@/components/Themed"
import { Pressable } from "react-native"
import { Link } from "expo-router"

export default function Gallery() {

    return(
        <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
            <Text style={{ fontSize: 24}}>Gallery</Text>
            <View style={{marginVertical: 16}}>
                <Link href="/albums" asChild>
                    <Pressable>
                        <Text>Go to Albums</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    )
}