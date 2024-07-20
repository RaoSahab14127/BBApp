import Couchcomp from '../../components/Couchcomp.js';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import Inputmessage from '../../components/Inputmessage.js';

export default function TalktoCouch() {
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <ScrollView
        style={{overflow: 'scroll'}}
        ref={ref => {
          this.scrollView = ref;
        }}
        onContentSizeChange={() =>
          this.scrollView.scrollToEnd({animated: true})
        }>
        <Couchcomp />
        <Couchcomp />
        <Couchcomp />
        <Couchcomp />
        <Couchcomp />
        <Couchcomp />
        <Couchcomp />
        <Couchcomp />
      </ScrollView>

      <View>
        <Text>Ask the question</Text>
        <Inputmessage />
      </View>
    </View>
  );
}
