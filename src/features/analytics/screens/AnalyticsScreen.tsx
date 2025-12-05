
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { analyticsData } from '../../../shared/api/apiMock';

const { width } = Dimensions.get('window');

const chartData = [81.75, 15.75, 30.75, 69.75, 24.75, 75.75, 45.75, 33.75, 90.75, 111.75, 0.75, 60.75, 96.75, 18.75];

const AnalyticsCard = ({ title, value, change, positive }: { title: string, value: string, change: number, positive: boolean }) => (
  <View style={styles.kpiCard}>
    <Text style={styles.kpiTitle}>{title}</Text>
    <Text style={styles.kpiValue}>{value}</Text>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: positive ? '#12B76A' : '#F04438'}}>{positive ? '↑' : '↓'}</Text>
        <Text style={[styles.kpiChange, { color: positive ? '#12B76A' : '#F04438' }]}>{change}%</Text>
    </View>
  </View>
);

export const AnalyticsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.headerButton}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Analytics Dashboard</Text>
        <View style={{width: 40}} />
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Last 30 Days</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainCard}>
        <Text style={styles.mainCardTitle}>Profile Views</Text>
        <Text style={styles.mainCardValue}>{analyticsData.profileViews.total.toLocaleString()}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#12B76A'}}>↑</Text>
            <Text style={[styles.mainCardChange, { color: '#12B76A' }]}>{analyticsData.profileViews.change}%</Text>
        </View>
        {/* Add chart here */}
      </View>

      <View style={styles.kpiGrid}>
        <AnalyticsCard 
            title="Post Engagement Rate" 
            value={`${analyticsData.postEngagementRate.rate}%`} 
            change={analyticsData.postEngagementRate.change} 
            positive={analyticsData.postEngagementRate.change > 0} 
        />
        <AnalyticsCard 
            title="Leads Generated" 
            value={analyticsData.leadsGenerated.total.toString()} 
            change={analyticsData.leadsGenerated.change} 
            positive={analyticsData.leadsGenerated.change > 0}
        />
        <AnalyticsCard 
            title="Appointments Booked" 
            value={analyticsData.appointmentsBooked.total.toString()} 
            change={analyticsData.appointmentsBooked.change} 
            positive={analyticsData.appointmentsBooked.change > 0}
        />
      </View>

      <Text style={styles.sectionHeader}>Top Performing Posts</Text>
      <View style={styles.postsContainer}>
        {analyticsData.topPerformingPosts.map(post => (
          <View key={post.id} style={styles.postCard}>
            <Image source={{ uri: post.thumbnail }} style={styles.postThumbnail} />
            <View style={styles.postInfo}>
              <Text style={styles.postCaption} numberOfLines={2}>{post.caption}</Text>
              <Text style={styles.postStats}>Views: {post.views.toLocaleString()}, Likes: {post.likes.toLocaleString()}</Text>
            </View>
          </View>
        ))}
      </View>

      <Text style={styles.sectionHeader}>Visibility Ranking</Text>
      <View style={styles.rankingCard}>
        <Text style={styles.rankingText}>You rank</Text>
        <Text style={styles.rankingValue}>#{analyticsData.visibilityRanking.rank}</Text>
        <Text style={styles.rankingCategory}>in {analyticsData.visibilityRanking.category}</Text>
        <Text style={styles.rankingLocation}>within {analyticsData.visibilityRanking.location}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111e21',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerButton: {
    color: '#3ecaea',
    fontSize: 16,
  },
  headerTitle: {
    color: '#E2E8F0',
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  filterButton: {
    backgroundColor: '#1a2c30',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  filterButtonText: {
    color: '#E2E8F0',
  },
  mainCard: {
    backgroundColor: '#1a2c30',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
  },
  mainCardTitle: {
    color: '#E2E8F0',
    fontSize: 16,
  },
  mainCardValue: {
    color: '#E2E8F0',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 8,
  },
  mainCardChange: {
    fontSize: 14,
    marginLeft: 4,
  },
  kpiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  kpiCard: {
    backgroundColor: '#1a2c30',
    borderRadius: 12,
    padding: 16,
    width: width / 2 - 24,
    marginBottom: 16,
  },
  kpiTitle: {
    color: '#9cb4ba',
    fontSize: 14,
  },
  kpiValue: {
    color: '#E2E8F0',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  kpiChange: {
    fontSize: 14,
    marginLeft: 4,
  },
  sectionHeader: {
    color: '#E2E8F0',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  postsContainer: {
    paddingHorizontal: 16,
  },
  postCard: {
    flexDirection: 'row',
    backgroundColor: '#1a2c30',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  postThumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  postInfo: {
    flex: 1,
    marginLeft: 12,
  },
  postCaption: {
    color: '#E2E8F0',
    fontSize: 14,
  },
  postStats: {
    color: '#9cb4ba',
    fontSize: 12,
    marginTop: 8,
  },
  rankingCard: {
    backgroundColor: '#1a2c30',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  rankingText: {
    color: '#9cb4ba',
    fontSize: 14,
  },
  rankingValue: {
    color: '#3ecaea',
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  rankingCategory: {
    color: '#E2E8F0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rankingLocation: {
    color: '#9cb4ba',
    fontSize: 14,
    marginTop: 4,
  },
});
