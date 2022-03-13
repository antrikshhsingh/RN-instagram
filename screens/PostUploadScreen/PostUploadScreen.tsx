import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {Camera} from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FlashMode} from 'expo-camera/build/Camera.types';
import {CameraRecordingOptions, CameraPictureOptions} from 'expo-camera';
const PostUploadScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setcameraType] = useState(Camera.Constants.Type.back);
  const [flash, setflash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isRecording, setisRecording] = useState(false);

  const camera = useRef(null);

  const flashModes = [
    FlashMode.off,
    FlashMode.on,
    FlashMode.auto,
    FlashMode.torch,
  ];

  const FlashModeToIcon = {
    [FlashMode.off]: 'flash-off',
    [FlashMode.on]: 'flash-on',
    [FlashMode.auto]: 'flash-auto',
    [FlashMode.torch]: 'highlight',
  };

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microPhonePermisson =
        await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(
        cameraPermission.status === 'granted' &&
          microPhonePermisson.status === 'granted',
      );
    };
    getPermission();
  }, []);

  if (hasPermission === null) {
    return <Text>Loading...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const flipCamera = () => {
    setcameraType(currentcameraType =>
      currentcameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    );
  };

  const flipFLash = () => {
    const currentIndex = flashModes.indexOf(flash);
    const nextIndex =
      currentIndex === flashModes.length - 1 ? 0 : currentIndex + 1;
    setflash(flashModes[nextIndex]);
  };

  const takePicture = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }

    const options: CameraPictureOptions = {
      quality: 0.7,
      base64: false,
      skipProcessing: true,
    };
    const result = await camera.current.takePictureAsync(options);
    console.log(result);
  };

  const startRecording = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }

    const options: CameraRecordingOptions = {
      quality: Camera.Constants.VideoQuality['640:480'],
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    };
    setisRecording(true);
    try {
      const result = await camera.current.recordAsync(options);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    setisRecording(false);
  };

  const stopRecording = () => {
    if (isRecording) {
      camera.current.stopRecording();
      setisRecording(false);
    }
    console.warn('stop-recording');
  };

  return (
    <View style={styles.page}>
      <Camera
        ref={camera}
        style={styles.camera}
        type={cameraType}
        ratio="4:3"
        flashMode={flash}
        onCameraReady={() => setIsCameraReady(true)}
      />
      <View style={[styles.buttonContainer, {top: 60}]}>
        <MaterialIcons name="close" size={30} color={'#fff'} />
        <Pressable onPress={flipFLash}>
          <MaterialIcons
            name={FlashModeToIcon[flash]}
            size={30}
            color={'#fff'}
          />
        </Pressable>
        <MaterialIcons name="settings" size={30} color={'#fff'} />
      </View>
      <View style={[styles.buttonContainer, {bottom: 35}]}>
        <MaterialIcons name="photo-library" size={30} color={'#fff'} />

        <Pressable
          onPress={takePicture}
          onLongPress={startRecording}
          onPressOut={stopRecording}>
          {isCameraReady && (
            <View
              style={[
                styles.circle,
                {backgroundColor: isRecording ? 'red' : 'white'},
              ]}
            />
          )}
        </Pressable>

        <Pressable onPress={flipCamera}>
          <MaterialIcons name="flip-camera-ios" size={30} color={'#fff'} />
        </Pressable>
      </View>
    </View>
  );
};

export default PostUploadScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
  },
  circle: {
    width: 75,
    height: 75,
    aspectRatio: 1,
    borderRadius: 75,
    backgroundColor: 'white',
  },
});
