import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Switch, StyleSheet, Dimensions, ImageBackground } from "react-native";
import ImagePicker from 'react-native-image-picker';
import Chat from "./Chat";


export default function CreateGroup({ onPublishGroup }) {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [groupImage, setGroupImage] = useState(null);
  const [isPublic, setIsPublic] = useState(true);
  const [recommendedAge, setRecommendedAge] = useState("");
  const [back, setBack] = useState(false);


  const handleCreateGroup = () => {
    if (!groupName || !groupDescription || !recommendedAge) {
      console.error("Group name and description with age are required!");
    } else {
      setBack(true);    
    };

    const newGroup = {
      name: groupName.toString(),
      description: groupDescription.toString(),
      image: groupImage,
      isPublic: isPublic,
      recommendedAge: recommendedAge,
    };
    
    onPublishGroup(newGroup);
  };

  const handleGoBack = () => { setBack(true); };

  return (
    <>
      {back ? (
        <Chat />
      ) : (
      <ImageBackground source={require('../../assets/BGImg05.jpg')} style={styles.imageContainer}>
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={handleGoBack} style={styles.goBackButton}>
            <Text style={styles.goBackButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Create Group</Text>

          <TextInput
            style={styles.input}
            placeholder="Group name"
            value={groupName}
            onChangeText={setGroupName}
          />

          <TextInput
            style={[styles.input, { height: 50 }]}
            placeholder="Group description"
            multiline
            value={groupDescription}
            onChangeText={setGroupDescription}
          />

          <View style={styles.imageUploadContainer}>
          {groupImage ? (
            <Image source={{ uri: groupImage }} style={styles.imageUpload} />
          ) : (
            <TouchableOpacity
              style={styles.imageUploadPlaceholder}
              onPress={() => {
                ImagePicker.launchImageLibrary({}, response => {
                  if (response.uri) {
                    setGroupImage(response.uri);
                  }
                });
              }}
            >
              <Text style={styles.imageUploadText}>Upload Group Image</Text>
            </TouchableOpacity>
          )}
          </View>

          <View style={styles.containerUpload}>
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>Public</Text>
              <Switch value={isPublic} onValueChange={setIsPublic} />
              <Text style={styles.switchLabel}>Private</Text>
            </View>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Recommended Age"
            value={recommendedAge}
            onChangeText={setRecommendedAge}
          />

          <TouchableOpacity style={styles.tagButton}>
            <Text style={styles.tagText}>Tag a friend! @</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create Group</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      )}
    </>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,    
    padding: 20,
    height: windowHeight *.6,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3f51b5',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    marginLeft: 70,
    height: 55,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  imagePickerButton: {
    backgroundColor: '#0066cc',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePickerButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  switch: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
  },
  recommendationContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  recommendationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 50,
  },
  recommendationText: {
    fontSize: 16,
    marginLeft: 50,
  },
  containerUpload: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: 200,
    marginLeft: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666'
  },
  goBackButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 16,
    alignItems: 'center',
    width: windowWidth,
    marginTop: -172,
  },
  goBackButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backContainer:{
    marginTop: 35,
  },
  imageContainer: {
    width: windowWidth,
    height: windowHeight * 1.07,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagButton: {
    alignItems: 'center',
  },
  tagText: {
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});