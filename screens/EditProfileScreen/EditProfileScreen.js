import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import user from '../../assets/user.json';
import {useForm, Controller} from 'react-hook-form';
import {launchImageLibrary} from 'react-native-image-picker';

const WEBSITE_REGEX =
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

const CustomInput = ({
  label,
  placeholder,
  control,
  name,
  multiline,
  rules = {},
}) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      console.log(error);
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={[
                styles.input,
                {borderColor: error ? '#c70024' : '#dedede'},
              ]}
              multiline={multiline}
            />
            {error && <Text style={{color: 'red'}}>{error.message}</Text>}
          </View>
        </View>
      );
    }}
  />
);

export default function EditProfileScreen() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio,
    },
  });

  const [selectedPhoto, setseletedPhoto] = useState('');

  const onSubmit = data => {
    console.log('submitted', data);
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, errorMessage, assets}) => {
        if (!didCancel && !errorCode) {
          setseletedPhoto(assets[0]);
        }
      },
    );
  };
  return (
    <View style={styles.page}>
      <Image
        source={{uri: selectedPhoto?.uri || user.image}}
        style={styles.avatar}
      />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change Profile Photo
      </Text>
      <CustomInput
        name="name"
        control={control}
        label="Name"
        placeholder="Name"
        rules={{required: 'Name is required'}}
      />
      <CustomInput
        name="username"
        control={control}
        label="Username"
        placeholder="Username"
        rules={{
          required: 'UserName is required',
          minLength: {value: 3, message: 'Username should have >3 characters'},
        }}
      />
      <CustomInput
        name="website"
        control={control}
        label="Website"
        placeholder="Website"
        rules={{
          required: 'Website is required',
          pattern: {value: WEBSITE_REGEX, message: 'URL not valid'},
        }}
      />
      <CustomInput
        name="bio"
        control={control}
        label="Bio"
        placeholder="Bio"
        rules={{
          required: 'Bio is required',
          maxLength: {value: 100, message: 'Should have <100 characters'},
        }}
        multiline
      />
      <Text
        style={{
          backgroundColor: '#ddd',
          padding: 10,
          borderRadius: 12,
          margin: 10,
        }}
        onPress={handleSubmit(onSubmit)}>
        Submit
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: '30%',
    borderRadius: 100,
    aspectRatio: 1,
  },
  textButton: {
    color: '#405DE6',
    fontWeight: '500',
    fontSize: 13,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },

  // CUSTOM INPUT STYLES
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 10,
    marginVertical: 12,
  },
  label: {
    width: 85,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
  },
});
