
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

const plans = [
    { name: 'Free', price: 0, features: ['Standard Visibility', 'Basic Analytics', '5 Appointments/mo', '10 AI Credits'] },
    { name: 'Bronze', price: 29, features: ['2x Visibility Boost', 'Standard Analytics', '20 Appointments/mo', '50 AI Credits'] },
    { name: 'Silver', price: 59, features: ['5x Visibility Boost', 'Advanced Analytics
', '50 Appointments/mo', '150 AI Credits'] },
    { name: 'Gold', price: 99, features: ['10x Visibility Boost', 'Premium Analytics', 'Unlimited Appointments', 'Unlimited AI Credits'], featured: true },
];

const PlanCard = ({ plan }: any) => (
    <View style={[styles.planCard, plan.featured && styles.featuredPlan]}>
        {plan.featured && <Text style={styles.featuredBadge}>MOST POPULAR</Text>}
        <Text style={styles.planName}>{plan.name}</Text>
        <Text style={styles.planPrice}>${plan.price}<Text style={styles.pricePerMonth}>/ month</Text></Text>
        <View style={styles.featuresList}>
            {plan.features.map((feature: string, index: number) => (
                <Text key={index} style={styles.featureItem}>• {feature}</Text>
            ))}
        </View>
    </View>
);

export const UpgradeModalScreen = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton}>
            <Text style={styles.closeButtonText}>×</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.headline}>Upgrade Your Plan</Text>
            <Text style={styles.subheadline}>Unlock your potential and grow your practice with our premium features.</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
                {plans.map((plan, index) => <PlanCard key={index} plan={plan} />)}
            </ScrollView>

        </ScrollView>
        <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Choose Gold Plan</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2D3748' },
  closeButton: { position: 'absolute', top: 16, right: 16, zIndex: 1 },
  closeButtonText: { color: '#F7FAFC', fontSize: 32 },
  scrollViewContent: { alignItems: 'center', paddingBottom: 100 },
  headline: { color: '#F7FAFC', fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginTop: 60 },
  subheadline: { color: '#A0AEC0', fontSize: 16, textAlign: 'center', marginHorizontal: 24, marginTop: 8, marginBottom: 24 },
  carousel: { paddingHorizontal: (width - 300) / 2 },
  planCard: {
    backgroundColor: '#4A5568',
    borderRadius: 12,
    padding: 24,
    width: 300,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: 'transparent'
  },
  featuredPlan: {
    borderColor: '#9EF0D7',
    transform: [{ scale: 1.05 }]
  },
  featuredBadge: { color: '#9EF0D7', fontWeight: 'bold', position: 'absolute', top: 16, right: 16 },
  planName: { color: '#F7FAFC', fontSize: 20, fontWeight: 'bold' },
  planPrice: { color: '#F7FAFC', fontSize: 48, fontWeight: '900', marginVertical: 16 },
  pricePerMonth: { fontSize: 16, fontWeight: '500', color: '#A0AEC0' },
  featuresList: { marginTop: 8 },
  featureItem: { color: '#F7FAFC', fontSize: 14, marginBottom: 8 },
  ctaButton: { position: 'absolute', bottom: 16, left: 16, right: 16, backgroundColor: '#9EF0D7', padding: 16, borderRadius: 12, alignItems: 'center' },
  ctaButtonText: { color: '#2D3748', fontSize: 18, fontWeight: 'bold' },
});
