
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const AiToolkitScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.headerButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>AI-Powered Toolkit</Text>
        <View style={{width: 40}}/>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.headline}>Your AI Assistant</Text>
        <Text style={styles.subheadline}>Enhance your content with powerful AI tools.</Text>

        <View style={styles.creditsCard}>
          <View style={styles.creditsHeader}>
            <Text style={styles.creditsTitle}>Monthly AI Credits</Text>
            <Text style={styles.creditsValue}>5/10</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar} />
          </View>
          <View style={styles.creditsFooter}>
            <Text style={styles.creditsResetText}>Resets on Oct 1st</Text>
            <TouchableOpacity style={styles.upgradeButton}>
              <Text style={styles.upgradeButtonText}>Upgrade Plan</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.featureCardsContainer}>
          <View style={styles.featureCard}>
            <View style={styles.featureCardHeader}>
                <View style={styles.featureIconContainer}>
                    {/* Placeholder for icon */}
                </View>
                <View style={styles.featureTextContainer}>
                    <Text style={styles.featureTitle}>AI Photo Enhancement</Text>
                    <Text style={styles.featureDescription}>Instantly improve lighting, color, and clarity.</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.featureButton}>
              <Text style={styles.featureButtonText}>Enhance Photo</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureCardHeader}>
                <View style={styles.featureIconContainer}>
                    {/* Placeholder for icon */}
                </View>
                <View style={styles.featureTextContainer}>
                    <Text style={styles.featureTitle}>Smart Captions</Text>
                    <Text style={styles.featureDescription}>Generate engaging, professional captions in seconds.</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.featureButton}>
              <Text style={styles.featureButtonText}>Generate Caption</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.featureCard}>
            <View style={styles.featureCardHeader}>
                <View style={styles.featureIconContainer}>
                    {/* Placeholder for icon */}
                </View>
                <View style={styles.featureTextContainer}>
                    <Text style={styles.featureTitle}>Hashtag Suggestions</Text>
                    <Text style={styles.featureDescription}>Get relevant, trending hashtags to boost your reach.</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.featureButton}>
              <Text style={styles.featureButtonText}>Suggest Hashtags</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101f22',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1a2c30',
  },
  headerButton: {
    color: '#27ccf1',
    fontSize: 16,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  mainContent: {
    padding: 16,
  },
  headline: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subheadline: {
    color: '#9cb4ba',
    fontSize: 16,
    marginTop: 4,
  },
  creditsCard: {
    backgroundColor: '#1a2c30',
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
  },
  creditsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  creditsTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  creditsValue: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#101f22',
    borderRadius: 4,
    marginTop: 12,
  },
  progressBar: {
    height: '100%',
    width: '50%', 
    backgroundColor: '#27ccf1',
    borderRadius: 4,
  },
  creditsFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  creditsResetText: {
    color: '#9cb4ba',
    fontSize: 14,
  },
  upgradeButton: {
    backgroundColor: '#27ccf120',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  upgradeButtonText: {
    color: '#27ccf1',
    fontWeight: 'bold',
    fontSize: 12,
  },
  featureCardsContainer: {
    marginTop: 24,
  },
  featureCard: {
    backgroundColor: '#1a2c30',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  featureCardHeader: {
      flexDirection: 'row',
      alignItems: 'flex-start',
  },
  featureIconContainer: {
      width: 48,
      height: 48,
      borderRadius: 8,
      backgroundColor: '#27ccf120',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 16,
  },
  featureTextContainer: {
      flex: 1,
  },
  featureTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  featureDescription: {
    color: '#9cb4ba',
    fontSize: 16,
    marginTop: 4,
  },
  featureButton: {
    backgroundColor: '#27ccf1',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 16,
  },
  featureButtonText: {
    color: '#101f22',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AiToolkitScreen;
