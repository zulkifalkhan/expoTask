import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // HomeScreen Styles
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#222',
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },
  waveform: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    position: 'relative',
  },
  rowControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 30,
  },
  icon: {
    width: 36,
    height: 36,
    tintColor: 'white',
  },

  // AudioControls Component Styles
  audioControlsWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 30,
  },
  playWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#444',
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },

  // Timer Component Styles
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },

});
