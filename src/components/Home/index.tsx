import { View , Text, FlatList, Image } from 'react-native'
import { Tasks } from '../Tasks'
import { styles } from './style'


export function Home(){

    const tarefas = 
        [
            "Limpar o quarto",
            "Estudar",
            "Ver ingressos do anime friends",
            "Comprar as crônicas de gelo e Fogo",
            "Pesquisar sobre pc novo"
        ]

    return(
        <FlatList 
              data={ tarefas }
              style={styles.body}
              keyExtractor={ item => item }
              renderItem={({ item }) =>(
              
              <Tasks 
                key={ item }
                description={ item }
                />
              
                )}
                
                ListEmptyComponent={()=> (
                  <View style={styles.emptyContainer}>
                    <Image source={require('../../../assets/Clipboard.png')} />
                    <Text style={styles.emptyText}>Você ainda não tem tarefas cadastradas</Text>
                    <Text style={styles.emptySubtitle}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
                )}
              />
    )
}