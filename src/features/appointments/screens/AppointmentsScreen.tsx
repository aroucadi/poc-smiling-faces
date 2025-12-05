
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

const appointments = [
    { date: new Date(2024, 7, 1), type: 'implant', patient: 'Isabella Rossi', description: 'Dental Implant Consultation', time: '10:30 AM' },
    { date: new Date(2024, 7, 4), type: 'check-up', patient: 'John Doe', description: 'Routine Check-up', time: '11:00 AM' },
    { date: new Date(2024, 7, 5), type: 'whitening', patient: 'Maria Garcia', description: 'Teeth Whitening', time: '2:00 PM' },
    { date: new Date(2024, 7, 6), type: 'implant', patient: 'James Williams', description: 'Dental Implant Consultation', time: '9:00 AM' },
    { date: new Date(2024, 7, 6), type: 'whitening', patient: 'Patricia Jones', description: 'Teeth Whitening', time: '11:00 AM' },
    { date: new Date(2024, 7, 10), type: 'whitening', patient: 'Robert Brown', description: 'Teeth Whitening', time: '3:00 PM' },
    { date: new Date(2024, 7, 17), type: 'implant', patient: 'Jennifer Davis', description: 'Dental Implant Consultation', time: '1:00 PM' },
    { date: new Date(2024, 7, 22), type: 'check-up', patient: 'Michael Miller', description: 'Routine Check-up', time: '4:00 PM' },
];

const AppointmentItem = ({ appointment }: any) => {
  const typeColor = appointment.type === 'implant' ? '#8B5CF6' : appointment.type === 'check-up' ? '#34D399' : '#FBBF24';
  return (
    <View style={styles.appointmentItem}>
      <View style={[styles.appointmentTypeIndicator, { backgroundColor: typeColor }]} />
      <View style={styles.appointmentDetails}>
        <Text style={styles.patientName}>{appointment.patient}</Text>
        <Text style={styles.appointmentDescription}>{appointment.description}</Text>
      </View>
      <Text style={styles.appointmentTime}>{appointment.time}</Text>
    </View>
  );
};

export const AppointmentsScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 7, 5));

  const renderCalendar = () => {
    // Basic calendar rendering logic
    const month = selectedDate.toLocaleString('default', { month: 'long' });
    const year = selectedDate.getFullYear();
    const daysInMonth = new Date(year, selectedDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, selectedDate.getMonth(), 1).getDay();

    let days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<View key={`empty-${i}`} style={styles.calendarDay} />);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, selectedDate.getMonth(), i);
      const isSelected = i === selectedDate.getDate();
      const appointmentsOnDay = appointments.filter(a => a.date.toDateString() === date.toDateString());

      days.push(
        <TouchableOpacity key={i} style={styles.calendarDay} onPress={() => setSelectedDate(date)}>
          <View style={isSelected ? styles.selectedDay : {}}>
            <Text style={isSelected ? styles.selectedDayText : styles.dayText}>{i}</Text>
            <View style={styles.dotsContainer}>
              {appointmentsOnDay.map((a, index) => (
                <View key={index} style={[styles.dot, { backgroundColor: a.type === 'implant' ? '#8B5CF6' : a.type === 'check-up' ? '#34D399' : '#FBBF24' }]} />
              ))}
            </View>
          </View>
        </TouchableOpacity>
      );
    }
    return days;
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Appointments</Text>
        </View>
        <ScrollView>
            <View style={styles.calendarContainer}>
                <View style={styles.calendarHeader}>
                    <TouchableOpacity><Text style={styles.calendarNav}>‹</Text></TouchableOpacity>
                    <Text style={styles.calendarMonthYear}>{selectedDate.toLocaleString('default', { month: 'long' })} {selectedDate.getFullYear()}</Text>
                    <TouchableOpacity><Text style={styles.calendarNav}>›</Text></TouchableOpacity>
                </View>
                <View style={styles.calendarGrid}>{renderCalendar()}</View>
            </View>

            <Text style={styles.upcomingHeader}>Upcoming Appointments</Text>
            <View style={styles.appointmentsList}>
                {appointments.filter(a => a.date.toDateString() === selectedDate.toDateString()).map((app, index) => (
                    <AppointmentItem key={index} appointment={app} />
                ))}
            </View>
        </ScrollView>
        <TouchableOpacity style={styles.fab}>
            <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#101f22' },
  header: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#1a2c30', alignItems: 'center' },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  calendarContainer: { margin: 16, backgroundColor: '#1a2c30', borderRadius: 12, padding: 16 },
  calendarHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  calendarNav: { color: '#fff', fontSize: 24 },
  calendarMonthYear: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  calendarGrid: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 16 },
  calendarDay: { width: (width - 64) / 7, alignItems: 'center', paddingVertical: 8 },
  dayText: { color: '#fff' },
  selectedDay: { backgroundColor: '#27ccf1', borderRadius: 16, width: 32, height: 32, justifyContent: 'center', alignItems: 'center' },
  selectedDayText: { color: '#101f22', fontWeight: 'bold' },
  dotsContainer: { flexDirection: 'row', marginTop: 4 },
  dot: { width: 6, height: 6, borderRadius: 3, marginHorizontal: 1 },
  upcomingHeader: { color: '#fff', fontSize: 18, fontWeight: 'bold', paddingHorizontal: 16, marginTop: 16, marginBottom: 8 },
  appointmentsList: { paddingHorizontal: 16 },
  appointmentItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#1a2c30', borderRadius: 12, padding: 16, marginBottom: 12 },
  appointmentTypeIndicator: { width: 4, height: '100%', borderRadius: 2, marginRight: 12 },
  appointmentDetails: { flex: 1 },
  patientName: { color: '#fff', fontWeight: 'bold' },
  appointmentDescription: { color: '#9cb4ba', fontSize: 12 },
  appointmentTime: { color: '#9cb4ba' },
  fab: { position: 'absolute', bottom: 16, right: 16, backgroundColor: '#27ccf1', width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center' },
  fabText: { color: 'white', fontSize: 24 },
});
