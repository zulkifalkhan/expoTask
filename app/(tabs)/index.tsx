import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAudioControls } from '@/hooks/useAudioControls';
import { audioData } from '@/constants/data';
import { styles } from '@/constants/styles';
import { Timer } from '@/components/timer/Timer';
import { AudioControls } from '@/components/audio/AudioControls';

export default function HomeScreen() {
  const {
    isPlaying,
    position,
    duration,
    isMuted,
    isLooping,
    playPauseSound,
    toggleMute,
    toggleLoop,
    forward10Seconds,
    backward10Seconds,
    formatTime,
  } = useAudioControls(audioData.audioSample);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{audioData.title}</Text>
        <View style={styles.subtitleContainer}>
          <Ionicons name="people" size={16} color="#888" />
          <Text style={styles.subtitle}>{audioData.subtitle}</Text>
        </View>
      </View>

      <Image source={require('@/assets/images/home/waves.png')} style={styles.waveform} resizeMode="contain" />

      <View style={styles.rowControls}>
        <TouchableOpacity onPress={backward10Seconds}>
          <Image source={require('@/assets/images/home/backward.png')} style={styles.icon} />
        </TouchableOpacity>

        <Timer position={position} formatTime={formatTime} />

        <TouchableOpacity onPress={forward10Seconds}>
          <Image source={require('@/assets/images/home/forward.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.audioControlsWrapper}>
        <AudioControls
          playPauseSound={playPauseSound}
          toggleLoop={toggleLoop}
          toggleMute={toggleMute}
          isPlaying={isPlaying}
          isLooping={isLooping}
          isMuted={isMuted}
        />
      </View>
    </View>
  );
}
