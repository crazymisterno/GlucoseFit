import { useState } from 'react';
import {View, StyleSheet, PixelRatio, Pressable, Text, Modal } from 'react-native'
import { ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function BreakfastView(visible: boolean, updater: (e: boolean) => void) {
    return (
        <Modal
      animationType="slide"
      onRequestClose={() => updater(false)}
      visible={visible}>
      <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.bar}>
            <Pressable
                onPress={() => updater(false)}>
                <Text style={[styles.text, {fontSize: 24}]}>{"<"}</Text>
            </Pressable>
                <Text style={[styles.text, {fontSize: 24, paddingLeft: PixelRatio.getPixelSizeForLayoutSize(12), paddingRight: PixelRatio.getPixelSizeForLayoutSize(12)}]}>Breakfast</Text>
                <Pressable>
                    <Text style={[styles.text, {fontSize: 24}]}>+</Text>
                </Pressable>
            </View>
            <View style={StyleSheet.compose(styles.bar, {height: PixelRatio.getPixelSizeForLayoutSize(23)})}>
                <View style={{flex: 1, alignContent: 'center', padding: PixelRatio.getPixelSizeForLayoutSize(3)}}>
                    <Text style={styles.text}>100</Text>
                </View>
                <View style={{flex: 1, alignContent: 'center', justifyContent: 'center', borderWidth: StyleSheet.hairlineWidth, borderColor: 'gray', padding: PixelRatio.getPixelSizeForLayoutSize(3)}}>
                    <Text style={styles.text}>Total carbs:</Text>
                    <Text style={styles.text}>{"{Insert carb number here}"}</Text>
                </View>
                <View style={{flex: 1, alignContent: 'center', padding: PixelRatio.getPixelSizeForLayoutSize(3)}}>
                    <Text style={styles.text}>Units</Text>
                    <Text style={styles.text}>{"{Insert units here}"}</Text>
                </View>
            </View>
            <View style={styles.bar}>
                <Text style={[styles.text, {fontSize: 24}]}>Macros</Text>
            </View>
            <ScrollView style={styles.table}>
                <View style={styles.tableColumn}>
                    <Text style={styles.tableText}>Food</Text>
                </View>
                <View style={styles.tableColumn}>
                    <Text style={styles.tableText}>Carbs</Text>
                </View>
                <View style={styles.tableColumn}>
                    <Text style={styles.tableText}>Protein</Text>
                </View>
                <View style={styles.tableColumn}>
                    <Text style={styles.tableText}>Fat</Text>
                </View>
            </ScrollView>
            <View style={StyleSheet.compose(styles.bar, {height: PixelRatio.getPixelSizeForLayoutSize(23)})}>
                <View>
                    <Text>Totals</Text>
                </View>
                <View>
                    <Text>{"{Insert carbs here}"}</Text>
                </View>
                <View>
                    <Text>{"{Insert protein here}"}</Text>
                </View>
                <View>
                    <Text>{"{Insert fat here}"}</Text>
                </View>
            </View>
        </SafeAreaView>
        </SafeAreaProvider>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    bar: {
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#000',
      height: PixelRatio.getPixelSizeForLayoutSize(15),
      borderBottomWidth: 1,
      borderBottomColor: '#f00'
    },
    text: {
      color: "#fff",
    },
    wrapperCustom: {
      borderRadius: 8,
      padding: 6,
    },
    logBox: {
      padding: 20,
      margin: 10,
      borderWidth: 1,
      borderColor: '#f0f0f0',
      backgroundColor: '#f9f9f9',
    },
    scrollView: {
      backgroundColor: 'gray',
      height: PixelRatio.getPixelSizeForLayoutSize(150)
    },
    tableColumn: {
      flexDirection: 'row',
      flex: 1,
    },
    gap: {
      height: PixelRatio.getPixelSizeForLayoutSize(5)
    },
    table: {
      backgroundColor: 'gray',
      flexDirection: 'column',
      height: PixelRatio.getPixelSizeForLayoutSize(254.51)
    },
    tableText: {
        color: 'white',
        marginLeft: PixelRatio.getPixelSizeForLayoutSize(5)
    }
  })