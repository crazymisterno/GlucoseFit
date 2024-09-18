import { View, Modal, Pressable, Text, Image, ScrollView, StyleSheet, PixelRatio, Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import '../Meals/breakfast';
import BreakfastInfo from "../Meals/breakfast";
import LunchInfo from "../Meals/lunch";
import DinnerInfo from "../Meals/dinner";
import SnackInfo from "../Meals/snack";
import { useNavigation } from "expo-router";
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

export default function Overview() {
  const [breakfastView, setBreakfastView] = useState(false);
  const [lunchView, setLunchView] = useState(false);
  const [dinnerView, setDinnerView] = useState(false);
  const [snackView, setSnackView] = useState(false);
  const gap = <View style={styles.gap}/>
  return (
    <SafeAreaView>
      <StatusBar
      style='auto'
      backgroundColor='black'
      />
      <Modal
      animationType="slide"
      onRequestClose={() => setBreakfastView(false)}
      visible={breakfastView}>
        {BreakfastInfo()}
      </Modal>
      <Modal
      animationType="slide"
      onRequestClose={() => setLunchView(false)}
      visible={lunchView}>
        {LunchInfo()}
      </Modal>
      <Modal
      animationType="slide"
      onRequestClose={() => setDinnerView(false)}
      visible={dinnerView}>
        {DinnerInfo()}
      </Modal>
      <Modal
      animationType="slide"
      onRequestClose={() => setSnackView(false)}
      visible={snackView}>
        {SnackInfo()}
      </Modal>
      <View
      style={styles.bar}>
        <Pressable
        style={{paddingRight: 10}}>
          <Text
          style={{
            color: '#fff',
            fontSize: 24,
          }}>{'<'}</Text>
        </Pressable>
        <Text style={{color:'#fff',fontSize: 24}}>Today</Text>
        <Pressable style={{paddingLeft: 10}}>
          <Text style={{color:'#fff',fontSize:24}}>{'>'}</Text>
        </Pressable>
      </View>
      <View
      style={styles.bar}>
        <View
        style={{
          flex: 1,
        }}>
          <Text style={styles.text}>Goal</Text>
          <Text style={styles.text}>3600</Text>
        </View>
        <View
        style={{
          flex: 1
        }}>
          <Text style={styles.text}>Glucose</Text>
          <Text style={styles.text}>mg/dl</Text>
        </View>
        <View
        style={{
          flex: 1
        }}>
          <Text style={styles.text}>Remaining</Text>
          <Text style={styles.text}>340</Text>
        </View>
      </View>
      <ScrollView
      style={styles.scrollView}>
        <Pressable
        onPress={() => setBreakfastView(true)}
        style={[
        styles.table, {marginTop: PixelRatio.getPixelSizeForLayoutSize(9)}]}
        >


          <View style={styles.tableRow}>
            <Text style={{flex: 1,marginLeft: PixelRatio.getPixelSizeForLayoutSize(25)}}>Breakfast</Text>
            <Text style={{flex: 1}}>Carbs</Text>
            <Text style={{flex: 1}}>Calories</Text>
            <Text style={{flex: 0.1}}>{'>'}</Text>
          </View>
        </Pressable>
        {gap}
        <Pressable style={styles.table}
        onPress={() => setLunchView(true)}>
          <View style={styles.tableRow}>
            <Text style={{flex: 1,marginLeft: PixelRatio.getPixelSizeForLayoutSize(25)}}>Lunch</Text>
            <Text style={{flex: 1}}>Carbs</Text>
            <Text style={{flex: 1}}>Calories</Text>
            <Text style={{flex: 0.1}}>{'>'}</Text>
          </View>
        </Pressable>
        {gap}
        <Pressable style={styles.table}
        onPress={() => setDinnerView(true)}>
          <View style={styles.tableRow}>
            <Text style={{flex: 1, marginLeft: PixelRatio.getPixelSizeForLayoutSize(25)}}>Dinner</Text>
            <Text style={{flex: 1}}>Carbs</Text>
            <Text style={{flex: 1}}>Calories</Text>
            <Text style={{flex: 0.1}}>{'>'}</Text>
          </View>
        </Pressable>
        {gap}
        <Pressable style={styles.table}
        onPress={() => setSnackView(true)}>
          <View style={styles.tableRow}>
            <Text style={{flex: 1, marginLeft: PixelRatio.getPixelSizeForLayoutSize(25)}}>Snacks</Text>
            <Text style={{flex: 1}}>Carbs</Text>
            <Text style={{flex: 1}}>Calories</Text>
            <Text style={{flex: 0.1}}>{'>'}</Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
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
    height: PixelRatio.getPixelSizeForLayoutSize(400)
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  gap: {
    height: PixelRatio.getPixelSizeForLayoutSize(5)
  },
  table: {
    backgroundColor: 'pink',
    borderRadius: 8,
    marginHorizontal: PixelRatio.getPixelSizeForLayoutSize(4)
  }
})