import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import repositories from '../data/repositories'

const RepositoryList = () => {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text>----------</Text>}
            renderItem={({ item: repo }) => (
                <View key={repo.id}>
                    <Text>id: {repo.id}</Text>
                    <Text>fullName: {repo.fullName}</Text>
                    <Text>description: {repo.description}</Text>
                    <Text>language: {repo.language}</Text>
                    <Text>stargazersCount: {repo.stargazersCount}</Text>
                    <Text>forksCount: {repo.forksCount}</Text>
                    <Text>reviewCount: {repo.reviewCount}</Text>
                    <Text>ratingAverage: {repo.ratingAverage}</Text>
                </View>
            )}
        />
    )
}

export default RepositoryList

const styles = StyleSheet.create({})
