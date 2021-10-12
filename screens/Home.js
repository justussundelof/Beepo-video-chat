import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import MenuButtons from '../components/MenuButtons'
import ContactsMenu from '../components/ContactsMenu'
import { View, SafeAreaView, StyleSheet } from 'react-native'


function Home() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: '100%'}}>
                <Header />
                <SearchBar />
                <MenuButtons />
                <ContactsMenu />
            </SafeAreaView>

    
           
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        padding: 15
    
    }
}
)
