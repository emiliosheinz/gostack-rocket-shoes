import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #141419;
`

export const AvailableItems = styled.FlatList`
  flex: none;
`

export const Item = styled.View`
  background: #fff;
  border-radius: 5px;
  max-width: 250px;
  padding: 20px;
  margin: 5px;
`

export const ItemImage = styled.Image`
  height: 200px;
  width: 200px;
  align-self: center;
`

export const ItemTitle = styled.Text`
  font-size: 16px;
  color: #333;
`

export const ItemPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: #000;
  margin: 5px 0;
`

export const AddToCartButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  background-color: #7159c1;
  height: 42px;
  border-radius: 5px;
`

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  flex: 3;
  text-align: center;
  align-self: center;
`

export const CartIconContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: rgba(0, 0, 0, 0.1);
`

export const Amount = styled.Text`
  color: #fff;
  font-size: 14px;
`
