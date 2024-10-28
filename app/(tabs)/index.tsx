import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function Home() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText>Home screen</ThemedText>
            <Link href="/(tabs)/account" style={styles.link}>
                Open account
            </Link>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    link: {
        paddingTop: 20,
        color: "white",
        fontSize: 20,
    },
});

