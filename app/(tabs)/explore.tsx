import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.contentContainer}>
        <ThemedText style={styles.greeting}>
          Hello and welcome! 😊
        </ThemedText>
        <ThemedText style={styles.summary}>
          Summary of what has been implemented:
        </ThemedText>
        <ThemedText style={styles.text}>{'\u2022'} The audio feature supports playing audio files seamlessly.</ThemedText>
        <ThemedText style={styles.text}>{'\u2022'} The audio sample provided was 4 minutes and 56 seconds long.</ThemedText>
        <ThemedText style={styles.text}>{'\u2022'} Audio playback functionality has been fully integrated and tested.</ThemedText>
        <ThemedText style={styles.text}>{'\u2022'} We used the `expo-av` library to handle audio playback.</ThemedText>
        <ThemedText style={styles.text}>{'\u2022'} Includes play, pause, and seek functionality.</ThemedText>
        <ThemedText style={styles.text}>{'\u2022'} UI updates based on audio playback state and progress.</ThemedText>
        <ThemedText style={styles.text}>{'\u2022'} Works consistently on both Android and iOS platforms.</ThemedText>
        <ThemedText style={styles.text}>{'\u2022'} Color theming and icon styles remain consistent with the rest of the app.</ThemedText>
        <ThemedText style={styles.thankYou}>
          Thank you for considering this opportunity! 🙏 Looking forward to collaborating! 🌟
        </ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353636', // Dark background
    padding: 10,
  },
  contentContainer: {
    alignItems: 'center', // Center-align all content
    justifyContent: 'center',
    flex: 1,
  },
  greeting: {
    fontSize: 25, // Larger font size for the summary text
    color: 'white', // White color for the summary
    marginBottom: 20,
    fontWeight: '500', // Slightly lighter weight for summary text
    textAlign: 'center',
  },
  summary: {
    fontSize: 25, // Larger font size for the summary text
    color: 'white', // White color for the summary
    marginBottom: 20,
    fontWeight: '500', // Slightly lighter weight for summary text
    textAlign: 'center',
  },
  text: {
    color: 'white', // White text color
    fontSize: 18, // Larger font size for body text
    marginBottom: 10,
    textAlign: 'center',
  },
  thankYou: {
    fontSize: 22, // Slightly larger font size for "Thank you"
    color: 'white', // White color for the "Thank you" text
    marginTop: 20,
    fontWeight: '500', // Slightly lighter weight for thank you text
    textAlign: 'center',
  },
});
