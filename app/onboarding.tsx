import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
const Onboarding = () => {
    return (
        <View>
            <Text>
            <Link href="/onboarding">    Onboarding Screen </Link>
            </Text>
        </View>
    )
}