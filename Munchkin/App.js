import React, {Component, useState, useEffect} from 'react';
import {Alert, Button, StyleSheet, View, Text, Image} from 'react-native';

export default function App() {
  const [level, setLevel] = useState(1)
  const [score, setScore] = useState(1)
  const [dice, setDice] = useState(6)
  const [roll, setRoll] = useState(0)
  const [diceVisible, setDiceVisible] = useState(false)

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
    if (dice > 2)
    {
      setDice(dice - 1)
    }
  }

  function rollDice()
  {
    setDiceVisible(true)
    setTimeout(() => {
      setRoll(Math.floor(Math.random() * dice) + 1)
      setDiceVisible(false)
    }, 2000);
  
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
              <Button onPress={levelUp} title="+" color="#a160a1"/>
            </View>
            <Text style={styles.szoveg}>{level}</Text>
            <View style={styles.gomb}>
              <Button onPress={levelDown} title="-" color="#a160a1"/>
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
              <Button onPress={scoreUp} title="+" color="#a160a1"/>
            </View>
            <Text style={styles.szoveg}>{score}</Text>
            <View style={styles.gomb}>
              <Button onPress={scoreDown} title="-" color="#a160a1"/>
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
              <Button onPress={diceUp} title="+" color="#a160a1"/>
            </View>
            <Text style={styles.szoveg}>{dice}</Text>
            <View style={styles.gomb}>
              <Button onPress={diceDown} title="-" color="#a160a1"/>
            </View>

            <View style={styles.dice_button}>
              <Button onPress={rollDice} title="Kockadobás" color="#a160a1"/>
            </View>

            <View>
              <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20,}}>Kockadobás eredménye:</Text>
              {diceVisible ? 
                <Image source={require("./dice.gif")} style={{width:50, height:50, marginHorizontal: 'auto'}}></Image>
                :
                <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold',}}>{roll}</Text>
              }
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
    marginBottom: 50,
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
    backgroundColor: '#d4a5d4',
    height: 'auto',
  },
  dice_title:
  {
    textAlign: 'center',
    marginHorizontal: 10,
    fontSize: 20,
  },
  dice_button: {
    marginTop: 30,
    marginHorizontal: 'auto',
    width: 250,
  },
  dice_roll:
  {
    textAlign: 'center',

  },
});