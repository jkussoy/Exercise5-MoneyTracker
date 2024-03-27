import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Button, Gap, PageHeader, TextInput} from '../../components';

const CashOnHand = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <PageHeader
        label="CashOnHand"
        backButton={true}
        navigation={navigation}
        nav="SignIn"
      />
      <View style={styles.contentWrapper1}>
        <TextInput label="Description" placeholder="Add the description" />
        <Gap height={16} />
        <TextInput label="Type" placeholder="Debit / Credit" />
        <Gap height={22} />
        <Button label="Save" />
        <Gap height={52} />
      </View>
      <View style={styles.contentWrapper02}>
        <Text style={styles.transactionCount}>Last 3 Transactions</Text>
        <View style={styles.transactions}>
          <View style={styles.leftInnerBorder}>
            <Text style={styles.date}>17 April 2020</Text>
            <Text style={styles.items}>Water, Food</Text>
          </View>
          <View style={styles.rightInnerBorder1}>
            <Text style={styles.priceMinus}>-Rp. 300.000</Text>
          </View>
        </View>
        <View style={styles.transactions}>
          <View style={styles.leftInnerBorder}>
            <Text style={styles.date}>18 April 2020</Text>
            <Text style={styles.items}>Office Supplies</Text>
          </View>
          <View style={styles.rightInnerBorder2}>
            <Text style={styles.priceMinus}>-Rp. 300.000</Text>
          </View>
        </View>
        <View style={styles.transactions}>
          <View style={styles.leftInnerBorder}>
            <Text style={styles.date}>19 April 2020</Text>
            <Text style={styles.items}>Topup</Text>
          </View>
          <View style={styles.rightInnerBorder3}>
            <Text style={styles.pricePlus}>+Rp. 300.000</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CashOnHand;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper1: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 26,
    marginTop: 24,
    paddingBottom: 22,
  },
  contentWrapper02: {
    alignContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 26,
    marginTop: 24,
    paddingBottom: 35,
  },
  transactionCount: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  transactions: {
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 11,
    alignItems: 'center',
  },
  rightInnerBorder1: {
    paddingLeft: 160,
  },
  rightInnerBorder2: {
    paddingLeft: 140,
  },
  rightInnerBorder3: {
    paddingLeft: 160,
  },
  date: {
    fontFamily: 'Poppins-Light',
  },
  items: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  priceMinus: {
    fontFamily: 'Poppins-Medium',
    color: '#D9435E',
  },
  pricePlus: {
    fontFamily: 'Poppins-Medium',
    color: '#1ABC9C',
  },
});
