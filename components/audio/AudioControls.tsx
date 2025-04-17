// components/AudioControls.tsx
import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '@/constants/styles';

type AudioControlsProps = {
  playPauseSound: () => void;
  toggleLoop: () => void;
  toggleMute: () => void;
  isPlaying: boolean;
  isLooping: boolean;
  isMuted: boolean;
};

export const AudioControls: React.FC<AudioControlsProps> = ({
  playPauseSound,
  toggleLoop,
  toggleMute,
  isPlaying,
  isLooping,
  isMuted,
}) => (
  <View style={styles.mainControls}>
    <TouchableOpacity onPress={toggleLoop}>
      <Image
        source={require('@/assets/images/home/loop.png')}
        style={[styles.icon, isLooping && { tintColor: '#1DB954' }]}
      />
    </TouchableOpacity>

    <TouchableOpacity style={styles.playWrapper} onPress={playPauseSound}>
      <View style={styles.playButton}>
        <Ionicons name={isPlaying ? 'pause' : 'play'} size={36} color="white" />
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={toggleMute}>
      <Ionicons
        name={isMuted ? 'volume-mute' : 'volume-high'}
        size={36}
        color="white"
      />
    </TouchableOpacity>
  </View>
);
