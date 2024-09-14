import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import ProfileImage from '../component/ProfileImage';

type AboutScreenProps = {
    setCurrentScreen: (screen: 'Home' | 'About') => void;
};

export default function AboutScreen({ setCurrentScreen }: AboutScreenProps) {
    return (
        <ScrollView contentContainerStyle={styles.container} style={{ width: '100%' }}>
            <View style={styles.header}>
                <Text style={styles.title}>About Me</Text>
            </View>
            <View style={styles.profileSection}>
                <ProfileImage />
                <Text style={styles.name}>Pham Nam Phuong</Text>
                <Text style={styles.jobTitle}>Software Developer</Text>
            </View>
            <View style={styles.infoSection}>
                <Text style={styles.infoTitle}>Personal Information</Text>
                <Text style={styles.infoText}>Student Code:
                    <Text style={styles.infoText}> HE176244</Text></Text>
                <Text style={styles.infoText}>Class:
                    <Text style={styles.infoText}> SE17C</Text></Text>
                <Text style={styles.infoText}>Age:
                    <Text style={styles.infoText}>21</Text></Text>
                <Text style={styles.infoText}>Location:
                    <Text style={styles.infoText}>Da Nang, Vietnam</Text></Text>
            </View>
            <View style={styles.infoSection}>
                <Text style={styles.infoTitle}>Professional Experience</Text>
                <Text style={styles.infoText}>Company: Fsoft</Text>
                <Text style={styles.infoText}>Position: Developer</Text>
                <Text style={styles.infoText}>Years of Experience: 1</Text>
            </View>
            <Button
                title="Back to Home"
                onPress={() => setCurrentScreen('Home')}
                color="#007BFF"
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    header: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    jobTitle: {
        fontSize: 18,
        color: '#555',
    },
    infoSection: {
        marginBottom: 20,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
    },
});
