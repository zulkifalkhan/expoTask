// hooks/useAudioControls.ts
import { useState, useEffect, useRef } from 'react';
import { Audio, AVPlaybackStatus } from 'expo-av';

export const useAudioControls = (audioSample: any) => {
  const soundRef = useRef<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0); // in ms
  const [duration, setDuration] = useState(0); // dynamic duration in ms
  const [isMuted, setIsMuted] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  const loadSound = async () => {
    const { sound, status } = await Audio.Sound.createAsync(
      audioSample,
      { shouldPlay: false, isLooping, isMuted },
      updateStatus
    );
    soundRef.current = sound;

    if (status.isLoaded) {
      setDuration(status.durationMillis ?? 0);
    }
  };

  const updateStatus = (status: AVPlaybackStatus) => {
    if (!status.isLoaded) return;

    setIsPlaying(status.isPlaying ?? false);
    setPosition(status.positionMillis ?? 0);
    setDuration(status.durationMillis ?? duration);

    if (status.positionMillis >= (status.durationMillis ?? duration)) {
      if (isLooping) {
        soundRef.current?.setPositionAsync(0);
      } else {
        setIsPlaying(false);
        setPosition(status.durationMillis ?? duration);
      }
    }
  };

  const playPauseSound = async () => {
    if (!soundRef.current) return;
    const status = await soundRef.current.getStatusAsync();
    if (status.isLoaded) {
      if (status.isPlaying) {
        await soundRef.current.pauseAsync();
      } else {
        if (status.positionMillis >= duration) {
          await soundRef.current.setPositionAsync(0); // restart from beginning
        }
        await soundRef.current.playAsync();
      }
    }
  };

  const toggleMute = async () => {
    if (!soundRef.current) return;
    await soundRef.current.setIsMutedAsync(!isMuted);
    setIsMuted(prev => !prev);
  };

  const toggleLoop = async () => {
    if (!soundRef.current) return;
    await soundRef.current.setIsLoopingAsync(!isLooping);
    setIsLooping(prev => !prev);
  };

  const forward10Seconds = async () => {
    if (!soundRef.current) return;
    const status = await soundRef.current.getStatusAsync();
    if (status.isLoaded) {
      let newPosition = status.positionMillis + 10000;
      if (newPosition >= (status.durationMillis ?? duration)) {
        newPosition = status.durationMillis ?? duration;
        setIsPlaying(false);
      }
      await soundRef.current.setPositionAsync(newPosition);
    }
  };

  const backward10Seconds = async () => {
    if (!soundRef.current) return;
    const status = await soundRef.current.getStatusAsync();
    if (status.isLoaded) {
      let newPosition = status.positionMillis - 10000;
      if (newPosition < 0) newPosition = 0;
      await soundRef.current.setPositionAsync(newPosition);
    }
  };

  const formatTime = (millis: number) => {
    const totalSeconds = Math.floor((duration - millis) / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    loadSound();
    return () => {
      soundRef.current?.unloadAsync();
    };
  }, []);

  return {
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
  };
};
