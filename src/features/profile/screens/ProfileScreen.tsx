
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { posts, Post } from '../../../shared/api/apiMock';

const { width } = Dimensions.get('window');
const profile = {
    name: 'Dr. Evelyn Reed',
    specialty: 'Cosmetic Dentist',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCali-NK9LGIuAfngdxMZa_d43RgHSk9qI6Q6nON60gE4cwuq_pRo1FI5uSQNNusnfx9tCnqH3vrdofIUmYy5X62tslzku1bsUsg2o8wgmaCNasO4CnpkvyXVTmMNRDOF-fy03jDy8qtm_jgdPN99ki_DvABCX-uZw9B4hXSqaJGZmtR4U8kVGvx1kYmdSPcFcp-6iObQ7_GvXll8mmhs_m9FS5Bu4Wfa3TCpCyJpQou0rglTAAJIKApwbz4eRmqKhaoGawhoBdEPE',
    coverPhoto: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOWXayg7HHcnpDcLRpMNzQAFDaoq6oLsdlP793A5-Zpkkvi62LklqiLqKwejk6oElTAW0ByJVGmxfuYtvC7WtBnjFovNWgkZIlFzheKoWMvjnJvAtvUcjxnSMctyvlh6ESnl3R-SzFvGWqfvfIuDEgS6SlxT3Pb7nNP8VmqD7NIEvVM_ZaVX_NLJFS694Gi4FsT6XigvjK2wSADWhWW7Bla_43ZgovIgp0MGN2AzhW4tYF8Cq3qqSxE1R83n4bSWFPh1yonHpzR7o',
    stats: {
        posts: 128,
        followers: 1200,
        visibility: 88,
    },
    bio: 'Specializing in cosmetic dentistry and smile makeovers with over 10 years of experience. Committed to providing the highest quality of care in a comfortable environment.'
}

export const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={{ uri: profile.coverPhoto }} style={styles.coverPhoto} />
        <View style={styles.avatarContainer}>
          <Image source={{ uri: profile.avatar }} style={styles.avatar} />
        </View>
      </View>

      <View style={styles.profileInfoContainer}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.specialty}>{profile.specialty}</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{profile.stats.posts}</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{profile.stats.followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statValue}>{profile.stats.visibility}%</Text>
          <Text style={styles.statLabel}>Visibility</Text>
        </View>
      </View>

      <View style={styles.planBanner}>
          <View>
            <Text style={styles.planTitle}>Free Plan</Text>
            <Text style={styles.planSubtitle}>Upgrade for more features.</Text>
          </View>
          <TouchableOpacity style={styles.upgradeButton}>
              <Text style={styles.upgradeButtonText}>Upgrade</Text>
          </TouchableOpacity>
      </View>

      <Text style={styles.bio}>{profile.bio}</Text>

      <View style={styles.tabsContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Testimonials</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>About</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.postsGrid}>
        {posts.map((post) => (
          <TouchableOpacity key={post.id} style={styles.postTile}>
            <Image source={{ uri: post.media[0].url }} style={styles.postImage} />
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.fab}>
          <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121d20',
  },
  headerContainer: {
    marginBottom: 60,
  },
  coverPhoto: {
    width: '100%',
    height: 180,
  },
  avatarContainer: {
    position: 'absolute',
    top: 120,
    left: width / 2 - 60,
    borderWidth: 4,
    borderColor: '#121d20',
    borderRadius: 64,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  profileInfoContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E2E8F0',
  },
  specialty: {
    fontSize: 16,
    color: '#9cb4ba',
    marginTop: 4,
  },
  editProfileButton: {
    marginTop: 12,
    backgroundColor: '#1a2c30',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  editProfileButtonText: {
    color: '#E2E8F0',
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
    paddingHorizontal: 16,
  },
  stat: {
    alignItems: 'center',
    backgroundColor: '#1a2c30',
    padding: 16,
    borderRadius: 12,
    minWidth: 100
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E2E8F0',
  },
  statLabel: {
    fontSize: 14,
    color: '#9cb4ba',
    marginTop: 4,
  },
  planBanner: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#3ecaea20',
      margin: 16,
      padding: 16,
      borderRadius: 12,
  },
  planTitle: {
      color: '#3ecaea',
      fontSize: 16,
      fontWeight: 'bold'
  },
  planSubtitle: {
      color: '#9cb4ba',
      fontSize: 14,
  },
  upgradeButton: {
      backgroundColor: '#50E3C2',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20
  },
  upgradeButtonText: {
      color: '#121d20',
      fontWeight: 'bold'
  },
  bio: {
    fontSize: 14,
    color: '#9cb4ba',
    paddingHorizontal: 16,
    lineHeight: 20,
    textAlign: 'center'
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#1a2c30',
  },
  tab: {
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#3ecaea',
  },
  tabText: {
    color: '#9cb4ba',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#3ecaea',
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 1,
  },
  postTile: {
    width: width / 3 - 2,
    height: width / 3 - 2,
    margin: 1,
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
  fab: {
      position: 'absolute',
      bottom: 16,
      right: 16,
      backgroundColor: '#3ecaea',
      width: 56,
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 8
  },
  fabText: {
      color: 'white',
      fontSize: 24
  }
});
