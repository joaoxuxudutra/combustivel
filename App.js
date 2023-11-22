import React, { Component } from 'react';
import {StyleSheet, View, Text, TextInput, Button, Pressable } from 'react-native';

class CalculadoraCombustivel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      precoLitro: '',
      quantidadeAbastecida: '',
      quilometrosPercorridos: '',
      resultado: 0,
    };
  }

  calcularCustoCombustivel = () => {
    const { precoLitro, quantidadeAbastecida, quilometrosPercorridos } = this.state;

    if (precoLitro && quantidadeAbastecida && quilometrosPercorridos) {
      const custo = (precoLitro * quantidadeAbastecida) / quilometrosPercorridos;
      this.setState({ resultado: custo.toFixed(2) });
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <View style={styles.content}>
          <Text style={styles.texto}>Preço por Litro:</Text>
          <TextInput
            onChangeText={(precoLitro) => this.setState({ precoLitro })}
            value={this.state.precoLitro}
            keyboardType="numeric"
            placeholder="Digite o preço por litro"
          />

          <Text style={styles.texto}>Quantidade Abastecida (litros):</Text>
          <TextInput
            onChangeText={(quantidadeAbastecida) => this.setState({ quantidadeAbastecida })}
            value={this.state.quantidadeAbastecida}
            keyboardType="numeric"
            placeholder="Digite a quantidade abastecida"
          />

          <Text style={styles.texto}>Quilômetros Percorridos:</Text>
          <TextInput
            onChangeText={(quilometrosPercorridos) => this.setState({ quilometrosPercorridos })}
            value={this.state.quilometrosPercorridos}
            keyboardType="numeric"
            placeholder="Digite os quilômetros percorridos"
          />

          <Button title="Calcular" onPress={this.calcularCustoCombustivel} />

          {this.state.resultado > 0 && (
            <Text style={{ marginTop: 20 }}>
              Custo por quilômetro: R$ {this.state.resultado}
            </Text>
          )}
          
          
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 16,
    backgroundColor:'#fff',
  },
  botao: {
    backgroundColor: '#2ECC71',
    paddingVertical: 12,
    paddingHorizontal: 24,
    padding: 10,

  },
  texto:{
    fontSize: 20,
  },

})
export default CalculadoraCombustivel;