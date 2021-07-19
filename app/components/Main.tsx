import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RepositoryList from './RepositoryList'

const Main = () => {
    return (
        <View style={styles.container}>
            <Text>Rate Repository Application</Text>
            <RepositoryList />
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
    }
})
