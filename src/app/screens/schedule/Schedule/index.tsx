import React, { useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import SelectField from '../../../atoms/SelectField';
import Scheduler from '../../../components/Scheduler';
import { useGetSchedule } from '../../../hooks/api/schedule/useGetSchedule';
import Skeleton from '../../../atoms/Skeleton';

interface SemesterOptionType {
    label: string;
    value: string;
}

const semesters: SemesterOptionType[] = [
    { label: 'Spring 24', value: 'spring_2024' },
    { label: 'Summer 24', value: 'summer_2024' },
];

function Schedule(): JSX.Element {
    const [selectedSemester, setSelectedSemester] = useState<SemesterOptionType>(semesters[0]);
    const { data: courses, isLoading } = useGetSchedule(selectedSemester.value);

    const handleSemesterSelect = (option: SemesterOptionType): void => {
        setSelectedSemester(option);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.screen}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>My Schedule</Text>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity style={styles.iconButton}>
                            <FontAwesome name="pencil" size={22} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons name="people" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.selectFieldContainer}>
                    <SelectField label="Choose semester" data={semesters} onSelect={handleSemesterSelect} width={90} />
                </View>
                {isLoading ? (
                    <View style={styles.loadingContainer}>
                        <Skeleton variant="rounded" width={350} height={74} />
                    </View>
                ) : (
                    <Scheduler courses={courses || []} />
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 16,
    },
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        position: 'relative',
    },
    loadingContainer: {
        padding: 10,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        position: 'absolute',
        left: 0,
        right: 0,
    },
    iconContainer: {
        flexDirection: 'row',
        marginLeft: 'auto',
    },
    iconButton: {
        marginLeft: 5,
        marginRight: 5,
    },
    selectFieldContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
});

export default Schedule;
