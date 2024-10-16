import React, {Component, useState, useEffect} from 'react';
import {Alert, Button, StyleSheet, View, Text} from 'react-native';

export default function App() {
  const [level, setLevel] = useState(1)
  const [score, setScore] = useState(1)
  const [dice, setDice] = useState(6)

  function levelUp()
  {
    if (level < 10)
    {
      setLevel(level + 1)
    }
  }
  function levelDown()
  {
    if (level > 1)
    {
      setLevel(level - 1)
    }
  }

  function scoreUp()
  {
    if (score < 10)
    {
      setScore(score + 1)
    }
  }
  function scoreDown()
  {
    if (score > 1)
    {
      setScore(score - 1)
    }
  }

  function diceUp()
  {
    if (dice < 20)
    {
      setDice(dice + 1)
    }
  }
  function diceDown()
  {
    if (dice > 1)
    {
      setDice(dice - 1)
    }
  }


    return (
      <View style={styles.container}>

        <View style={[
                styles.container,
                styles.upperbox,
                {
                  // Try setting `flexDirection` to `"row"`.
                  flexDirection: 'row',
                  flex: 1,
                },
              ]}>
          <View style={[
            styles.boxes,
            {
              flex: 1
            }
            ]}>
            <Text style={styles.titles}>SZINTEK száma:</Text>
            <View style={styles.gomb}>
              <Button onPress={levelUp} title="+" color="#841584"/>
            </View>
            <Text style={styles.szoveg}>{level}</Text>
            <View style={styles.gomb}>
              <Button onPress={levelDown} title="-" color="#841584"/>
            </View>
          </View>

          <View style={[
            styles.boxes,
            {
              flex: 1
            }
            ]}>
            <Text style={styles.titles}>PONTOK száma:</Text>
            <View style={styles.gomb}>
              <Button onPress={scoreUp} title="+" color="#841584"/>
            </View>
            <Text style={styles.szoveg}>{score}</Text>
            <View style={styles.gomb}>
              <Button onPress={scoreDown} title="-" color="#841584"/>
            </View>
          </View>
        </View>



        <View style={[
                styles.container,
                styles.lowerbox,
                {
                  // Try setting `flexDirection` to `"row"`.
                  flexDirection: 'row',
                },
              ]}>
          <View style={[
            {
              flex: 1
            }
            ]}>
            <Text style={styles.dice_title}>Kocka oldalszáma:</Text>
            <View style={styles.gomb}>
              <Button onPress={diceUp} title="+" color="#841584"/>
            </View>
            <Text style={styles.szoveg}>{dice}</Text>
            <View style={styles.gomb}>
              <Button onPress={diceDown} title="-" color="#841584"/>
            </View>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  lowerbox:
  {
    borderTopColor: 'black',
    borderTopWidth: 1,
    paddingTop: 70,
  },
  gomb: {
    marginVertical: 10,
    marginHorizontal: 'auto',
    width: 100,
  },
  szoveg:
  {
    textAlign: 'center',
    backgroundColor: 'purple',
    marginHorizontal: 50,
    color: 'white',
    fontSize: 20,
    padding: 5,
  },
  titles:
  {
    textAlign: 'center',
    fontSize: 25,
    backgroundColor: 'purple',
    color: 'white',
    padding: 10,
  },
  boxes:
  {
    marginVertical: 'auto',
    margin: 10,
    backgroundColor: 'pink',
    height: 'auto',
  },
  dice_title:
  {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'purple',
    marginHorizontal: 10,
    fontSize: 25,
  },
});