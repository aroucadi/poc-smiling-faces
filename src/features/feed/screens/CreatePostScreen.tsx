
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const { width } = Dimensions.get('window');

export const CreatePostScreen = () => {
  const [beforePhoto, setBeforePhoto] = useState<string | null>(null);
  const [afterPhoto, setAfterPhoto] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [procedure, setProcedure] = useState('');
  const [visibility, setVisibility] = useState('Public');

  const isPostButtonEnabled = beforePhoto && afterPhoto && caption && procedure;

  const ImagePicker = ({ image, onImagePicked, label }: { image: string | null, onImagePicked: (uri: string) => void, label: string}) => (
    <TouchableOpacity style={styles.imagePicker} onPress={() => onImagePicked('https://via.placeholder.com/150')}>
      {image ? (
        <Image source={{ uri: image }} style={styles.imagePreview} />
      ) : (
        <View style={styles.imagePickerIconContainer}>
          <Text style={styles.imagePickerLabel}>{label}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity>
                <Text style={styles.headerButton}>Close</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Create Post</Text>
            <TouchableOpacity disabled={!isPostButtonEnabled}>
                <Text style={[styles.headerButton, isPostButtonEnabled ? styles.publishEnabled : styles.publishDisabled]}>Publish</Text>
            </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
            <View style={styles.imageGrid}>
                <ImagePicker image={beforePhoto} onImagePicked={setBeforePhoto} label="Add Before Photo" />
                <ImagePicker image={afterPhoto} onImagePicked={setAfterPhoto} label="Add After Photo" />
            </View>

            <View style={styles.captionSection}>
                <Text style={styles.sectionTitle}>Caption</Text>
                <TextInput
                    style={styles.captionInput}
                    placeholder="Describe the case, materials used, patient outcome..."
                    placeholderTextColor="#9cb4ba"
                    multiline
                    value={caption}
                    onChangeText={setCaption}
                />
                <TouchableOpacity style={styles.enhanceButton}>
                    <Text style={styles.enhanceButtonText}>Enhance Caption with AI</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.procedureSection}>
                <Text style={styles.sectionTitle}>Procedure Tag</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={procedure}
                        onValueChange={(itemValue) => setProcedure(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select a procedure" value="" />
                        <Picker.Item label="Veneers" value="veneers" />
                        <Picker.Item label="Implants" value="implants" />
                        <Picker.Item label="Whitening" value="whitening" />
                        <Picker.Item label="Crowns" value="crowns" />
                        <Picker.Item label="Orthodontics" value="orthodontics" />
                    </Picker>
                </View>
            </View>

            <View style={styles.visibilitySection}>
                <Text style={styles.sectionTitle}>Visibility</Text>
                <View style={styles.visibilityToggle}>
                    <TouchableOpacity 
                        style={[styles.toggleButton, visibility === 'Public' && styles.activeToggleButton]}
                        onPress={() => setVisibility('Public')}
                    >
                        <Text style={[styles.toggleButtonText, visibility === 'Public' && styles.activeToggleButtonText]}>Public</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.toggleButton, visibility === 'Followers Only' && styles.activeToggleButton]}
                        onPress={() => setVisibility('Followers Only')}
                    >
                        <Text style={[styles.toggleButtonText, visibility === 'Followers Only' && styles.activeToggleButtonText]}>Followers Only</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121d20',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#1a2c30',
  },
  headerButton: {
    color: '#3ecaea',
    fontSize: 16,
  },
  publishEnabled: {
      color: '#3ecaea',
      fontWeight: 'bold'
  },
  publishDisabled: {
      color: '#9cb4ba',
      fontWeight: 'normal'
  },
  headerTitle: {
    color: '#E2E8F0',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  imageGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  imagePicker: {
    width: width / 2 - 24,
    height: width / 2 - 24,
    backgroundColor: '#1a2c30',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePickerIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePickerLabel: {
    color: '#9cb4ba',
    marginTop: 8,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  captionSection: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  sectionTitle: {
    color: '#E2E8F0',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  captionInput: {
    backgroundColor: '#1a2c30',
    color: '#E2E8F0',
    borderRadius: 12,
    padding: 12,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  enhanceButton: {
    backgroundColor: '#3ecaea20',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  enhanceButtonText: {
    color: '#3ecaea',
    fontWeight: 'bold',
  },
  procedureSection: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  pickerContainer: {
    backgroundColor: '#1a2c30',
    borderRadius: 12,
  },
  picker: {
    color: '#E2E8F0',
  },
  visibilitySection: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  visibilityToggle: {
    flexDirection: 'row',
    backgroundColor: '#1a2c30',
    borderRadius: 12,
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
  },
  toggleButtonText: {
    color: '#9cb4ba',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  activeToggleButton: {
    backgroundColor: '#3ecaea',
  },
  activeToggleButtonText: {
    color: '#121d20',
  },
});
