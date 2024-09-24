import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useAppSelector } from '../../redux/hooks';
import LinearGradient from 'react-native-linear-gradient';
import { RootState } from '@reduxjs/toolkit/query';

const ForecastScreen = () => {
    const { forecast } = useAppSelector((state: any) => state.weather);

    return (
        <LinearGradient colors={['#74ebd5', '#ACB6E5']} style={styles.container}>
            <Text style={styles.title}>5-Day Forecast</Text>

            <FlatList
                data={forecast}
                keyExtractor={(item) => item.dt.toString()}
                renderItem={({ item }) => (
                    <View style={styles.forecastItem}>
                        <Text style={styles.dateText}>{new Date(item.dt * 1000).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                        })}</Text>
                        <Text style={styles.tempText}>Temp: {item.main.temp}°C</Text>
                        <Text style={styles.conditionText}>{item.weather[0].description}</Text>
                    </View>
                )}
            />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    forecastItem: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
    },
    dateText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    tempText: {
        fontSize: 16,
        color: '#555',
        marginTop: 10,
    },
    conditionText: {
        fontSize: 16,
        color: '#888',
        marginTop: 5,
    },
});

export default ForecastScreen;
